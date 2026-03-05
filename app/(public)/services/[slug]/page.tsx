import { notFound } from 'next/navigation'
import Link from 'next/link'

// Temporarily hardcode our 3 available active services.
// Later, this could be driven by the DB if a Service model is created.
const servicesDB = [
    {
        slug: 'document-review',
        title: 'مراجعة المستندات والوثائق',
        shortDescription: 'تأكد من صحة أوراقك قبل التقديم',
        fullDescription: 'نقوم بمراجعة كافة الأوراق والمستندات المطلوبة للتأشيرة بدقة متناهية لضمان عدم وجود أي نقص أو أخطاء قد تؤدي للرفض.',
        price: '499',
        icon: 'fact_check',
    },
    {
        slug: 'visa-form',
        title: 'تعبئة استمارة الفيزا',
        shortDescription: 'تعبئة احترافية تضمن القبول',
        fullDescription: 'خدمة احترافية لتعبئة نماذج استخراج التأشيرة (شنغن، أمريكا، كندا، إلخ) بالإجابات النموذجية التي ترفع نسبة القبول.',
        price: '299',
        icon: 'edit_document',
    },
    {
        slug: 'flight-booking',
        title: 'حجز طيران وفندق مبدئي',
        shortDescription: 'حجوزات مؤكدة لغرض الفيزا',
        fullDescription: 'نوفر لك حجوزات طيران وفنادق مبدئية مؤكدة ومقبولة لدى السفارات دون الحاجة لدفع التكلفة الكاملة مقدماً.',
        price: '199',
        icon: 'flight_takeoff',
    }
]

export const revalidate = 3600

export async function generateStaticParams() {
    return servicesDB.map(s => ({ slug: s.slug }))
}

interface Props {
    params: Promise<{ slug: string }>
}

export default async function DynamicServicePage({ params }: Props) {
    const { slug } = await params
    const service = servicesDB.find(s => s.slug === slug)

    // If we haven't mapped this service slug, 404
    if (!service) notFound()

    return (
        <div className="bg-background-light min-h-screen py-20 px-6">
            <div className="max-w-[800px] mx-auto">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold hover:underline mb-8"
                    style={{ color: '#1a5f7a' }}
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    العودة لجميع الخدمات
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
                    <div className="size-20 mx-auto rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                        <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{service.title}</h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        {service.fullDescription}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between border border-slate-200 gap-6">
                        <div className="text-right w-full md:w-auto">
                            <h3 className="text-slate-500 font-bold mb-1">تكلفة الخدمة وتبدأ من</h3>
                            <div className="text-4xl font-black text-slate-900">{service.price} <span className="text-xl text-slate-500">درهم</span></div>
                        </div>
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                            متوفر الدفع عبر Cash Plus
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="flex w-full h-14 items-center justify-center rounded-xl text-white font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        طلب الخدمة الآن
                    </Link>
                </div>
            </div>
        </div>
    )
}
