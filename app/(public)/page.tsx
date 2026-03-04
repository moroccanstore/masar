import Hero from '@/components/home/Hero'
import ServiceCard from '@/components/services/ServiceCard'
import ArticleCard from '@/components/news/ArticleCard'
import ChatbotUI from '@/components/ai/ChatbotUI'
import Link from 'next/link'
import { prisma } from '@/lib/db'

// Service definitions (static catalog - no mock data in components)
const services = [
    {
        title: 'تعبئة النماذج',
        description: 'تعبئة احترافية لكافة طلبات التأشيرة لضمان خلوها من الأخطاء التي قد تؤدي للرفض.',
        price: 500,
        iconName: 'description',
        features: [
            'مراجعة جواز السفر والوثائق',
            'تعبئة النماذج الرسمية',
            'متابعة حالة الطلب',
            'دعم بريدي مباشر',
        ],
        popular: true,
    },
    {
        title: 'الاستشارات القانونية',
        description: 'جلسات مباشرة مع خبراء هجرة معتمدين لرسم خارطة طريق قانونية لملفك الشخصي.',
        price: 350,
        iconName: 'gavel',
        features: [
            'جلسة فيديو مدتها 45 دقيقة',
            'تحليل الوضع الشخصي بالتفصيل',
            'خطة عمل قانونية مكتوبة',
        ],
        popular: false,
    },
    {
        title: 'مراجعة المستندات',
        description: 'تدقيق شامل لكافة أوراقك الثبوتية والمالية لضمان مطابقتها للمعايير الدولية والدبلوماسية.',
        price: 250,
        iconName: 'fact_check',
        features: [
            'تحليل شامل للوثائق والمرفقات',
            'تقرير مفصل بالملاحظات والأخطاء',
            'توصيات حصرية لتقوية الملف',
        ],
        popular: false,
    },
]


async function getLatestArticle() {
    try {
        return await prisma.article.findFirst({
            orderBy: { publishedAt: 'desc' },
            select: {
                id: true,
                title: true,
                slug: true,
                imageUrl: true,
                metaDescription: true,
                publishedAt: true,
            },
        })
    } catch {
        return null
    }
}

export default async function HomePage() {
    const latestArticle = await getLatestArticle()

    return (
        <>
            {/* Hero directly imported */}
            <Hero latestArticle={latestArticle} />

            {/* AI Chatbot moved up below hero as in Stitch index design */}
            <ChatbotUI />

            {/* Services Section */}
            <section className="px-6 md:px-20 py-20 bg-white" id="services">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col gap-4 mb-16 text-center">
                        <h2 className="text-slate-900 text-3xl md:text-4xl font-black">خدماتنا المتميزة</h2>
                        <p className="text-slate-600 text-lg">
                            نقدم حلولاً متكاملة لتسهيل رحلتك نحو الخارج بأمان واحترافية وفق الأنظمة.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Payment Methods Section (from Stitch Index) */}
            <section className="px-6 md:px-20 py-16 bg-white border-y border-slate-100">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col gap-2 text-center md:text-right">
                        <h2 className="text-slate-900 text-2xl font-bold">طرق دفع آمنة وموثوقة</h2>
                        <p className="text-slate-500">نوفر خيارات دفع محلية ودولية لتسهيل معاملاتكم</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className="h-10 w-24 rounded flex items-center justify-center font-black text-xl italic"
                                style={{ backgroundColor: 'rgba(26,95,122,0.05)', color: '#1a5f7a' }}
                            >
                                CASH PLUS
                            </div>
                            <span className="text-[10px] text-slate-400">محلي (المغرب)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className="h-10 w-24 rounded flex items-center justify-center font-black text-lg italic"
                                style={{
                                    backgroundColor: 'rgba(26,95,122,0.05)',
                                    color: '#ffcc00',
                                    textShadow: '1px 1px 1px #000',
                                }}
                            >
                                Western Union
                            </div>
                            <span className="text-[10px] text-slate-400">دولي</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className="h-10 w-24 rounded flex items-center justify-center font-black text-[#ed1c24] text-2xl italic"
                                style={{ backgroundColor: 'rgba(26,95,122,0.05)' }}
                            >
                                Ria
                            </div>
                            <span className="text-[10px] text-slate-400">دولي</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className="h-10 w-24 rounded flex items-center justify-center font-bold text-[#003087] text-xl italic"
                                style={{ backgroundColor: 'rgba(26,95,122,0.05)' }}
                            >
                                PayPal
                            </div>
                            <span className="text-[10px] text-slate-400">دولي</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
