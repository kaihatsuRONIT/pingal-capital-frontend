import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req) {
    try {
        const { form_slug, data } = await req.json();

        if (!form_slug || !data) {
            return NextResponse.json({ error: "form_slug and data are required" }, { status: 400 });
        }

        const result = await pool.query(
            `INSERT INTO submissions (form_slug, data) VALUES ($1, $2) RETURNING id, created_at`,
            [form_slug, JSON.stringify(data)]
        );

        return NextResponse.json({ success: true, submission: result.rows[0] }, { status: 201 });
    } catch (err) {
        console.error("Submission error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const form_slug = searchParams.get("form_slug");

        let query, params;

        if (form_slug) {
            query = `SELECT * FROM submissions WHERE form_slug = $1 ORDER BY created_at DESC`;
            params = [form_slug];
        } else {
            query = `SELECT * FROM submissions ORDER BY created_at DESC`;
            params = [];
        }

        const result = await pool.query(query, params);
        return NextResponse.json({ submissions: result.rows });
    } catch (err) {
        console.error("Fetch error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}