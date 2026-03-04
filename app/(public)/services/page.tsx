import ServiceCard from '@/components/services/ServiceCard'
import type { Metadata } from 'next'
import type { ServiceCardProps } from '@/components/services/ServiceCard'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'خدماتنا | مسار فيزا',
    description:
        'خدمات التأشيرة والهجرة الشاملة: مراجعة المستندات، استشارات قانونية، تعبئة الاستمارات، بالإضافة لخدمات حجوزات الطيران، الفنادق، وتأمين السفر.',
}

const directServices: ServiceCardProps[] = [
    {
        title: 'تعبئة النماذج والاستمارات',
        description: 'نتولى نيابةً عنك إعداد وتقديم ملف التأشيرة بدقة كاملة. القيمة المضافة: ضمان عدم وجود أخطاء شكلية تسبب الرفض التلقائي، وتوفير وقتك في التردد على مكاتب الترجمة.',
        price: 500,
        iconName: 'flight_takeoff',
        link: '/services/visa-form',
        features: [
            'مراجعة جواز السفر والوثائق المطلوبة',
            'تعبئة النماذج الرسمية وتحديد المواعيد',
            'متابعة حالة الطلب خطوة بخطوة',
            'دعم بريدي مباشر للرد على استفساراتك',
            'ضمان المراجعة مجاناً عند الرفض',
        ],
        popular: true,
    },
    {
        title: 'مراجعة وتقييم المستندات',
        description: 'نراجع ملفك الحالي بدقة ونحدد نقاط الضعف ونسبة القبول. القيمة المضافة: كشف الثغرات التي تؤدي للرفض قبل دفع رسوم السفارة غير المستردة.',
        price: 250,
        iconName: 'plagiarism',
        link: '/services/document-review',
        features: [
            'تحليل شامل للوثائق المُجمعة مالياً ومهنياً',
            'تقرير مفصل بالملاحظات والأخطاء',
            'توصيات عملية لتقوية روابط العودة للوطن',
            'رد احترافي مكتوب خلال 48 ساعة كحد أقصى',
        ],
        popular: false,
    },
    {
        title: 'الاستشارات القانونية',
        description: 'جلسة معمقة مع خبير هجرة معتمد لمناقشة خياراتك وبناء خارطة طريق. القيمة المضافة: استراتيجية مصممة خصيصاً لوضعك الشخصي لتجاوز تعقيدات القوانين الجديدة.',
        price: 350,
        iconName: 'gavel',
        link: '/contact',
        features: [
            'جلسة فيديو خاصة مدتها 45 دقيقة',
            'تحليل الوضع الشخصي، العائلي، والأكاديمي',
            'خطة عمل قانونية مكتوبة وموثقة',
            'تحديد نوع التأشيرة الأنسب لنسبة نجاح 90%+',
        ],
        popular: false,
    },
]

const affiliateServices = [
    {
        title: 'حجوزات الطيران',
        description: 'حجز طيران مبدئي مؤكد (Dummy Ticket) متوافق تماماً مع متطلبات سفارات الشنغن وغيرها، يضمن قبول ملفك دون المخاطرة بشراء تذكرة فعلية باهظة الثمن قبل صدور التأشيرة.',
        icon: 'airlines',
        image: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: '/services/flight-booking',
        badge: 'أساسي لملف الشنغن'
    },
    {
        title: 'حجوزات الفنادق المكدة',
        description: 'توفير حجز فندقي مؤكد يغطي فترة إقامتك كاملة لدعم الغرض من السفر. يمكن إلغاؤه لاحقاً دون رسوم إضافية، مما يمنح قنصل السفارة الثقة في مسار رحلتك.',
        icon: 'hotel',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: '/services/hotels',
        badge: 'إثبات الإقامة'
    },
    {
        title: 'تأمين السفر الدولي',
        description: 'تأمين طبي شامل يغطي حتى 30,000 يورو (أو أكثر) ومطابق لمتطلبات التأشيرات الأوروبية وتأشيرات التجمع العائلي. يغطيك طوال فترة إقامتك المحددة.',
        icon: 'health_and_safety',
        image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: '/services/insurance',
        badge: 'تغطية طبية شاملة'
    }
]

export default function ServicesPage() {
    return (
        <div className="bg-background-light min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Header */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <span
                        className="px-4 py-1 text-xs font-bold rounded-full uppercase tracking-widest mb-4"
                        style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}
                    >
                        حلول متكاملة
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                        خدماتنا للتأشيرة والهجرة
                    </h1>
                    <p className="text-slate-600 text-lg max-w-[700px] mx-auto leading-relaxed">
                        محترفون في إعداد الملفات وتوجيه العملاء نحو المسار الصحيح. من الاستشارة القانونية وحتى تجهيز متطلبات السفر.
                    </p>
                </div>

                {/* Section 1: Direct Services */}
                <div className="mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-primary">work</span>
                    <h2 className="text-2xl font-bold text-slate-900">الخدمات المباشرة (الاستشارات ومعالجة الملفات)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {directServices.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>

                {/* Section 2: Affiliate / Complementary Services */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary">add_shopping_cart</span>
                            <h2 className="text-2xl font-bold text-slate-900">المتطلبات الأساسية للتأشيرة (خدمات إضافية)</h2>
                        </div>
                        <p className="text-slate-500 text-sm max-w-sm">نوفر لك أفضل الخيارات المعتمدة لدى السفارات بأسعار تفضيلية لاستكمال ملفك.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {affiliateServices.map((aff) => (
                            <div key={aff.title} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col">
                                <div className="h-48 relative w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={aff.image}
                                        alt={aff.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        {aff.badge}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined">{aff.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{aff.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                        {aff.description}
                                    </p>
                                    <a
                                        href={aff.link}
                                        className="w-full py-3 rounded-lg border-2 border-primary/20 text-primary font-bold text-center transition-all hover:bg-primary/5 text-sm flex items-center justify-center gap-2"
                                    >
                                        تفاصيل الخدمة وحجزها
                                        <span className="material-symbols-outlined text-[16px] rtl:-scale-x-100">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How it Works Section */}
                <div className="mb-24 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">كيف تعمل خدماتنا المستقلة؟</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            سواء اخترت الاستشارة الكاملة أو خدمة حجز مفردة، نضمن لك السرعة والموثوقية لتجهيز ملفك في الوقت المحدد.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        <div className="hidden md:block absolute top-[28px] left-0 right-0 h-0.5 bg-slate-100 z-0"></div>

                        <div className="relative z-10 flex flex-col items-center text-center gap-4">
                            <div className="size-14 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center font-black text-xl text-slate-400">1</div>
                            <h4 className="font-bold text-slate-900">تحديد النواقص</h4>
                            <p className="text-sm text-slate-500">من خلال استشارتنا المجانية الأولى نحدد المستندات المطلوبة بدقة.</p>
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center gap-4">
                            <div className="size-14 rounded-full border-4 border-white flex items-center justify-center font-black text-xl text-white shadow-md shadow-primary/20" style={{ backgroundColor: '#1a5f7a' }}>2</div>
                            <h4 className="font-bold text-slate-900 text-primary" style={{ color: '#1a5f7a' }}>طلب الخدمات</h4>
                            <p className="text-sm text-slate-500">اختر المعالجة المباشرة أو اكمل ملفك بإضافة حجوزات الطيران والتأمين.</p>
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center gap-4">
                            <div className="size-14 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center font-black text-xl text-slate-400">3</div>
                            <h4 className="font-bold text-slate-900">المراجعة النهائية</h4>
                            <p className="text-sm text-slate-500">يتم تجميع كافة الحجوزات والمستندات ومراجعتها وفق أحدث تحديثات المقر.</p>
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center gap-4">
                            <div className="size-14 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center font-black text-xl text-slate-400">4</div>
                            <h4 className="font-bold text-slate-900">التسليم الآمن</h4>
                            <p className="text-sm text-slate-500">استلم ملفاً متكاملاً (PDF/طباعة) جاهزاً لتقديمه في مركز طلبات التأشيرة.</p>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div
                    className="bg-white rounded-[2rem] p-10 md:p-16 border text-center shadow-lg relative overflow-hidden"
                    style={{ borderColor: 'rgba(26,95,122,0.1)' }}
                >
                    <div className="absolute left-0 bottom-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-[140px] text-primary">support_agent</span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div
                            className="size-16 rounded-2xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}
                        >
                            <span className="material-symbols-outlined text-4xl" style={{ color: '#1a5f7a' }}>
                                help_center
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                            تحتاج لمساعدة في ترتيب مستنداتك؟
                        </h2>
                        <p className="text-slate-600 mb-8 max-w-lg">
                            لا تخاطر بتقديم ملف غير متكامل. تواصل معنا اليوم لتحصل على قراءة دقيقة لحالتك.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="/contact"
                                className="flex items-center gap-2 h-12 px-8 rounded-xl text-white font-bold transition-all shadow-md hover:-translate-y-0.5"
                                style={{ backgroundColor: '#1a5f7a' }}
                            >
                                تواصل معنا الآن
                            </a>
                            <a
                                href="/#chatbot"
                                className="flex items-center gap-2 h-12 px-8 rounded-xl font-bold border transition-all hover:bg-slate-50"
                                style={{ borderColor: 'rgba(26,95,122,0.2)', color: '#1a5f7a' }}
                            >
                                المحلل الذكي (مؤقت)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
