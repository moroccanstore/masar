import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'اتصل بنا | مسار فيزا',
    description: 'فريق دعم مسار فيزا متواجد للإجابة على استفساراتك حول التأشيرات والخدمات.',
}

export default function ContactPage() {
    return (
        <div className="bg-background-light min-h-screen py-16">
            <div className="max-w-[1000px] mx-auto px-6 md:px-20">

                <div className="text-center mb-16">
                    <span
                        className="px-4 py-1 text-xs font-bold rounded-full uppercase tracking-widest mb-4 inline-block"
                        style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}
                    >
                        نحن هنا لخدمتك
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                        كيف يمكننا مساعدتك اليوم؟
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        سواء كان لديك استفسار حول خدماتنا أو واجهت مشكلة، فريقنا جاهز للرد في أقرب فرصة.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="bg-white rounded-[2rem] p-10 border shadow-sm flex flex-col gap-8" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">معلومات التواصل المباشر</h3>
                            <p className="text-sm text-slate-500">نرد عادة خلال ٢٤ ساعة عمل.</p>
                        </div>

                        <div className="flex gap-4 items-center p-4 rounded-xl bg-slate-50">
                            <div className="text-primary size-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}>
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-slate-500 font-bold mb-1">البريد الإلكتروني</span>
                                <a href="mailto:support@masarvisa.com" className="text-slate-900 hover:text-primary transition-colors font-medium" dir="ltr">support@masarvisa.com</a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center p-4 rounded-xl bg-slate-50">
                            <div className="text-primary size-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}>
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-slate-500 font-bold mb-1">الدعم عبر الهاتف / واتساب</span>
                                <span className="text-slate-900 font-medium" dir="ltr">+212 600 000 000</span>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center p-4 rounded-xl bg-slate-50">
                            <div className="text-primary size-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}>
                                <span className="material-symbols-outlined">schedule</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-slate-500 font-bold mb-1">ساعات العمل</span>
                                <span className="text-slate-900 font-medium">الإثنين - السبت (9 صباحاً - 5 مساءً) بتوقيت المغرب</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-[2rem] p-10 border shadow-sm relative overflow-hidden" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <span className="material-symbols-outlined text-[100px] text-primary">outgoing_mail</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">إرسال رسالة</h3>

                        <form className="flex flex-col gap-5 relative z-10">
                            <div>
                                <label className="text-sm font-bold text-slate-700 mb-1.5 block">الاسم الكامل</label>
                                <input
                                    type="text"
                                    placeholder="محمد العبدلاوي"
                                    className="w-full bg-background-light border-none rounded-xl h-12 px-4 focus:ring-2 placeholder-slate-400"
                                    style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-slate-700 mb-1.5 block">البريد الإلكتروني أو الهاتف</label>
                                <input
                                    type="text"
                                    className="w-full bg-background-light border-none rounded-xl h-12 px-4 focus:ring-2 placeholder-slate-400"
                                    style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-slate-700 mb-1.5 block">الرسالة أو الاستفسار</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-background-light border-none rounded-xl p-4 focus:ring-2 resize-none placeholder-slate-400"
                                    style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="h-12 w-full rounded-xl text-white font-bold transition-all hover:opacity-90 mt-2 flex justify-center items-center gap-2"
                                style={{ backgroundColor: '#1a5f7a' }}
                            >
                                <span>إرسال الطلب</span>
                                <span className="material-symbols-outlined text-[18px]">send</span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
