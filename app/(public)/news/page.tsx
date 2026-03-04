import { prisma } from '@/lib/db'
import ArticleCard from '@/components/news/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'المدونة وأخبار الهجرة | مسار فيزا',
    description: 'آخر أخبار التأشيرات والهجرة واللجوء وتحديثات القوانين.',
}

export const revalidate = 60 // ISR: revalidate every 60s

async function getAllArticles() {
    try {
        return await prisma.article.findMany({
            orderBy: { publishedAt: 'desc' },
            select: {
                id: true,
                title: true,
                slug: true,
                imageUrl: true,
                metaDescription: true,
                publishedAt: true,
            },
        })
    } catch {
        return []
    }
}

export default async function NewsPage() {
    const articles = await getAllArticles()

    return (
        <div className="bg-background-light min-h-screen py-16">
            <div className="max-w-[1200px] mx-auto px-6 md:px-20">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-12 border-b pb-8" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                    <div className="flex items-center gap-2 font-bold" style={{ color: '#1a5f7a' }}>
                        <span className="material-symbols-outlined text-[20px]">feed</span>
                        المدونة والأخبار
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                        آخر مستجدات الهجرة والتأشيرات
                    </h1>
                    <p className="text-slate-600 text-lg max-w-[700px]">
                        تابع التحديثات القانونية، أخبار السفارات، ونصائح خبرائنا المحدثة باستمرار لضمان صحة ملفك.
                    </p>
                </div>

                {/* Content */}
                {articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article: any) => (
                            <ArticleCard
                                key={article.id}
                                title={article.title}
                                slug={article.slug}
                                imageUrl={article.imageUrl}
                                publishedAt={article.publishedAt}
                                description={article.metaDescription}
                                category={article.id.includes('visa') ? 'تأشيرات' : 'دليل الهجرة'}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border shadow-sm p-16 text-center" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div
                            className="size-20 mx-auto rounded-2xl mb-6 flex items-center justify-center font-bold text-primary"
                            style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}
                        >
                            <span className="material-symbols-outlined text-[40px]">article</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">لا توجد مقالات منشورة</h3>
                        <p className="text-slate-500 max-w-sm mx-auto">
                            نقوم حالياً بتجهيز أحدث المحتويات والأخبار حول الهجرة. يرجى العودة لاحقاً.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
