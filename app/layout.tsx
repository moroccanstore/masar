import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LatestNewsSection from '@/components/news/LatestNewsSection'

// Cairo for Arabic characters; Public Sans loaded via CSS/link for Latin
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MasarVisa | طريقك المضمون نحو الهجرة والفيزا',
  description:
    'منصة متخصصة في خدمات التأشيرات والهجرة واللجوء تستهدف المغرب ومنطقة الشرق الأوسط وشمال أفريقيا. تحليل ذكي للملفات ودفع محلي عبر Cash Plus و Western Union.',
  keywords: 'تأشيرة, هجرة, لجوء, فيزا, مغرب, MENA, Cash Plus, Western Union, MasarVisa',
  openGraph: {
    title: 'MasarVisa | طريقك المضمون نحو الهجرة والفيزا',
    description: 'خدمات تأشيرات موثوقة وشفافة للمغاربة وسكان منطقة الشرق الأوسط',
    locale: 'ar_MA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        {/* Public Sans – Stitch design system font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols Outlined – Stitch icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'Public Sans', 'Cairo', sans-serif", backgroundColor: '#f6f7f8' }}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <LatestNewsSection />
        <Footer />
      </body>
    </html>
  )
}
