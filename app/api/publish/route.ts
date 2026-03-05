import { NextResponse } from "next/server";

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 200 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
}

export async function POST(req: Request) {
    // Optional: check the authorization header based on your n8n settings
    const authHeader = req.headers.get("authorization");
    if (authHeader !== "Bearer masar_super_secret_2026") {
        // We log it so you can debug if the secret mismatches
        console.warn("Unauthorized publish attempt:", authHeader);
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    console.log("Received article:", body);

    return NextResponse.json({
        success: true
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    });
}