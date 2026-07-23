import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get("file");
    const filename = formData.get("filename"); // existing filename from JSON e.g. "home-loan-bg.jpg"

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadPath = path.join(process.cwd(), "public", filename);
    fs.writeFileSync(uploadPath, buffer);

    return NextResponse.json({ success: true });
}