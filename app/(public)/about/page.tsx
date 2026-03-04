import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'من نحن | مسار فيزا',
    description: 'تعرف على قصة مسار فيزا وخبراء الهجرة والفيزا خلف المنصة.',
}

export default function AboutPage() {
    return (
        <div className="bg-background-light min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-20 text-center">
                <span
                    className="px-4 py-1 text-xs font-bold rounded-full uppercase tracking-widest mb-4 inline-block"
                    style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}
                >
                    قصتنا
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                    نحن في <span className="text-primary">مسار فيزا</span> نؤمن بحق الجميع في اكتشاف آفاق جديدة.
                </h1>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 border shadow-sm text-right space-y-6" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                    <p className="text-lg text-slate-700 leading-relaxed text-center font-medium">
                        بدأت قصتنا بملاحظة بسيطة: العديد من الأشخاص ذوي الكفاءات العالية والمؤهلات الممتازة يفشلون في الحصول على التأشيرة أو تحقيق حلم الهجرة بسبب أخطاء بسيطة في تعبئة النماذج، نقص في التوجيه القانوني السليم، أو ببساطة عدم تقديم ملفاتهم بصيغة تتوافق مع معايير السفارات بدقة.
                    </p>
                    <div className="h-px bg-slate-100 my-8"></div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">visibility</span>
                        رؤيتنا
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        أن نصبح المنصة الأولى والأكثر شفافية للهجرة والتأشيرات في العالم العربي ومنطقة الشرق الأوسط وشمال أفريقيا، وأن نعزز فرص شبابنا لاكتساب المعرفة العالمية وتطوير مساراتهم.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">psychology</span>
                        الدمج بين الكوادر والذكاء الاصطناعي
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        نحن المنصة الأولى في المغرب والمنطقة العربية التي توظف تقنيات الذكاء الاصطناعي المتقدمة (AI Analyst) لتحليل ملفات العملاء وتحديث قواعد البيانات بشكل لحظي بأحدث التغيرات الدبلوماسية وقرارات السفارات العادية والطوارئ لضمان 0% هامش خطأ نتيجة تقادم المعلومة.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">workspace_premium</span>
                        لماذا مسار فيزا؟
                    </h2>
                    <ul className="space-y-3 text-slate-600">
                        <li className="flex gap-2 items-start"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> <strong>الشفافية:</strong> سياسة واضحة تماما للتسعير ولا وجود للرسوم المخفية.</li>
                        <li className="flex gap-2 items-start"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> <strong>تقسيط وتسهيلات:</strong> خيارات الدفع المحلية عبر وكالات Cash Plus لتسهيل الأمر على المغاربة.</li>
                        <li className="flex gap-2 items-start"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> <strong>الخبرة:</strong> طاقم مكون من خبراء استشاريين ومحامين معتمدين.</li>
                    </ul>
                </div>

                <div className="mt-12">
                    <Link
                        href="/services"
                        className="inline-flex h-14 px-10 items-center justify-center rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 text-lg"
                        style={{ backgroundColor: '#1a5f7a' }}
                    >
                        اكتشف كيف يمكننا مساعدتك
                    </Link>
                </div>
            </div>
        </div>
    )
}
