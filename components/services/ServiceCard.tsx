import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

export interface ServiceCardProps {
    title: string
    description: string
    price: number
    iconName?: string // Changed to string for Material Symbols
    icon?: LucideIcon // Keep for backwards compatibility but we'll prefer material symbols
    features: string[]
    popular?: boolean
    link?: string
}

export default function ServiceCard({
    title,
    description,
    price,
    iconName = 'description',
    features,
    popular = false,
    link = '/contact',
}: ServiceCardProps) {
    return (
        <div
            className={`flex flex-col gap-6 rounded-2xl border bg-white p-8 transition-all group overflow-hidden relative shadow-sm hover:shadow-md
        ${popular ? 'border-primary ring-1 ring-primary/20' : 'border-slate-200 hover:border-primary'}
      `}
        >
            {/* Popular badge */}
            {popular && (
                <div
                    className="absolute top-0 left-0 right-0 text-white text-center text-xs font-bold py-1.5 tracking-wide"
                    style={{ backgroundColor: '#1a5f7a' }}
                >
                    الأكثر طلباً ⭐
                </div>
            )}

            {/* Icon */}
            <div
                className={`size-14 rounded-xl flex items-center justify-center transition-all ${popular ? 'mt-4' : ''
                    }`}
                style={{
                    backgroundColor: 'rgba(26,95,122,0.1)',
                    color: '#1a5f7a',
                }}
            >
                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">
                    {iconName}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-xl font-bold">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4 flex-1">
                    {description}
                </p>

                {/* Features - simplified compared to before to match Stitch clean look */}
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                    {features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                                checked
                            </span>
                            {feature}
                        </li>
                    ))}
                    {features.length > 3 && (
                        <li className="text-xs text-slate-400 italic">
                            + {features.length - 3} مزايا إضافية
                        </li>
                    )}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-slate-900">
                            {price.toLocaleString('ar-MA')}
                        </span>
                        <span className="text-xs font-bold text-slate-400">درهم مغربي</span>
                    </div>

                    <Link
                        href={link}
                        className="flex h-10 px-5 items-center justify-center rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        طلب الآن
                    </Link>
                </div>
            </div>
        </div>
    )
}
