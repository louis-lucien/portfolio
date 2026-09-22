import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const CONFIG_PATH = path.join(process.cwd(), "src/config/portfolio.ts");

export async function GET() {
  try {
    const raw = await fs.readFile(CONFIG_PATH, "utf-8");

    // Import the actual module for pre-parsed data
    // We use dynamic import with cache busting
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
  } catch (error) {
    return NextResponse.json({ error: "Failed to read config" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }

    // Backup current file
    const backupPath = CONFIG_PATH + ".backup";
    const current = await fs.readFile(CONFIG_PATH, "utf-8");
    await fs.writeFile(backupPath, current, "utf-8");

    // Write new content
    await fs.writeFile(CONFIG_PATH, content, "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to write config" }, { status: 500 });
  }
}
