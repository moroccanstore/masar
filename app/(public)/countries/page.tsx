import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/db'

export const revalidate = 3600 // 1 hour

export default async function CountriesPage() {
    let countries: any[] = []
    try {
        countries = await prisma.country.findMany({
            orderBy: { name: 'asc' },
            include: {
                _count: {
                    select: { articles: true }
                }
            }
        })
    } catch {
        // Fallback for dev/build without DB
    }

    // Static fallback if DB is empty
    const displayCountries = countries.length > 0 ? countries : [
        { name: 'ألمانيا', slug: 'germany', continent: 'Europe', flag: '🇩🇪', _count: { articles: 0 } },
        { name: 'فرنسا', slug: 'france', continent: 'Europe', flag: '🇫🇷', _count: { articles: 0 } },
        { name: 'إسبانيا', slug: 'spain', continent: 'Europe', flag: '🇪🇸', _count: { articles: 0 } },
        { name: 'إيطاليا', slug: 'italy', continent: 'Europe', flag: '🇮🇹', _count: { articles: 0 } },
        { name: 'هولندا', slug: 'netherlands', continent: 'Europe', flag: '🇳🇱', _count: { articles: 0 } },
        { name: 'البرتغال', slug: 'portugal', continent: 'Europe', flag: '🇵🇹', _count: { articles: 0 } },
    ]

    return (
        <div className="bg-background-light min-h-screen py-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">الوجهات العالمية والهجرة</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        اكتشف أدلة وشروط الهجرة، التأشيرات، وفرص العمل في أهم الدول الأوروبية والعالمية.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayCountries.map((country) => (
                        <Link
                            href={`/countries/${country.slug}`}
                            key={country.slug}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center gap-4"
                        >
                            <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">{country.flag || '🌍'}</div>
                            <h2 className="text-2xl font-black text-slate-900">{country.name}</h2>
                            <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-bold">
                                {country._count.articles} دليل ومقال
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
