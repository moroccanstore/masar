import Link from 'next/link'
import Image from 'next/image'

export interface ArticleCardProps {
    title: string
    slug: string
    imageUrl?: string | null
    category?: string | null
    publishedAt: Date | string
    description?: string | null
}

function formatArabicDate(date: Date | string): string {
    return new Date(date).toLocaleDateString('ar-MA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default function ArticleCard({
    title,
    slug,
    imageUrl,
    category = 'تحديثات',
    description,
}: ArticleCardProps) {
    // Use placeholder image if none provided to match Stitch layout specs
    const displayImage =
        imageUrl ||
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiFg58_cOZk8qrlWBEykxB0FF0cot8uOfATZRN4821UAImU4hhsXczTP0Njnjc5xkps7lzZkNjZhM7OpZ6aikIxLqU7k6SIvhSQLdk_SjIxjgqHgSj_mu7KpLi2aCmMI5YIEmLo02MwiVB9bjqCac_81fsCTG9cJbrq5BUHTDnqr8AJ0w75H105lT9Lw-Yp2JwUFoTOxCGewxPkH0yjhWsrs8tSXhsTU8t9tLg7RuibbBOtiRtwd3rul1c_TcCQIsXJ4gjpcAJwtY"

    return (
        <Link href={`/news/${slug}`} className="group block h-full">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                {/* Image Area */}
                <div className="h-48 w-full bg-slate-200 relative overflow-hidden">
                    <Image
                        src={displayImage}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                    <span className="text-xs font-bold uppercase" style={{ color: '#1a5f7a' }}>
                        {category}
                    </span>
                    <h3 className="text-slate-900 font-bold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                            {description}
                        </p>
                    )}

                    <div className="mt-auto pt-4 flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                        اقرأ المزيد
                        <span className="material-symbols-outlined text-[18px]">arrow_back_ios</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
