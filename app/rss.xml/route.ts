import { prisma } from '@/lib/db'

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://masarvisa.com'

    let rssItemsXml = ''

    try {
        // Fetch latest 20 articles for RSS
        const articles = await prisma.article.findMany({
            take: 20,
            orderBy: {
                publishedAt: 'desc',
            },
            select: {
                title: true,
                slug: true,
                metaDescription: true,
                publishedAt: true,
            },
        })

        rssItemsXml = articles
            .map((article) => {
                const url = `${baseUrl}/news/${article.slug}`
                return `
          <item>
            <title><![CDATA[${article.title}]]></title>
            <link>${url}</link>
            <guid isPermaLink="true">${url}</guid>
            <pubDate>${article.publishedAt.toUTCString()}</pubDate>
            <description><![CDATA[${article.metaDescription || ''}]]></description>
          </item>`
            })
            .join('')
    } catch (error) {
        console.warn('DB not connected, returning empty RSS feed.')
    }

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>MasarVisa - أخبار الهجرة والفيزا</title>
        <link>${baseUrl}</link>
        <description>أحدث الأخبار والتحديثات حول الهجرة، التأشيرات، واللجوء لدول العالم الأول.</description>
        <language>ar</language>
        <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
        ${rssItemsXml}
      </channel>
    </rss>`

    return new Response(rssXml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    })
}
