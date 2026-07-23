import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const { password } = await req.json();
        console.log("Password received:", password);
        console.log("Env password:", process.env.ADMIN_PASSWORD);
        console.log("JWT Secret:", process.env.JWT_SECRET);

        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: "7d" });
        console.log("Token generated:", token);

        const response = NextResponse.json({ success: true });
        response.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("LOGIN ERROR:", error.message);
        console.error("STACK:", error.stack);
        return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 });

    }
}