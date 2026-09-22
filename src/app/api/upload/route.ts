import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
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

    const fullPath = path.join(process.cwd(), "public", safeDest);

    // Ensure directory exists
    await fs.mkdir(path.dirname(fullPath), { recursive: true });

    // Write file
    const bytes = await file.arrayBuffer();
    await fs.writeFile(fullPath, Buffer.from(bytes));

    return NextResponse.json({
      success: true,
      path: `/${safeDest}`,
      size: file.size,
    });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public/images");

    const result: Record<string, string[]> = {
      profile: [],
      certs: [],
      projects: [],
    };

    // Check profile
    for (const ext of ["jpg", "jpeg", "png", "webp"]) {
      try {
        await fs.access(path.join(imagesDir, `profile.${ext}`));
        result.profile.push(`/images/profile.${ext}`);
      } catch {}
    }

    // List certs
    try {
      const certsDir = path.join(imagesDir, "certs");
      const files = await fs.readdir(certsDir);
      result.certs = files
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .map((f) => `/images/certs/${f}`);
    } catch {}

    // List projects
    try {
      const projDir = path.join(imagesDir, "projects");
      const files = await fs.readdir(projDir);
      result.projects = files
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .map((f) => `/images/projects/${f}`);
    } catch {}

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Failed to list images" }, { status: 500 });
  }
}
