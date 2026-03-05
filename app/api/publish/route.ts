import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    console.log("Received article:", body);

    return NextResponse.json({
        success: true
    });
}