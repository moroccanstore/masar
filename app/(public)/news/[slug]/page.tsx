import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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
        title: article.metaTitle ?? `${article.title} | مسار فيزا`,
        description: article.metaDescription ?? undefined,
    }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    try {
        const articles = await prisma.article.findMany({ select: { slug: true } })
        return articles.map((a: { slug: string }) => ({ slug: a.slug }))
    } catch {
        return []
    }
}

export const revalidate = 60

function formatArabicDate(date: Date): string {
    return date.toLocaleDateString('ar-MA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params
    let article = null
    try {
        article = await prisma.article.findUnique({ where: { slug } })
    } catch {
        // DB offline mode for build
    }

    if (!article) notFound()

    // Fallback image
    const displayImage =
        article.imageUrl ||
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiFg58_cOZk8qrlWBEykxB0FF0cot8uOfATZRN4821UAImU4hhsXczTP0Njnjc5xkps7lzZkNjZhM7OpZ6aikIxLqU7k6SIvhSQLdk_SjIxjgqHgSj_mu7KpLi2aCmMI5YIEmLo02MwiVB9bjqCac_81fsCTG9cJbrq5BUHTDnqr8AJ0w75H105lT9Lw-Yp2JwUFoTOxCGewxPkH0yjhWsrs8tSXhsTU8t9tLg7RuibbBOtiRtwd3rul1c_TcCQIsXJ4gjpcAJwtY"

    return (
        <div className="bg-background-light min-h-screen py-10 md:py-16">
            <div className="max-w-[800px] mx-auto px-6">
                {/* Back link */}
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-sm font-bold hover:underline mb-8 transition-all"
                    style={{ color: '#1a5f7a' }}
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    العودة للقسم الإخباري
                </Link>

                {/* Article header */}
                <article className="bg-white rounded-[2rem] border shadow-sm overflow-hidden" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>

                    {/* Featured image */}
                    <div className="w-full h-64 md:h-[400px] relative bg-slate-100">
                        <Image
                            src={displayImage}
                            alt={article.title}
                            fill
                            priority
                            sizes="(max-width: 800px) 100vw, 800px"
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8 border-b pb-8" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                            {/* Category & Date */}
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                                    أخبار
                                </span>
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-500">
                                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                    <time dateTime={article.publishedAt.toISOString()}>
                                        {formatArabicDate(article.publishedAt)}
                                    </time>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2]">
                                {article.title}
                            </h1>

                            {/* Meta description */}
                            {article.metaDescription && (
                                <div className="mt-8 flex gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgba(26,95,122,0.05)' }}>
                                    <span className="material-symbols-outlined text-primary text-3xl shrink-0">info</span>
                                    <p className="text-base text-slate-700 leading-relaxed font-bold">
                                        {article.metaDescription}
                                    </p>
                                </div>
                            )}
                        </header>

                        {/* Content Payload */}
                        <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-700 leading-loose">
                            {/* Whitespace splitting handles raw text from our n8n DB properly */}
                            {article.content.split('\n\n').map((paragraph: string, idx: number) => (
                                <p key={idx} className="mb-6">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Footer CTA */}
                <div className="mt-8 bg-white p-8 rounded-2xl border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                            <span className="material-symbols-outlined text-[24px]">verified_user</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">هل تحتاج للمساعدة في ملفك؟</h4>
                            <p className="text-sm text-slate-500">استوديو الاستشارات متخصص في حالتك.</p>
                        </div>
                    </div>
                    <Link
                        href="/services"
                        className="flex h-12 px-8 items-center justify-center rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 whitespace-nowrap"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        تصفّح خدماتنا
                    </Link>
                </div>
            </div>
        </div>
    )
}
