'use client'

import Link from 'next/link'

const quickLinks = [
    { label: 'عن الشركة', href: '/about' },
    { label: 'الوجهات والدول', href: '/countries' },
    { label: 'أدلة الهجرة', href: '/guides' },
    { label: 'خدماتنا', href: '/services' },
]

const supportLinks = [
    { label: 'سياسة الخصوصية', href: '#' },
    { label: 'شروط الخدمة', href: '#' },
    { label: 'مركز المساعدة', href: '#' },
    { label: 'تواصل معنا', href: '/contact' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-white px-6 md:px-20 py-16" id="contact">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="flex flex-col gap-6 col-span-1">
                    <div className="flex items-center gap-3 text-white">
                        <div className="size-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="white" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black">MasarVisa</h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        منصتك المتكاملة للهجرة والفيزا. نستخدم الذكاء الاصطناعي لتقليل المسافات وتحويل أحلامك إلى حقيقة.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all"
                            style={{ '--hover-bg': '#1a5f7a' } as React.CSSProperties}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a5f7a')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                        >
                            <span className="material-symbols-outlined text-sm">social_leaderboard</span>
                        </a>
                        <a
                            href="#"
                            className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all"
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a5f7a')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                        >
                            <span className="material-symbols-outlined text-sm">alternate_email</span>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-6">
                    <h4
                        className="text-lg font-bold border-b pb-1 w-fit"
                        style={{ borderColor: '#1a5f7a' }}
                    >
                        روابط سريعة
                    </h4>
                    <ul className="flex flex-col gap-3 text-slate-400">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="hover:text-white transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div className="flex flex-col gap-6">
                    <h4
                        className="text-lg font-bold border-b pb-1 w-fit"
                        style={{ borderColor: '#1a5f7a' }}
                    >
                        الدعم والخصوصية
                    </h4>
                    <ul className="flex flex-col gap-3 text-slate-400">
                        {supportLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="hover:text-white transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-6">
                    <h4
                        className="text-lg font-bold border-b pb-1 w-fit"
                        style={{ borderColor: '#1a5f7a' }}
                    >
                        اشترك في النشرة
                    </h4>
                    <p className="text-slate-400 text-sm">
                        احصل على أحدث أخبار وتحديثات الفيزا مباشرة في بريدك.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="بريدك الإلكتروني"
                            className="bg-slate-800 border-none rounded-r-lg px-4 py-2 w-full focus:ring-1 text-sm text-white placeholder-slate-500 outline-none"
                            style={{ '--focus-ring': '#1a5f7a' } as React.CSSProperties}
                        />
                        <button
                            className="px-4 py-2 rounded-l-lg font-bold text-white transition-all hover:opacity-90 text-sm"
                            style={{ backgroundColor: '#1a5f7a' }}
                        >
                            اشترك
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                © {year} MasarVisa. جميع الحقوق محفوظة.
            </div>
        </footer>
    )
}
