import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { isAuthed } from "@/lib/auth";
import { commitFile, isGithubMode } from "@/lib/github";

const CONFIG_PATH = path.join(process.cwd(), "src/config/portfolio.ts");
const CONFIG_REPO_PATH = "src/config/portfolio.ts";

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
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
