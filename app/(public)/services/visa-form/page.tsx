import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'تعبئة استمارات التأشيرة | مسار فيزا',
    description: 'المعلومات الشخصية - تعبئة استمارات التأشيرة بمساعدة الذكاء الاصطناعي.',
}

export default function VisaFormPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">

            {/* Header Overlay (replaces standard navbar for focus mode) */}
            <header className="sticky top-0 z-50 bg-white border-b px-4 md:px-10 py-3 flex items-center justify-between shadow-sm" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#1a5f7a' }}>
                        <span className="material-symbols-outlined">description</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight" style={{ color: '#1a5f7a' }}>مسار فيزا (MasarVisa)</h1>
                        <p className="text-xs text-slate-500">منصة تعبئة الاستمارات الذكية</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end gap-1 min-w-[200px]">
                        <div className="flex justify-between w-full text-xs font-medium">
                            <span style={{ color: '#1a5f7a' }}>نسبة الإكمال</span>
                            <span>40%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ backgroundColor: '#1a5f7a', width: '40%' }}></div>
                        </div>
                    </div>
                    <a href="/services" className="text-sm font-bold underline underline-offset-4 text-slate-500 hover:text-slate-800 transition-colors">
                        إنهاء وحفظ لاحقاً
                    </a>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 65px)' }}>

                {/* Sidebar Navigation */}
                <aside className="w-72 bg-white border-l p-6 flex flex-col gap-6 overflow-y-auto hidden md:flex" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                    <div className="space-y-1">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-4">خطوات الطلب</h3>
                        <nav className="space-y-1">
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium shadow-md" style={{ backgroundColor: '#1a5f7a', boxShadow: '0 4px 6px -1px rgba(26,95,122,0.2)' }}>
                                <span className="material-symbols-outlined">person</span>
                                <span>المعلومات الشخصية</span>
                                <span className="mr-auto material-symbols-outlined text-sm">check_circle</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 transition-all hover:text-primary" style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
                                <span className="material-symbols-outlined">group</span>
                                <span>بيانات العائلة</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 transition-all hover:text-primary" style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
                                <span className="material-symbols-outlined">school</span>
                                <span>السجل التعليمي</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 transition-all hover:text-primary" style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
                                <span className="material-symbols-outlined">work</span>
                                <span>التاريخ المهني</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 transition-all hover:text-primary" style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
                                <span className="material-symbols-outlined">flight</span>
                                <span>تاريخ السفر</span>
                            </a>
                        </nav>
                    </div>

                    <div className="mt-auto p-4 rounded-2xl border" style={{ backgroundColor: 'rgba(26,95,122,0.05)', borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div className="flex items-center gap-2 mb-2" style={{ color: '#1a5f7a' }}>
                            <span className="material-symbols-outlined text-xl">verified_user</span>
                            <span className="font-bold text-sm">بيانات آمنة</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            نحن نستخدم تشفير AES-256 لحماية بياناتك الشخصية وضمان خصوصيتك.
                        </p>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50/50">
                    <div className="max-w-4xl mx-auto space-y-8">

                        <div className="flex flex-col gap-2 border-b border-slate-200 pb-6">
                            <h2 className="text-2xl font-bold text-slate-900">تعبئة استمارات التأشيرة - المعلومات الشخصية</h2>
                            <p className="text-slate-500">الرجاء التأكد من مطابقة البيانات المدخلة مع وثيقة جواز السفر الرسمية.</p>
                        </div>

                        {/* Common Mistakes Alert */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4">
                            <span className="material-symbols-outlined text-amber-600 text-[24px]">warning</span>
                            <div className="text-sm">
                                <p className="font-bold text-amber-900 mb-1">أخطاء شائعة يجب تجنبها:</p>
                                <ul className="list-disc list-inside text-amber-800 space-y-1">
                                    <li>كتابة الاسم باللغة العربية (يجب استخدامه كما هو في الجواز بالإنجليزية).</li>
                                    <li>تاريخ انتهاء الجواز يجب أن يكون صالحاً لـ 6 أشهر على الأقل.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form Content */}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 flex flex-col gap-2">
                                <label className="flex items-center gap-1 text-sm font-bold text-slate-700">
                                    الاسم الأول (بالإنجليزية)
                                    <span className="material-symbols-outlined text-slate-400 text-xs cursor-help" title="أدخل الاسم الأول كما يظهر تماماً في جواز السفر">info</span>
                                </label>
                                <input type="text" placeholder="First Name as in Passport" className="w-full rounded-xl border-slate-300 h-12 px-4 focus:ring-2" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                            </div>

                            <div className="col-span-1 flex flex-col gap-2">
                                <label className="flex items-center gap-1 text-sm font-bold text-slate-700">
                                    اسم العائلة (بالإنجليزية)
                                    <span className="material-symbols-outlined text-slate-400 text-xs cursor-help">info</span>
                                </label>
                                <input type="text" placeholder="Surname as in Passport" className="w-full rounded-xl border-slate-300 h-12 px-4 focus:ring-2" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                            </div>

                            <div className="col-span-1 flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">تاريخ الميلاد</label>
                                <input type="date" className="w-full rounded-xl border-slate-300 h-12 px-4 focus:ring-2" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                            </div>

                            <div className="col-span-1 flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">الجنسية الحالية</label>
                                <select className="w-full rounded-xl border-slate-300 h-12 px-4 focus:ring-2 bg-white" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}>
                                    <option>المملكة المغربية</option>
                                    <option>المملكة العربية السعودية</option>
                                    <option>الإمارات العربية المتحدة</option>
                                    <option>مصر</option>
                                </select>
                            </div>

                            <div className="col-span-2 flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">رقم جواز السفر</label>
                                <input type="text" placeholder="مثال: G12345678" className="w-full rounded-xl border-slate-300 h-12 px-4 uppercase focus:ring-2" style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties} />
                            </div>

                            <div className="col-span-2 p-6 bg-white border border-slate-200 rounded-xl shadow-sm mt-2">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}>
                                        <span className="material-symbols-outlined" style={{ color: '#1a5f7a' }}>lightbulb</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">لماذا نحتاج هذه المعلومات؟</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                            تتطلب القنصلية مطابقة دقيقة للبيانات مع قاعدة بيانات الهجرة الوطنية لتجنب التأخير في إصدار التأشيرة.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Form Footer Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
                            <button className="w-full sm:w-auto px-8 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                                حفظ للمتابعة لاحقاً
                            </button>

                            <div className="flex w-full sm:w-auto gap-4">
                                <button className="flex-1 sm:flex-none px-8 py-3 rounded-xl text-slate-400 font-bold bg-slate-100 cursor-not-allowed">
                                    السابق
                                </button>
                                <button
                                    className="flex-1 sm:flex-none px-12 py-3 rounded-xl text-white font-bold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                                    style={{ backgroundColor: '#1a5f7a' }}
                                >
                                    التالي
                                    <span className="material-symbols-outlined rtl:-scale-x-100 text-[18px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </main>

                {/* AI Assistant Sidebar */}
                <aside className="w-80 bg-white border-r overflow-y-auto hidden xl:flex flex-col" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                    <div className="p-6 text-white" style={{ backgroundColor: '#1a5f7a' }}>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-[24px]">psychology</span>
                            <h3 className="font-bold">المساعد الذكي (AI)</h3>
                        </div>
                        <p className="text-xs text-white/90 leading-relaxed">
                            أنا هنا لمساعدتك في تعبئة الاستمارة بشكل صحيح وفقاً للمتطلبات القانونية.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="p-4 rounded-xl border-r-4" style={{ backgroundColor: 'rgba(26,95,122,0.05)', borderColor: '#1a5f7a' }}>
                            <h4 className="text-sm font-bold mb-2" style={{ color: '#1a5f7a' }}>نصيحة الحقل الحالي:</h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                تأكد من كتابة الاسم كما هو في شريط الـ (MRZ) أسفل صفحة المعلومات في جواز السفر.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">contact_support</span>
                                أسئلة شائعة
                            </h4>
                            <div className="space-y-3">
                                <button className="w-full text-right text-xs p-3.5 rounded-xl border border-slate-200 text-slate-600 transition-colors font-medium hover:bg-slate-50 hover:border-slate-300">
                                    ماذا أفعل إذا كان لدي اسم واحد فقط؟
                                </button>
                                <button className="w-full text-right text-xs p-3.5 rounded-xl border border-slate-200 text-slate-600 transition-colors font-medium hover:bg-slate-50 hover:border-slate-300">
                                    كيف يتم إدخال التواريخ الهجرية؟
                                </button>
                                <button className="w-full text-right text-xs p-3.5 rounded-xl border border-slate-200 text-slate-600 transition-colors font-medium hover:bg-slate-50 hover:border-slate-300">
                                    هل أحتاج لترجمة بياناتي للإنجليزية؟
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="aspect-video bg-slate-200 relative group cursor-pointer">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7xjmXxhFsJ7pKoMIJTbLWzXFWa4aMu2QE3Rn_fY_lyqECNHkjvfYhx2YleXfcbjI8WImcdr15FyScwxP7zv9f7En0cRDeXwH-CMz3slisZ77X7cUOKy16uEkzpSZNd1mz-FgV3O_frnXfBHG4UkY2Lm1le_2UaNwhlX6MvkFCM1ddgGa33ZfNVKze-wSoG1Nlbz75sJ4rni2QPYBdaWakYujXyAX08ZyOUDZLayH0rgrCxIaGwIRPrcvkIN9TPAZECmSBdvLmuc"
                                    alt="Tutorial video"
                                    fill
                                    sizes="320px"
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                    <div className="size-12 rounded-full bg-white/95 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg" style={{ color: '#1a5f7a' }}>
                                        <span className="material-symbols-outlined text-[32px] ml-1">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-white">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">فيديو تعليمي</p>
                                <p className="text-sm font-bold text-slate-800">شرح خطوة بخطوة للمعلومات الشخصية</p>
                            </div>
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    )
}
