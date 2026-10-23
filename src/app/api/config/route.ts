import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { isAuthed } from "@/lib/auth";
import { commitFile, isGithubMode, readFile } from "@/lib/github";

const CONFIG_PATH = path.join(process.cwd(), "src/config/portfolio.ts");
const CONFIG_REPO_PATH = "src/config/portfolio.ts";

const CONFIG_EXPORTS = [
  "personal", "hero", "about", "skills", "projects",
  "formation", "certifications", "experience", "contact", "blog",
];

/** Evaluate the config source (pure `export const` object literals, no imports)
 * into a plain data object. Used to read the LIVE config from GitHub. */
function parseConfig(source: string): Record<string, unknown> {
  const ret = CONFIG_EXPORTS
    .map((n) => `${n}:(typeof ${n}!=="undefined"?${n}:undefined)`)
    .join(",");
  const code = source.replace(/export\s+const\s+/g, "const ") + `\n;return {${ret}};`;
  // eslint-disable-next-line no-new-func, @typescript-eslint/no-implied-eval
  return new Function(code)() as Record<string, unknown>;
}

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  // In production, read the LIVE config from GitHub so the admin never loads a
  // stale build-time snapshot that a later save could overwrite.
  if (isGithubMode()) {
    try {
      const liveRaw = await readFile(CONFIG_REPO_PATH);
      if (liveRaw) {
        return NextResponse.json({ raw: liveRaw, data: parseConfig(liveRaw) });
      }
    } catch {
      // Fall back to the bundled module below.
    }
  }

  try {
    // Raw source is best-effort (may be absent from the serverless bundle).
    let raw = "";
    try {
      raw = await fs.readFile(CONFIG_PATH, "utf-8");
    } catch {}

    // Pre-parsed data comes from the bundled module (always available).
    const mod = await import("@/config/portfolio");

    return NextResponse.json({
      raw,
      data: {
        personal: mod.personal,
        hero: mod.hero,
        about: mod.about,
        skills: mod.skills,
        projects: mod.projects,
        formation: mod.formation,
        certifications: mod.certifications,
        experience: mod.experience,
        contact: mod.contact,
        blog: mod.blog,
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to read config" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { content } = await request.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }

    if (isGithubMode()) {
      await commitFile(
        CONFIG_REPO_PATH,
        Buffer.from(content, "utf-8").toString("base64"),
        "chore(admin): mise à jour de la configuration du portfolio"
      );
      return NextResponse.json({ success: true, redeploy: true });
    }

    // Local dev: write to disk (with backup).
    const backupPath = CONFIG_PATH + ".backup";
    const current = await fs.readFile(CONFIG_PATH, "utf-8");
    await fs.writeFile(backupPath, current, "utf-8");
    await fs.writeFile(CONFIG_PATH, content, "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to write config";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
