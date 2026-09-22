// Minimal GitHub Contents API client used by the admin to persist
// config + images in production (Vercel filesystem is read-only).

const OWNER = process.env.GITHUB_OWNER || "louis-lucien";
const REPO = process.env.GITHUB_REPO || "portfolio";
const BRANCH = process.env.GITHUB_BRANCH || "master";
const API = "https://api.github.com";

/** Use GitHub storage in production (Vercel) or when explicitly opted in. */
export function isGithubMode(): boolean {
  return !!process.env.VERCEL || process.env.USE_GITHUB_STORAGE === "1";
}

function token(): string {
  const t = process.env.GITHUB_TOKEN;
  if (!t) throw new Error("GITHUB_TOKEN manquant : ajoutez-le dans les variables d'environnement Vercel.");
  return t;
}

function encodePath(p: string): string {
  // Keep slashes, encode each segment.
  return p.split("/").map(encodeURIComponent).join("/");
}

async function gh(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token()}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
}

async function getSha(path: string): Promise<string | null> {
  const res = await gh(`/repos/${OWNER}/${REPO}/contents/${encodePath(path)}?ref=${BRANCH}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub (lecture ${path}) : ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? null : data.sha ?? null;
}

/** Create or update a file. `contentBase64` must be base64-encoded content. */
export async function commitFile(path: string, contentBase64: string, message: string): Promise<void> {
  const sha = await getSha(path);
  const res = await gh(`/repos/${OWNER}/${REPO}/contents/${encodePath(path)}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`GitHub (écriture ${path}) : ${res.status} ${detail}`);
  }
}

interface DirEntry {
  name: string;
  type: string;
}

/** List a directory's entries. Returns [] if it doesn't exist. */
export async function listDir(path: string): Promise<DirEntry[]> {
  const res = await gh(`/repos/${OWNER}/${REPO}/contents/${encodePath(path)}?ref=${BRANCH}`);
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub (listing ${path}) : ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
