import { MetadataRoute } from 'next'
import { prisma } from '@/lib/db'

export const revalidate = 3600 // revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://masarvisa.com'

    let articleUrls: any[] = []

    try {
        // Fetch all dynamic article slugs
        const articles = await prisma.article.findMany({
            select: {
                slug: true,
                updatedAt: true,
                publishedAt: true,
            },
            orderBy: {
                publishedAt: 'desc',
            },
        })

        // Dynamic article URLs
        articleUrls = articles.map((article) => ({
            url: `${baseUrl}/news/${article.slug}`,
            lastModified: article.updatedAt || article.publishedAt,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }))
    } catch (error) {
        console.warn('DB not connected, generating static sitemap only.')
    }

    // Static core URLs
    const coreUrls = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/news`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
    ]

    return [...coreUrls, ...articleUrls]
}
