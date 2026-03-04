import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

const SECRET = process.env.N8N_WEBHOOK_SECRET ?? ''

export async function POST(request: Request) {
    // Auth check
    const authHeader = request.headers.get('authorization')
    if (!SECRET || authHeader !== `Bearer ${SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const body = await request.json()
        const { title, slug, content, metaTitle, metaDescription, imageUrl } = body

        if (!title || !slug || !content) {
            return NextResponse.json(
                { error: 'Missing required fields: title, slug, content' },
                { status: 400 }
            )
        }

        const article = await prisma.article.upsert({
            where: { slug },
            update: {
                title,
                content,
                metaTitle: metaTitle ?? null,
                metaDescription: metaDescription ?? null,
                imageUrl: imageUrl ?? null,
                updatedAt: new Date(),
            },
            create: {
                title,
                slug,
                content,
                metaTitle: metaTitle ?? null,
                metaDescription: metaDescription ?? null,
                imageUrl: imageUrl ?? null,
                publishedAt: new Date(),
            },
        })

        return NextResponse.json(
            { success: true, articleId: article.id, slug: article.slug },
            { status: 201 }
        )
    } catch (error) {
        console.error('[n8n webhook] Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
