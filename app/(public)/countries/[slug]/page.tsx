import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import Link from 'next/link'
import ArticleCard from '@/components/news/ArticleCard'

export const revalidate = 3600 // 1 hr

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    try {
        const countries = await prisma.country.findMany({ select: { slug: true } })
        return countries.map((c: { slug: string }) => ({ slug: c.slug }))
    } catch {
        return []
    }
}

export default async function CountryHubPage({ params }: Props) {
    const { slug } = await params

    let country = null
    try {
        country = await prisma.country.findUnique({
            where: { slug },
            include: {
                articles: {
                    orderBy: { publishedAt: 'desc' },
                    take: 6,
                }
            }
        })
    } catch {
        // Build fallback
    }

    // Temporary static mock for immediate preview if DB empty
    if (!country) {
        if (['germany', 'france', 'spain', 'italy', 'netherlands', 'portugal'].includes(slug)) {
            country = {
                name: slug === 'germany' ? 'ألمانيا' : slug === 'france' ? 'فرنسا' : slug === 'spain' ? 'إسبانيا' : slug === 'italy' ? 'إيطاليا' : 'أوروبا',
                flag: slug === 'germany' ? '🇩🇪' : slug === 'france' ? '🇫🇷' : slug === 'spain' ? '🇪🇸' : slug === 'italy' ? '🇮🇹' : '🇪🇺',
                articles: []
            }
        } else {
            notFound()
        }
    }

    return (
        <div className="bg-background-light min-h-screen pb-20">
            {/* Country Hero */}
            <div className="bg-slate-900 text-white pt-24 pb-20 text-center px-6" style={{ backgroundColor: '#0f384a' }}>
                <div className="max-w-[800px] mx-auto">
                    <div className="text-8xl mb-6">{country.flag}</div>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">الهجرة إلى {country.name}</h1>
                    <p className="text-xl text-slate-300">
                        الدليل الشامل لكل ما تحتاجه للعمل، الدراسة، أو الاستقرار في {country.name}. أحدث القوانين والأدلة الرسمية.
                    </p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 -mt-10">
                {/* Services Cross-sell */}
                <div className="bg-white rounded-2xl shadow-xl border p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">تجهيز ملف تأشيرة {country.name}</h3>
                        <p className="text-slate-500">نوفر خدمة تعبئة النماذج ومراجعة المستندات بدقة لضمان القبول.</p>
                    </div>
                    <Link
                        href="/services/visa-form"
                        className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition shadow-lg whitespace-nowrap"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        استعراض الخدمة
                    </Link>
                </div>

                {/* Latest Articles for this Country */}
                <h2 className="text-3xl font-black text-slate-900 mb-8 border-r-4 pr-4" style={{ borderColor: '#1a5f7a' }}>
                    أحدث المقالات والإرشادات
                </h2>

                {country.articles && country.articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {country.articles.map((article: any) => (
                            <ArticleCard
                                key={article.id}
                                title={article.title}
                                slug={article.slug}
                                imageUrl={article.imageUrl}
                                publishedAt={article.publishedAt}
                                description={article.metaDescription}
                                category={country.name}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center bg-white p-12 rounded-2xl border border-slate-100">
                        <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">article</span>
                        <p className="text-slate-500 font-bold">لا توجد مقالات مخصصة حالياً، جاري التحديث...</p>
                    </div>
                )}
            </div>
        </div>
    )
}
