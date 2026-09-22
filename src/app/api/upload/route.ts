import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { isAuthed } from "@/lib/auth";
import { commitFile, listDir, isGithubMode } from "@/lib/github";

const IMG_RE = /\.(jpg|jpeg|png|webp)$/i;

export async function POST(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const destination = formData.get("destination") as string;

    if (!file || !destination) {
      return NextResponse.json({ error: "File and destination required" }, { status: 400 });
    }

    // Security: only allow writes to public/images/
    const safeDest = destination.replace(/\.\./g, "").replace(/^\//, "");
    if (!safeDest.startsWith("images/")) {
      return NextResponse.json({ error: "Invalid destination" }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    if (isGithubMode()) {
      await commitFile(
        `public/${safeDest}`,
        bytes.toString("base64"),
        `chore(admin): image ${safeDest}`
      );
      return NextResponse.json({
        success: true,
        path: `/${safeDest}`,
        size: file.size,
        redeploy: true,
      });
    }

    // Local dev: write to disk.
    const fullPath = path.join(process.cwd(), "public", safeDest);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, bytes);

    return NextResponse.json({
      success: true,
      path: `/${safeDest}`,
      size: file.size,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const result: Record<string, string[]> = { profile: [], certs: [], projects: [] };

  try {
    if (isGithubMode()) {
      const root = await listDir("public/images");
      for (const entry of root) {
        if (entry.type === "file" && /^profile\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
          result.profile.push(`/images/${entry.name}`);
        }
      }
      const certs = await listDir("public/images/certs");
      result.certs = certs
        .filter((e) => e.type === "file" && IMG_RE.test(e.name))
        .map((e) => `/images/certs/${e.name}`);
      const projects = await listDir("public/images/projects");
      result.projects = projects
        .filter((e) => e.type === "file" && IMG_RE.test(e.name))
        .map((e) => `/images/projects/${e.name}`);

      return NextResponse.json(result);
    }

    // Local dev: read from disk.
    const imagesDir = path.join(process.cwd(), "public/images");

    for (const ext of ["jpg", "jpeg", "png", "webp"]) {
      try {
        await fs.access(path.join(imagesDir, `profile.${ext}`));
        result.profile.push(`/images/profile.${ext}`);
      } catch {}
    }
    try {
      const files = await fs.readdir(path.join(imagesDir, "certs"));
      result.certs = files.filter((f) => IMG_RE.test(f)).map((f) => `/images/certs/${f}`);
    } catch {}
    try {
      const files = await fs.readdir(path.join(imagesDir, "projects"));
      result.projects = files.filter((f) => IMG_RE.test(f)).map((f) => `/images/projects/${f}`);
    } catch {}

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Failed to list images" }, { status: 500 });
  }
}
