import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
    const auth = req.headers.get("authorization");

    if (auth !== `Bearer ${process.env.PUBLISH_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const path = url.searchParams.get("path") || "/";

    revalidatePath(path);

    return NextResponse.json({ revalidated: true, path });
}
