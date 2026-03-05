import Link from 'next/link'
import { prisma } from '@/lib/db'

export const revalidate = 3600

export default async function GuidesPage() {
    let articles: any[] = []
    try {
        // Fetch long-form guides (we can assume reading time > 5 min means guide)
        articles = await prisma.article.findMany({
            where: {
                readingTime: { gte: 5 }
            },
            orderBy: { publishedAt: 'desc' },
            include: { country: true, visaType: true }
        })
    } catch {
        // Build fallback
    }

    return (
        <div className="bg-background-light min-h-screen py-20 px-6">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">الأدلة الشاملة للهجرة</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        دليلك الموثوق خطوة بخطوة للحصول على التأشيرات والعمل والاستقرار في الخارج.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {articles.length > 0 ? (
                        articles.map(article => (
                            <Link
                                key={article.slug}
                                href={`/guides/${article.slug}`}
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col md:flex-row gap-6 items-start group"
                            >
                                <div className="flex-1">
                                    <div className="flex gap-3 mb-4 text-xs font-bold uppercase tracking-wider">
                                        {article.country && (
                                            <span className="text-primary bg-primary/10 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                                {article.country.name} {article.country.flag}
                                            </span>
                                        )}
                                        {article.visaType && (
                                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                                {article.visaType.name}
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors" style={{ color: 'var(--color-primary)' }}>
                                        {article.title}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                                        {article.metaDescription}
                                    </p>
                                </div>
                                <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-32 h-32 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                                    <span className="material-symbols-outlined text-4xl mb-2">menu_book</span>
                                    <span className="text-sm font-bold">{article.readingTime} دقائق</span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 border-dashed">
                            <span className="material-symbols-outlined text-4xl text-slate-300 mb-4">edit_document</span>
                            <p className="text-slate-500 font-bold text-lg">الأدلة الشاملة قيد الكتابة والإعداد...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
