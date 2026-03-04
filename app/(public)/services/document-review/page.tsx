import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'مركز مراجعة المستندات | مسار فيزا',
    description: 'تابع حالة مستنداتك وتواصل مع الخبراء القانونيين لضمان قبول طلبك بكل سهولة.',
}

export default function DocumentReviewPage() {
    return (
        <div className="bg-background-light min-h-screen font-display pb-16">
            <main className="max-w-7xl mx-auto px-6 lg:px-20 py-10">

                {/* Page Title and Status */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">مركز مراجعة المستندات</h2>
                        <p className="text-slate-500 max-w-xl">تابع حالة مستنداتك وتواصل مع الخبراء القانونيين لضمان قبول طلبك بكل سهولة.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border min-w-[300px]" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-primary" style={{ color: '#1a5f7a' }}>تقدم المراجعة</span>
                            <span className="text-sm font-bold">65%</span>
                        </div>
                        <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(26,95,122,0.1)' }}>
                            <div className="h-full w-[65%] rounded-full" style={{ backgroundColor: '#1a5f7a' }}></div>
                        </div>
                        <div className="flex justify-between mt-3 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                            <span>تم الرفع</span>
                            <span className="font-bold" style={{ color: '#1a5f7a' }}>قيد المراجعة</span>
                            <span>تم التحقق</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Upload and Document List */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Upload Section */}
                        <section className="bg-white rounded-xl border-2 border-dashed p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-slate-50" style={{ borderColor: 'rgba(26,95,122,0.2)' }}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">رفع مستندات جديدة</h3>
                            <p className="text-slate-500 mb-6 text-sm">اسحب وأفلت الملفات هنا أو اضغط للتصفح. (PDF, JPG, PNG)</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-4">
                                <span className="px-3 py-1 text-xs rounded-full font-bold" style={{ backgroundColor: 'rgba(26,95,122,0.05)', color: '#1a5f7a' }}>جواز السفر</span>
                                <span className="px-3 py-1 text-xs rounded-full font-bold" style={{ backgroundColor: 'rgba(26,95,122,0.05)', color: '#1a5f7a' }}>الشهادات الدراسية</span>
                                <span className="px-3 py-1 text-xs rounded-full font-bold" style={{ backgroundColor: 'rgba(26,95,122,0.05)', color: '#1a5f7a' }}>خطابات الخبرة</span>
                            </div>

                            <button className="text-white px-8 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 hover:opacity-90" style={{ backgroundColor: '#1a5f7a' }}>
                                <span className="material-symbols-outlined text-sm">add</span>
                                تصفح الملفات
                            </button>
                        </section>

                        {/* Document Table */}
                        <section className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                            <div className="px-6 py-4 border-b flex flex-wrap gap-4 items-center justify-between" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                                <h3 className="font-bold text-lg text-slate-900">المستندات المرفوعة</h3>
                                <button className="text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: '#1a5f7a' }}>
                                    تحديث القائمة <span className="material-symbols-outlined text-sm">refresh</span>
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-right border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="text-xs uppercase" style={{ backgroundColor: 'rgba(26,95,122,0.05)', color: '#1a5f7a' }}>
                                            <th className="px-6 py-3 font-bold">اسم المستند</th>
                                            <th className="px-6 py-3 font-bold">النوع</th>
                                            <th className="px-6 py-3 font-bold">تاريخ الرفع</th>
                                            <th className="px-6 py-3 font-bold">الحالة</th>
                                            <th className="px-6 py-3 font-bold text-center">الإجراءات</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y text-sm" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-slate-700">جواز_السفر_جديد.pdf</td>
                                            <td className="px-6 py-4 text-slate-500">هوية وطنية</td>
                                            <td className="px-6 py-4 text-slate-500">12 أكتوبر 2023</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded text-xs font-bold">مقبول</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="text-slate-400 transition-colors" style={{ color: '#1a5f7a' }}>
                                                    <span className="material-symbols-outlined hover:scale-110 transition-transform">visibility</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-slate-700">شهادة_البكالوريوس.jpg</td>
                                            <td className="px-6 py-4 text-slate-500">تعليمي</td>
                                            <td className="px-6 py-4 text-slate-500">15 أكتوبر 2023</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded text-xs font-bold">قيد المراجعة</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="text-slate-400 transition-colors" style={{ color: '#1a5f7a' }}>
                                                    <span className="material-symbols-outlined hover:scale-110 transition-transform">visibility</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-slate-700">خبرة_عمل_سابقة.pdf</td>
                                            <td className="px-6 py-4 text-slate-500">مهني</td>
                                            <td className="px-6 py-4 text-slate-500">18 أكتوبر 2023</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded text-xs font-bold">يحتاج تعديل</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="text-rose-500 hover:text-rose-600 transition-colors">
                                                    <span className="material-symbols-outlined hover:scale-110 transition-transform">edit_square</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Expert Feedback and CTA */}
                    <div className="space-y-6">

                        {/* Expert Feedback Panel */}
                        <aside className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                            <div className="px-6 py-4 text-white flex items-center gap-2" style={{ backgroundColor: '#1a5f7a' }}>
                                <span className="material-symbols-outlined">gavel</span>
                                <h3 className="font-bold">ملاحظات الخبير القانوني</h3>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                        <span className="material-symbols-outlined">person</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">أ. محمد الأحمد</h4>
                                        <p className="text-[10px] text-slate-400 font-bold mt-0.5">مستشار تأشيرات - قبل ساعتين</p>
                                        <p className="mt-3 text-sm text-slate-600 bg-slate-50 p-3.5 rounded-lg border-r-4 leading-relaxed font-medium" style={{ borderColor: '#1a5f7a' }}>
                                            بخصوص "خبرة عمل سابقة"، يرجى التأكد من وجود الختم الرسمي للشركة وتاريخ البدء والانتهاء بوضوح.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 opacity-75">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-500">
                                        <span className="material-symbols-outlined">verified</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">النظام</h4>
                                        <p className="text-[10px] text-slate-400 font-bold mt-0.5">تلقائي - منذ يوم</p>
                                        <p className="mt-2 text-sm text-slate-500 bg-slate-50 p-3.5 rounded-lg font-medium">
                                            تم قبول "جواز السفر" بنجاح بعد التحقق من مطابقة البيانات.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 pt-0 border-t mt-2" style={{ borderColor: 'rgba(26,95,122,0.05)' }}>
                                <textarea
                                    className="w-full text-sm rounded-xl p-4 mt-4 bg-slate-50 border-none focus:ring-2 resize-none placeholder-slate-400 font-medium"
                                    placeholder="اكتب استفسارك هنا للمستشار..."
                                    rows={3}
                                    style={{ '--tw-ring-color': '#1a5f7a' } as React.CSSProperties}
                                ></textarea>
                                <button className="w-full mt-3 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90" style={{ backgroundColor: '#1a5f7a' }}>
                                    إرسال استفسار
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                            </div>
                        </aside>

                        {/* Call to Action Cards */}
                        <div className="rounded-xl border p-6" style={{ backgroundColor: 'rgba(26,95,122,0.02)', borderColor: 'rgba(26,95,122,0.1)' }}>
                            <h4 className="font-bold mb-2 text-lg" style={{ color: '#1a5f7a' }}>تحتاج مساعدة إضافية؟</h4>
                            <p className="text-sm text-slate-600 mb-5 leading-relaxed font-medium">إذا واجهت صعوبة في توفير بعض المستندات، يمكنك حجز جلسة استشارية خاصة مع خبرائنا.</p>
                            <button
                                className="w-full bg-white py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border-2 hover:bg-slate-50"
                                style={{ color: '#1a5f7a', borderColor: '#1a5f7a' }}
                            >
                                <span className="material-symbols-outlined text-[18px]">event</span>
                                حجز جلسة استشارية
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-[#1a5f7a] to-[#2c8fb4] rounded-xl p-6 text-white relative overflow-hidden shadow-md">
                            <div className="relative z-10">
                                <h4 className="font-bold text-lg mb-2">الدليل الإرشادي</h4>
                                <p className="text-sm text-white/90 mb-6 leading-relaxed">تعرف على المتطلبات القانونية لكل مستند لضمان القبول الفوري.</p>
                                <Link href="#" className="text-sm font-bold underline underline-offset-4 flex w-fit items-center gap-2 hover:text-white/80 transition-colors">
                                    تحميل الدليل (PDF)
                                    <span className="material-symbols-outlined text-[18px]">download</span>
                                </Link>
                            </div>
                            {/* Decorative Element */}
                            <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[120px] opacity-10 pointer-events-none">description</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
