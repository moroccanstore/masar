import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'حجز فنادق للتأشيرة | مسار فيزا',
    description: 'احصل على حجز فندقي فوري ومقبول لدى جميع السفارات والقنصليات بضمان 100% وبدون مخاطر.',
}

export default function HotelsPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">

            {/* Hero & Search Section */}
            <section className="relative py-16 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -mr-48 -mt-48" style={{ backgroundColor: '#1a5f7a' }}></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -ml-48 -mb-48" style={{ backgroundColor: '#1a5f7a' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            حجز فنادق مؤكد لاستخراج التأشيرة
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            احصل على حجز فندقي فوري ومقبول لدى جميع السفارات والقنصليات بضمان 100% وبدون مخاطر
                        </p>
                    </div>

                    {/* Search Bar Component */}
                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-end">
                            <div className="col-span-1">
                                <label className="block text-sm font-bold text-slate-700 mb-2">الوجهة</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                                    <input className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:bg-white transition-all font-bold placeholder-slate-400" placeholder="إلى أين تريد الذهاب؟" type="text" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-bold text-slate-700 mb-2">التاريخ (من - إلى)</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">calendar_month</span>
                                    <input className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:bg-white transition-all font-bold placeholder-slate-400" placeholder="اختار التواريخ" type="text" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-bold text-slate-700 mb-2">الضيوف والغرف</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">group</span>
                                    <input className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:bg-white transition-all font-bold placeholder-slate-400" placeholder="2 ضيوف، 1 غرفة" type="text" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <button className="w-full h-[50px] text-white font-black rounded-xl text-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: '#1a5f7a' }}>
                                    <span className="material-symbols-outlined">search</span>
                                    ابحث عن الفنادق
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4 p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(26,95,122,0.02)', borderColor: 'rgba(26,95,122,0.1)' }}>
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-2xl">verified_user</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 mt-1">قبول مضمون 100%</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">حجوزاتنا مقبولة لدى جميع السفارات والقنصليات حول العالم.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(26,95,122,0.02)', borderColor: 'rgba(26,95,122,0.1)' }}>
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-2xl">speed</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 mt-1">تأكيد فوري</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">احصل على مستندات الحجز الخاصة بك فوراً عبر البريد الإلكتروني.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(26,95,122,0.02)', borderColor: 'rgba(26,95,122,0.1)' }}>
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-2xl">payments</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 mt-1">دفع مرن</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">خيارات دفع متعددة تشمل Cash Plus، التحويل البنكي، والبطاقات.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotel Grid Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900">فنادق موصى بها للتأشيرة</h2>
                            <p className="text-slate-500 mt-2 font-medium">فنادق متميزة توفر حجوزات قابلة للإلغاء ومثالية لملف التأشيرة</p>
                        </div>
                        <button className="font-bold flex items-center gap-1 hover:opacity-80 transition-all text-sm px-4 py-2 rounded-lg bg-slate-100" style={{ color: '#1a5f7a' }}>
                            مشاهدة الكل
                            <span className="material-symbols-outlined rtl:-scale-x-100 text-[18px]">arrow_forward</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Hotel 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB94qYtJ9wWhvBODWD-YMLIH-2bfKU6pjyTH9vkRv1XdeslXQwY5F_ikR3gQAf-ka3Sm4Cp1msivFyUhd7_A3OjKY6nMcnXMy_e1azCPUAfWYws9bX9f3JnZM0bp0IMR33BzaRmi_RgsUifE0DjnRKoHnVBFzHyF5yOBfkIWBjfhqn5Is9ezwzmLvvBTaHDvMt4z6Yt7HhciTHMeXWUTnWgmRRiQUMRwosETi2VEoTrT1zym0drzWAqZM88Zdslia6srxwRiUIO0wE"
                                    alt="Hotel in Paris"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm flex items-center gap-1" style={{ color: '#1a5f7a' }}>
                                    <span className="material-symbols-outlined text-[14px]">star</span>
                                    ممتاز 4.8
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-black text-lg text-slate-900 line-clamp-1 mb-2">فندق ريتز كارلتون</h3>
                                <div className="flex items-center gap-1 text-slate-500 text-sm mb-6 font-medium">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                                    باريس، فرنسا
                                </div>
                                <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                    <div>
                                        <span className="text-xs text-slate-400 block mb-0.5">سعر الحجز للتأشيرة</span>
                                        <span className="text-xl font-black" style={{ color: '#1a5f7a' }}>150 د.م</span>
                                    </div>
                                    <button className="text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-all" style={{ backgroundColor: '#1a5f7a' }}>
                                        حجز للتأشيرة
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Hotel 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEUaqM7A2Akx-v9_rUmeXfkNCG_K4OLFMIjSL0mMbANTtbg98nPrZDxClBpA5Z39wKi7hVe0c8xzsu_qkQc14K-0cCHC_w6aOXUV1_obandZqZ8rDKuyfEet2fOwM2GEqXj17C30CQIm6hM5d51yPFzUPMFSiI8C5rErm_GaKw-HNEWFfpqlOuTvxrV2GGb-FJ4uQEuX7a2w671cm3vDgt-F6SVocYlyTQ7bwrLxdkcMfiRcBQlBYkueQKcVhatnDJji_iTnHGhb4"
                                    alt="Hotel in Madrid"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm flex items-center gap-1" style={{ color: '#1a5f7a' }}>
                                    <span className="material-symbols-outlined text-[14px]">star</span>
                                    جيد جداً 4.5
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-black text-lg text-slate-900 line-clamp-1 mb-2">ماريوت أوديتوريوم</h3>
                                <div className="flex items-center gap-1 text-slate-500 text-sm mb-6 font-medium">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                                    مدريد، إسبانيا
                                </div>
                                <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                    <div>
                                        <span className="text-xs text-slate-400 block mb-0.5">سعر الحجز للتأشيرة</span>
                                        <span className="text-xl font-black" style={{ color: '#1a5f7a' }}>120 د.م</span>
                                    </div>
                                    <button className="text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-all" style={{ backgroundColor: '#1a5f7a' }}>
                                        حجز للتأشيرة
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Hotel 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRq9jQK__HvP8H8H7NWtDnpi0zBfJwwLDOWmwzinbQNNzgWYi-v4ANpFqLwMIGhW5gCewDhLNJG2WPFtRQJD8o0NWQ9SbHIvtVW9sEHdAimCGWT0ywYasdzTBlcIOqsOYm9wkX_kxVC4vmpzRP6mvRsvyP6tB0kfhYpvfZXdOMy1pae7kyZu603ZKH25Wd4cw2QXTlMwgRV_XiUW87Z46BFfCKuFMNZKQoCgQMPt6nm7Bbz77gT2hqQRR462yjkORaYsJSlJkxS4g"
                                    alt="Hotel in Istanbul"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm flex items-center gap-1" style={{ color: '#1a5f7a' }}>
                                    <span className="material-symbols-outlined text-[14px]">star</span>
                                    ممتاز 4.9
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-black text-lg text-slate-900 line-clamp-1 mb-2">هيلتون بوسفور</h3>
                                <div className="flex items-center gap-1 text-slate-500 text-sm mb-6 font-medium">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                                    إسطنبول، تركيا
                                </div>
                                <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                    <div>
                                        <span className="text-xs text-slate-400 block mb-0.5">سعر الحجز للتأشيرة</span>
                                        <span className="text-xl font-black" style={{ color: '#1a5f7a' }}>140 د.م</span>
                                    </div>
                                    <button className="text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-all" style={{ backgroundColor: '#1a5f7a' }}>
                                        حجز للتأشيرة
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Hotel 4 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIK_EHHzq4HCFkAuY7qGGfPk8LCALOtnzqstOusc6zGDHXvCmfs5JLjfwEpoHqk8R3CdOzYwLbfcr3eu4veVXdc2Hpzu2bmSd3TIbT8JntkFY8cd_BJYCbxcMGBn7yLDk6ApLsWc30ow7S5iOSMiOXcuS7fm5qFlTwheFYAyjRspZAcqLG-f15T4A8cOZVHkX7Iq-QzH_8sw5tJz4ULYacXojIzcJ_iIjcmk_OJnzQy_FGPCQqGkqcI6HxLsasufjUiVG0DVdFiTQ"
                                    alt="Hotel in Rome"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm flex items-center gap-1" style={{ color: '#1a5f7a' }}>
                                    <span className="material-symbols-outlined text-[14px]">star</span>
                                    جيد 4.2
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-black text-lg text-slate-900 line-clamp-1 mb-2">فندق روما سنترال</h3>
                                <div className="flex items-center gap-1 text-slate-500 text-sm mb-6 font-medium">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                                    روما، إيطاليا
                                </div>
                                <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                    <div>
                                        <span className="text-xs text-slate-400 block mb-0.5">سعر الحجز للتأشيرة</span>
                                        <span className="text-xl font-black" style={{ color: '#1a5f7a' }}>110 د.م</span>
                                    </div>
                                    <button className="text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-all" style={{ backgroundColor: '#1a5f7a' }}>
                                        حجز للتأشيرة
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust Signals Section */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-4xl text-slate-700">verified</span>
                            <span className="text-lg font-black text-slate-700">موثق من السفارات</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-4xl text-slate-700">shield_locked</span>
                            <span className="text-lg font-black text-slate-700">دفع آمن 100%</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-4xl text-slate-700">support_agent</span>
                            <span className="text-lg font-black text-slate-700">دعم فني 24/7</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-4xl text-slate-700">handshake</span>
                            <span className="text-lg font-black text-slate-700">شركاء معتمدون</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
