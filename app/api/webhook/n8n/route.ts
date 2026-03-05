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
        const {
            title,
            slug,
            content,
            metaTitle,
            metaDescription,
            imageUrl,
            countrySlug,
            visaTypeSlug,
            keywords,
            readingTime
        } = body

        if (!title || !slug || !content) {
            return NextResponse.json(
                { error: 'Missing required fields: title, slug, content' },
                { status: 400 }
            )
        }

        let countryId = null
        if (countrySlug) {
            const country = await prisma.country.findUnique({ where: { slug: countrySlug } })
            if (country) countryId = country.id
        }

        let visaTypeId = null
        if (visaTypeSlug) {
            const visaType = await prisma.visaType.findUnique({ where: { slug: visaTypeSlug } })
            if (visaType) visaTypeId = visaType.id
        }

        const article = await prisma.article.upsert({
            where: { slug },
            update: {
                title,
                content,
                metaTitle: metaTitle ?? null,
                metaDescription: metaDescription ?? null,
                imageUrl: imageUrl ?? null,
                countryId,
                visaTypeId,
                keywords: keywords ?? [],
                readingTime: readingTime ?? null,
                updatedAt: new Date(),
            },
            create: {
                title,
                slug,
                content,
                metaTitle: metaTitle ?? null,
                metaDescription: metaDescription ?? null,
                imageUrl: imageUrl ?? null,
                countryId,
                visaTypeId,
                keywords: keywords ?? [],
                readingTime: readingTime ?? null,
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
