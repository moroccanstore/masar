import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Handle preflight requests for n8n
export async function OPTIONS() {
    const response = new NextResponse(null, { status: 200 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
}

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");
        // Ensure this matches exactly with n8n HTTP Request node Auth
        if (authHeader !== "Bearer masar_super_secret_2026") {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();

        // Base slug on the title if available, otherwise a timestamp
        const randomString = Math.random().toString(36).substring(2, 8);
        const slugText = body.title
            ? body.title.toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]+/g, '-').replace(/(^-|-$)/g, '') + '-' + randomString
            : `draft-${Date.now()}`;

        // Create the draft via Prisma
        const newDraft = await prisma.article_drafts.create({
            data: {
                title: body.title || "Untitled Draft",
                slug: slugText,
                markdown_body: body.markdown_body || "",
                metaDescription: body.faqs || "", // mapped to 'faqs' column in schema
                cover_image: body.cover_image || "",
                publishedAt: new Date(),
                published: true, // Mark it immediately visible if reading from this table directly
            }
        });

        console.log("Successfully published draft:", newDraft.slug);

        return NextResponse.json({
            success: true,
            id: newDraft.id,
            slug: newDraft.slug
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    } catch (error) {
        console.error("Error saving draft:", error);
        return NextResponse.json(
            { success: false, error: "Failed to save article" },
            { status: 500 }
        );
    }
}