import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");

    if (!page) return NextResponse.json({ error: "page param required" }, { status: 400 });

    const filePath = path.join(process.cwd(), `content/${page}.json`);

    if (!fs.existsSync(filePath)) return NextResponse.json({ content: null });

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json({ content: data });
}

export async function PUT(req) {
    const { page, data } = await req.json();

    if (!page) return NextResponse.json({ error: "page required" }, { status: 400 });

    const filePath = path.join(process.cwd(), `content/${page}.json`);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, content: data });
}