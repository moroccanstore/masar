import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = await prisma.article.findUnique({
        where: { slug },
        select: { title: true, metaTitle: true, metaDescription: true },
    })

    if (!article) return {}

    return {
        title: article.metaTitle ?? `${article.title} | الدليل الشامل | مسار فيزا`,
        description: article.metaDescription ?? undefined,
    }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    try {
        const articles = await prisma.article.findMany({
            where: { readingTime: { gte: 5 } },
            select: { slug: true }
        })
        return articles.map((a: { slug: string }) => ({ slug: a.slug }))
    } catch {
        return []
    }
}

export const revalidate = 3600

export default async function GuidePage({ params }: Props) {
    const { slug } = await params

    let article = null
    try {
        article = await prisma.article.findUnique({
            where: { slug },
            include: { country: true, visaType: true }
        })
    } catch {
        // Fallback
    }

    if (!article) notFound()

    return (
        <div className="bg-background-light min-h-screen">
            {/* Guide Hero */}
            <div className="bg-slate-900 text-white pt-24 pb-32 px-6" style={{ backgroundColor: '#0f384a' }}>
                <div className="max-w-[800px] mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        {article.country && (
                            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full font-bold text-sm">
                                {article.country.flag} {article.country.name}
                            </span>
                        )}
                        {article.visaType && (
                            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full font-bold text-sm">
                                <span className="material-symbols-outlined text-[16px]">file_copy</span>
                                {article.visaType.name}
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        {article.title}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {article.metaDescription}
                    </p>
                </div>
            </div>

            <div className="max-w-[800px] mx-auto px-6 -mt-16 pb-20">
                {/* Guide floating box */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">

                    {/* Reading Meta */}
                    <div className="flex items-center gap-6 pb-8 mb-8 border-b border-slate-100 text-slate-500 font-bold text-sm">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                            وقت القراءة {article.readingTime} دقائق
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            آخر تحديث {article.updatedAt.toLocaleDateString('ar-MA')}
                        </div>
                    </div>

                    {/* Content Payload */}
                    <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:underline prose-p:leading-loose text-slate-700">
                        {article.content.split('\n\n').map((paragraph: string, idx: number) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </article>

                </div>

                {/* Conversion Section at the bottom of the long guide */}
                <div className="mt-12 bg-white rounded-3xl p-10 border border-slate-200 text-center shadow-sm">
                    <div className="size-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                        <span className="material-symbols-outlined text-3xl">how_to_reg</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">هل تخطط للتقديم قريباً؟</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        تجنب الأخطاء الشائعة التي تؤدي للرفض. خبراءنا جاهزون لمراجعة ملفك بدقة وتنقيحه قبل التقديم الرسمي للسفارة.
                    </p>
                    <Link
                        href="/services/document-review"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-xl text-white font-bold text-lg hover:-translate-y-1 transition shadow-lg"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        ابدأ مراجعة الملف الآن
                    </Link>
                </div>
            </div>
        </div>
    )
}
