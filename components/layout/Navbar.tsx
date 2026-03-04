'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
    { label: 'الرئيسية', href: '/' },
    { label: 'عن الشركة', href: '/about' },
    { label: 'خدماتنا', href: '/services' },
    { label: 'المحلل الذكي', href: '/#chatbot' },
    { label: 'المدونة', href: '/news' },
    { label: 'اتصل بنا', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header
            className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-20 py-4 bg-white sticky top-0 z-50"
            style={{ borderColor: 'rgba(26,95,122,0.12)' }}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 text-primary">
                <div className="size-8" style={{ color: '#1a5f7a' }}>
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                    </svg>
                </div>
                <h2
                    className="text-2xl font-black leading-tight tracking-[-0.015em]"
                    style={{ color: '#1a5f7a' }}
                >
                    MasarVisa
                </h2>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-end gap-10">
                <nav className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-slate-700 text-sm font-bold hover:text-primary transition-colors"
                            style={{ '--hover-color': '#1a5f7a' } as React.CSSProperties}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#1a5f7a')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <Link
                    href="/services"
                    className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all hover:opacity-90"
                    style={{ backgroundColor: '#1a5f7a' }}
                >
                    <span className="truncate">ابدأ الآن</span>
                </Link>
            </div>

            {/* Mobile toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                aria-label="تبديل القائمة"
            >
                <span className="material-symbols-outlined text-slate-900">
                    {isOpen ? 'close' : 'menu'}
                </span>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 left-0 bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-2 md:hidden shadow-lg z-40">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-700 text-sm font-bold py-2 hover:text-primary transition-colors"
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#1a5f7a')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 flex items-center justify-center rounded-lg h-10 px-5 text-white text-sm font-bold transition-all hover:opacity-90"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        ابدأ الآن
                    </Link>
                </div>
            )}
        </header>
    )
}
