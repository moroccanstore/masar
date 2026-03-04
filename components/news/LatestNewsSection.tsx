import Link from 'next/link'
import { prisma } from '@/lib/db'
import ArticleCard from '@/components/news/ArticleCard'

async function getLatestArticles() {
    try {
        return await prisma.article.findMany({
            orderBy: { publishedAt: 'desc' },
            take: 3,
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

export default async function LatestNewsSection() {
    const articles = await getLatestArticles()

    return (
        <section className="px-6 md:px-20 py-20 bg-background-light" id="blog">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-slate-900 text-3xl md:text-4xl font-black">آخر أخبار الهجرة</h2>
                        <p className="text-slate-600">تابع أحدث المستجدات والقوانين العالمية</p>
                    </div>
                    <Link
                        href="/news"
                        className="text-primary font-bold flex items-center gap-2 hover:underline transition-all"
                    >
                        عرض كل المقالات
                        <span className="material-symbols-outlined text-sm">arrow_back_ios</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.length > 0 ? (
                        articles.map((article: any) => (
                            <ArticleCard
                                key={article.id}
                                title={article.title}
                                slug={article.slug}
                                imageUrl={article.imageUrl}
                                publishedAt={article.publishedAt}
                                description={article.metaDescription}
                                category={article.id.includes('visa') ? 'تحديثات الفيزا' : 'نصائح الخبراء'}
                            />
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-3 text-center py-16">
                            <div
                                className="size-16 mx-auto rounded-full mb-4 flex items-center justify-center font-bold text-primary"
                                style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}
                            >
                                <span className="material-symbols-outlined text-3xl">newspaper</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">لا توجد مقالات حالياً</h3>
                            <p className="text-slate-500">
                                سيتم نشر المقالات هنا بمجرد وصولها عبر النظام التلقائي.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
