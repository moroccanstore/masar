'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Article {
    id: string
    title: string
    slug: string
    imageUrl: string | null
    metaDescription: string | null
    publishedAt: Date
}

interface HeroProps {
    latestArticle?: Article | null
}

export default function Hero({ latestArticle }: HeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 'main',
            title: 'طريقك المضمون نحو الهجرة والفيزا',
            description: 'نجمع بين الخبرة القانونية وتقنيات الذكاء الاصطناعي لتحليل ملفك وزيادة فرص قبول التأشيرة الخاصة بك بكل سهولة ودقة.',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR8ppMM-QllPwF-KlsZLTNXE80NxfpBBFRwpDvExWe9l9GdrcAjzKRry20mqQIAL7gLRcfNnh4xHOaJuz51UEsS_5SSkxhRC0g8QjcnZAdHZTxFZ87lKHa6MAKwa8S1nbUysPtfyuJe1iHEiYObRR6PEzZg7IyHSZK7pjcf0AkqOKqS7krLcMsJNwYr1KPggCo-PC3el9e-SHlDZmW58smAZlKb1J8zNasXo90KHqI1gi740xFy7pYGR_lOgf4Em7HioFknMiXhEU",
            buttons: (
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/#chatbot"
                        className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 text-white text-lg font-bold shadow-lg transition-all hover:-translate-y-0.5"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        <span className="truncate">ابدأ التحليل المجاني</span>
                    </Link>
                    <Link
                        href="/services"
                        className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 text-lg font-bold border transition-all hover:opacity-90"
                        style={{
                            backgroundColor: 'rgba(26,95,122,0.1)',
                            color: '#1a5f7a',
                            borderColor: 'rgba(26,95,122,0.2)',
                        }}
                    >
                        <span className="truncate">اكتشف خدماتنا</span>
                    </Link>
                </div>
            )
        },
        {
            id: 'hotels',
            title: 'حجز فنادق مؤكد لاستخراج التأشيرة',
            description: 'احصل على حجز فندقي فوري ومقبول لدى جميع السفارات والقنصليات بضمان 100% وبدون مخاطر.',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB94qYtJ9wWhvBODWD-YMLIH-2bfKU6pjyTH9vkRv1XdeslXQwY5F_ikR3gQAf-ka3Sm4Cp1msivFyUhd7_A3OjKY6nMcnXMy_e1azCPUAfWYws9bX9f3JnZM0bp0IMR33BzaRmi_RgsUifE0DjnRKoHnVBFzHyF5yOBfkIWBjfhqn5Is9ezwzmLvvBTaHDvMt4z6Yt7HhciTHMeXWUTnWgmRRiQUMRwosETi2VEoTrT1zym0drzWAqZM88Zdslia6srxwRiUIO0wE",
            buttons: (
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/services/hotels"
                        className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 text-white text-lg font-bold shadow-lg transition-all hover:-translate-y-0.5"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        <span className="truncate">احجز الآن</span>
                    </Link>
                </div>
            )
        }
    ]

    if (latestArticle) {
        slides.push({
            id: 'news',
            title: latestArticle.title,
            description: latestArticle.metaDescription || 'تابع أحدث المستجدات والقوانين العالمية للهجرة والفيزا.',
            image: latestArticle.imageUrl || "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
            buttons: (
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={`/news/${latestArticle.slug}`}
                        className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 text-white text-lg font-bold shadow-lg transition-all hover:-translate-y-0.5"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        <span className="truncate">اقرأ المقال</span>
                    </Link>
                </div>
            )
        })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    return (
        <section className="relative px-6 md:px-20 py-12 md:py-24 bg-white overflow-hidden pb-20 md:pb-24">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative min-h-[400px]">
                {/* Hero Image */}
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-8 text-right relative h-[300px] md:h-[400px] justify-center">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 flex flex-col justify-center gap-8 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                                }`}
                        >
                            <div className="flex flex-col gap-4">
                                <h1 className="text-slate-900 text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed line-clamp-3">
                                    {slide.description}
                                </p>
                            </div>
                            {slide.buttons}
                        </div>
                    ))}

                    {/* Navigation Dots */}
                    <div className="absolute -bottom-16 md:-bottom-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 flex gap-2 z-20" dir="ltr">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-3 rounded-full transition-all ${index === currentSlide ? 'w-8' : 'w-3 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                style={index === currentSlide ? { backgroundColor: '#1a5f7a' } : {}}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
