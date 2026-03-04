import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'تأمين السفر | مسار فيزا',
    description: 'احصل على وثيقة تأمين السفر فوراً وسافر بكل طمأنينة مع تغطية شاملة لكافة احتياجاتك الطبية والطارئة.',
}

export default function InsurancePage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display pb-16">

            {/* Hero Section */}
            <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto">
                <div className="relative min-h-[450px] flex flex-col items-center justify-center overflow-hidden bg-slate-900 rounded-[2rem] p-8 text-center shadow-2xl">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVHdXf15mfqVX2XcYstdjaOGTQqcPvjptdPyZrOf-sW6gyXiv0N_jlOniLGMllGk5lJTzeRUrWpNe4BVF9LDfsvYuKcCpH01QUYSebc5AtICixc9yaVKGylOkMYCP7OIz4-qqQAsHcXw5fcvhh4Yun-PZcXP8TzYFGp5epjqjlxQfv8C_BJy4U71eSJovPTEWOY1PJRJcDoci2qX5iKpgGxaSCoIVLjZcATzmP42FVbZgQl6VtIqyTDgeFH9P6UBn6pifnRaRvXFs"
                        alt="Traveling safely"
                        fill
                        sizes="100vw"
                        priority
                        className="object-cover opacity-30 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    <div className="relative z-10 max-w-3xl space-y-6">
                        <span className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-bold border-2" style={{ backgroundColor: 'rgba(26,95,122,0.8)', borderColor: 'rgba(255,255,255,0.2)' }}>
                            <span className="material-symbols-outlined text-[18px]">verified_user</span>
                            مقبول لدى جميع سفارات الشنغن
                        </span>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            تأمين سفر شامل وموثوق <br className="hidden md:block" /> لرحلتك القادمة
                        </h1>
                        <p className="text-slate-200 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                            احصل على وثيقة التأمين فوراً وسافر بكل طمأنينة مع تغطية شاملة لكافة احتياجاتك الطبية والطارئة في أي مكان في العالم.
                        </p>
                    </div>
                </div>
            </div>

            {/* Quote Query Form (Overlapping the hero slightly) */}
            <div className="px-6 md:px-20 max-w-7xl mx-auto -mt-24 relative z-20 pb-12">
                <div className="bg-white shadow-xl rounded-[2rem] p-8 border" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                    <h3 className="text-slate-900 text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[24px]" style={{ color: '#1a5f7a' }}>health_and_safety</span>
                        استعلام عن سعر التأمين
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">وجهة السفر</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">public</span>
                                <select className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:bg-white transition-all font-bold appearance-none text-slate-700" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}>
                                    <option>اختر الوجهة (شنغن، عالمي...)</option>
                                    <option>منطقة الشنغن</option>
                                    <option>المملكة المتحدة</option>
                                    <option>تركيا</option>
                                    <option>جميع أنحاء العالم</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">تاريخ الذهاب</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
                                <input type="date" className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:bg-white transition-all font-bold text-slate-700" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">عدد المسافرين</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">group</span>
                                <select className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:bg-white transition-all font-bold appearance-none text-slate-700" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}>
                                    <option>1 مسافر (فردي)</option>
                                    <option>2 مسافرين</option>
                                    <option>عائلة (4+ أشخاص)</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <button className="w-full h-[50px] text-white font-black rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md" style={{ backgroundColor: '#1a5f7a' }}>
                                احصل على عرض
                                <span className="material-symbols-outlined rtl:-scale-x-100">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Insurance Plans */}
            <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">باقات التأمين المتاحة</h2>
                    <p className="text-slate-500 font-medium">اختر الباقة التي تناسب مدة رحلتك واحتياجاتك للسفر</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Basic Plan */}
                    <div className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div className="p-8 border-b" style={{ backgroundColor: 'rgba(26,95,122,0.02)', borderColor: 'rgba(26,95,122,0.05)' }}>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">الأساسية</h3>
                            <p className="text-sm font-medium text-slate-500">مثالية لرحلات الشنغن القصيرة</p>
                        </div>
                        <div className="p-8 flex-1 space-y-4">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    تغطية طبية حتى 30,000 يورو
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    مقبول لدى كافة سفارات الشنغن
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    تغطية الحالات الطارئة للإصابات
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-400 line-through opacity-70">
                                    <span className="material-symbols-outlined text-[20px]">cancel</span>
                                    تغطية إلغاء وتأخر الرحلات
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 pt-0 mt-auto">
                            <button className="w-full py-3.5 border-2 rounded-xl font-bold transition-all hover:bg-slate-50" style={{ color: '#1a5f7a', borderColor: '#1a5f7a' }}>
                                طلب الباقة الأساسية
                            </button>
                        </div>
                    </div>

                    {/* Standard Plan (Featured) */}
                    <div className="bg-white border-2 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col transform md:-translate-y-4" style={{ borderColor: '#1a5f7a' }}>
                        <div className="absolute top-0 left-0 right-0 text-white text-center text-xs font-bold py-1.5 tracking-wider uppercase" style={{ backgroundColor: '#1a5f7a' }}>
                            الأكثر طلباً
                        </div>
                        <div className="p-8 pt-10 border-b" style={{ backgroundColor: 'rgba(26,95,122,0.05)', borderColor: 'rgba(26,95,122,0.1)' }}>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">القياسية الممتدة</h3>
                            <p className="text-sm font-medium text-slate-500">التوازن المثالي للسفر بأمان واطمئنان</p>
                        </div>
                        <div className="p-8 flex-1 space-y-4">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    تغطية طبية حتى 50,000 يورو
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    تغطية كاملة وشاملة لـ COVID-19
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    تعويض تأخر الرحلات أو الجلوس
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    الإعادة الطبية الطارئة للوطن
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 pt-0 mt-auto">
                            <button className="w-full py-3.5 text-white shadow-md rounded-xl font-bold transition-all hover:opacity-90" style={{ backgroundColor: '#1a5f7a' }}>
                                طلب الباقة القياسية
                            </button>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div className="p-8 border-b" style={{ backgroundColor: 'rgba(26,95,122,0.02)', borderColor: 'rgba(26,95,122,0.05)' }}>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">المميزة العالمية</h3>
                            <p className="text-sm font-medium text-slate-500">حماية قصوى وتغطية مفتوحة للرحلات الطويلة</p>
                        </div>
                        <div className="p-8 flex-1 space-y-4">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    تغطية طبية ضخمة تصل لـ 150,000 يورو
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    تعويض إلغاء الرحلة لأسباب قهرية
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    المساعدة القانونية الفورية في الخارج
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                                    دعم VIP ومتابعة شخصية على مدار الساعة
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 pt-0 mt-auto">
                            <button className="w-full py-3.5 border-2 rounded-xl font-bold transition-all hover:bg-slate-50" style={{ color: '#1a5f7a', borderColor: '#1a5f7a' }}>
                                طلب الباقة المميزة
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Trust Signals & Features */}
            <section className="px-6 md:px-20 py-20 bg-slate-50 border-t border-slate-100 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-4">وثائقنا معتمدة ورقمية ومحمية</h2>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    نحن نعمل مع أكبر شركات التأمين العالمية (مثل أكسا ومارفي) لنضمن لك القبول التام لدى مراكز التأشيرات مثل (TLS، VFS، و BLS) بضغطة زر واحدة ومنظمة.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm border" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                    <div className="size-10 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                        <span className="material-symbols-outlined">description</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">نسخة PDF رقمية</h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">تصلك فوراً نسخة أصلية جاهزة للطباعة والتقديم ضمن ملفك.</p>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm border" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                    <div className="size-10 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                        <span className="material-symbols-outlined">qr_code_scanner</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">تدقيق عبر QR Code</h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">مزودة برمز شريطي معتمد لتأكيد صحة الوثيقة وتفادي التزوير.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-white max-w-md mx-auto">
                                <Image
                                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Confident traveler"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            {/* Badge Overlay */}
                            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <span className="material-symbols-outlined text-[28px]">thumb_up</span>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-lg">قبول 100%</h4>
                                        <p className="text-xs font-bold text-slate-500">مضمونة في السفارات</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Partners Banner */}
            <section className="pt-16 max-w-7xl mx-auto px-6 lg:px-20">
                <p className="text-center text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">بالشراكة مع أقوى شركات التأمين المتعددة</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiNk_bGh1gdnrR8crMDgG2XvwF2pN4bs2RvMR5aJU1tIGXqBrNKtomcx956hVuffsl_rHPqMNhTKsQZnyeJmwjsNwvmdPDzhui1npszNp9n1KrNO7_Snnz-02BZ-v7eoKnYggGvCnmhCFKYyrNDEvXs-VsyefY-AUTgdXmBgh89zNqW6NZdL57VIMmhLz482pYhJtclLc1CUT2e1IsCLqo2Qqb5WZGnvIfRI1anxtdFgJBagC2UVlF5uzSx7-UQWZtB5_u9uhd4bg" alt="AXA" width={80} height={40} className="h-8 w-auto object-contain" />
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWLzOhYutF9TIlzeRR1DLqAeuiUuK-ehPP-V0VffuYMQkRxRDyWOeRLqNOjQhlv70o1nW8_gDhoUCRS1ILhzQ_SS9t9pSDfGPcL5UeZOsskBzAt6V9P-FlkP5nipDAuX0iG9MArGBy_cllpD9PBFY3-W6K4n7d5FoRSfXa5QOY-1UDoERPNyMgxXHFa_RA_cyjgmDfN68ju50Lyd4J346DEqdPSPwvelyQsJ4VHJFC_1YOOt9gyANv-cDmAr6eSZIunmk-V7q5lY" alt="Allianz" width={100} height={40} className="h-8 w-auto object-contain" />
                    <span className="text-2xl font-black text-slate-600 block">CASH PLUS</span>
                </div>
            </section>

        </div>
    )
}
