import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'حجز رحلتك القادمة | مسار فيزا',
    description: 'نقدم لك حلول حجز الطيران المتكاملة، حجز مبدئي للتأشيرة أو حجز مؤكد للسفر.',
}

export default function FlightBookingPage() {
    return (
        <div className="bg-background-light min-h-screen font-display pb-16">

            {/* Hero & Search Section */}
            <section className="relative py-16 px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'rgba(26,95,122,0.03)' }}></div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-black mb-5 text-slate-900">احجز رحلتك القادمة بكل سهولة</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            نقدم لك حلول حجز الطيران المتكاملة، سواء كنت بحاجة لحجز مبدئي لغرض التأشيرة أو حجز مؤكد للسفر الفعلي.
                        </p>
                    </div>

                    {/* Search Card */}
                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: '#1a5f7a' }}>من أين؟</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                                    <input type="text" placeholder="مدينة المغادرة" className="w-full pr-12 pl-4 h-14 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:bg-white transition-all font-bold placeholder-slate-400" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: '#1a5f7a' }}>إلى أين؟</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">flight_land</span>
                                    <input type="text" placeholder="وجهة الوصول" className="w-full pr-12 pl-4 h-14 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:bg-white transition-all font-bold placeholder-slate-400" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: '#1a5f7a' }}>التاريخ</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
                                    <input type="date" className="w-full pr-12 pl-4 h-14 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:bg-white transition-all font-bold text-slate-600" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: '#1a5f7a' }}>المسافرون</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 z-10">group</span>
                                    <select className="w-full pr-12 pl-4 h-14 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:bg-white transition-all font-bold text-slate-700 appearance-none relative z-0" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}>
                                        <option>1 مسافر، سياحية</option>
                                        <option>2 مسافرين، سياحية</option>
                                        <option>3+ مسافرين، سياحية</option>
                                        <option>درجة الأعمال</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8 flex justify-center">
                            <button className="text-white px-12 h-14 rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 w-full md:w-auto shadow-lg" style={{ backgroundColor: '#1a5f7a', boxShadow: '0 10px 15px -3px rgba(26,95,122,0.3)' }}>
                                <span className="material-symbols-outlined text-[24px]">search</span>
                                بحث عن الرحلات
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Options */}
            <section className="py-16 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Option 1: Visa Flight */}
                        <div className="group bg-white p-8 md:p-10 rounded-[2rem] border-2 transition-all relative overflow-hidden shadow-sm hover:shadow-xl" style={{ borderColor: 'rgba(26,95,122,0.2)' }}>
                            <div className="absolute top-0 right-0 px-5 py-1.5 rounded-bl-2xl text-xs font-bold text-white shadow-sm" style={{ backgroundColor: '#1a5f7a' }}>
                                الأكثر طلباً للتأشيرة
                            </div>

                            <div className="flex items-start gap-5 mb-8 mt-4">
                                <div className="p-4 rounded-2xl shrink-0" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                    <span className="material-symbols-outlined text-4xl">description</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-2 text-slate-900 leading-tight">حجز طيران مبدئي للتأشيرة</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">حجز حقيقي مؤقت مقبول من جميع القنصليات والسفارات لأغراض استخراج الفيزا.</p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 border-t pt-8" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                                <li className="flex items-center gap-3 text-slate-700 font-bold">
                                    <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                                    مقبول لدى دول الشنغن، أمريكا، وبريطانيا
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold">
                                    <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                                    رقم مرجعي (PNR) قابل للتحقق من موقع شركة الطيران
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold">
                                    <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                                    لا يتطلب دفع ثمن التذكرة بالكامل للبدء
                                </li>
                            </ul>

                            <button className="w-full h-14 rounded-xl border-2 text-white font-bold transition-all hover:opacity-90 shadow-md text-lg" style={{ backgroundColor: '#1a5f7a', borderColor: '#1a5f7a' }}>
                                احجز للتأشيرة الآن
                            </button>
                        </div>

                        {/* Option 2: Confirmed Flight */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] border-2 border-slate-100 transition-all hover:border-slate-300 shadow-sm">
                            <div className="flex items-start gap-5 mb-8 mt-4">
                                <div className="bg-slate-100 p-4 rounded-2xl text-slate-600 shrink-0">
                                    <span className="material-symbols-outlined text-4xl">confirmation_number</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-2 text-slate-900 leading-tight">حجز طيران مؤكد للسفر</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">إصدار فوري لتذاكر الطيران بأفضل الأسعار المتاحة لجميع الوجهات العالمية المعتمدة.</p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 border-t border-slate-100 pt-8">
                                <li className="flex items-center gap-3 text-slate-700 font-bold">
                                    <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                                    تأكيد فوري وإرسال التذكرة عبر البريد الإلكتروني
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold">
                                    <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                                    إمكانية اختيار وتغيير المقاعد والوجبات قبل السفر
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold">
                                    <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                                    دعم فني متكامل وخدمة عملاء على مدار الساعة
                                </li>
                            </ul>

                            <button className="w-full h-14 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-slate-200 transition-all text-lg">
                                ابحث عن تذاكر سفر
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Us / Benefits */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">لماذا تختار "مسار فيزا" لحجز رحلتك؟</h2>
                        <div className="h-1.5 w-24 mx-auto rounded-full" style={{ backgroundColor: '#1a5f7a' }}></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center flex flex-col items-center">
                            <div className="size-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-[40px]">bolt</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">سرعة الإنجاز</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">احصل على حجزك المبدئي خلال أقل من 15 دقيقة عبر بريدك الإلكتروني أو الواتساب.</p>
                        </div>

                        <div className="text-center flex flex-col items-center">
                            <div className="size-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-[40px]">verified_user</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">موثوقية تامة</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">جميع حجوزاتنا المبدئية حقيقية وتظهر في أنظمة شركات الطيران (GDS) بشكل رسمي.</p>
                        </div>

                        <div className="text-center flex flex-col items-center">
                            <div className="size-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-[40px]">payments</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">مرونة الدفع</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">ندعم كافة وسائل الدفع المحلية والعالمية بما فيها كاش بلوس ووفا كاش والبطاقات البنكية.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals / Partners */}
            <section className="py-16 px-6 md:px-20 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 items-center flex-1">
                            <span className="text-2xl font-black text-slate-400">Royal Air Maroc</span>
                            <span className="text-2xl font-black text-slate-400">Emirates</span>
                            <span className="text-2xl font-black text-slate-400">Air France</span>
                            <span className="text-2xl font-black text-slate-400">Qatar Airways</span>
                            <span className="text-2xl font-black text-slate-400">Lufthansa</span>
                        </div>
                        <div className="flex items-center gap-8 md:border-r-2 md:pr-10 border-slate-300 shrink-0">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYVVAfScLEHJtzS8vWm-88sYff41zZAE-UpBEJiYMKq6ES9E7sKSGQot3rlsGIoqEGFMQsta0FkC7K8LQdnnHui3nDyqO5EXtHwkRJ92deZp92LtWnQGi-_OxyDQFq5LZvnYe8Ncn0fNkVcoLXTxg9WJh3lXo-wP5X-URyK56lYAaWJNLQ9RQ0wFsfHy56VnE30SrfTPdQlQ9RzkoTROBtDBjGeKOUZv_yYCyZpGRh2qDCMJGQg9YJ75mnrslBqmgs7Sdc1n80jtE"
                                alt="Cash Plus Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh-aNssEn3GV5SkqykTqjQ5f-DQtkeGHpdD17KTcuNDVnJYzK1CMsJCYUdkCEN4pY9Qja-2_rWGAnDZVbDOMGwYCcxp8rrCuZfwTYyUJ1eCKm-d0u5xH9udYKGUNFbK-p-ToZGAxekfBMj_8VF1I3cxw21inv3-NhV1M6yuBbMCnY7u1xn8VAwb9am6TMFgYhy7eAlcF5SuWWcvX5Sq_PWFVTS7RmZXd8QksMCoDSFbjY83YrLj9y30Vp4PfrQypzXsQ4g5lhl7-I"
                                alt="Visa Mastercard Logo"
                                width={100}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
