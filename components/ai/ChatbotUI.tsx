'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

const STARTER_PROMPTS = [
    'عمري 28 سنة، حاصل على ليسانس وماستر في الإعلاميات، وأعمل مهندس برمجيات من 4 سنوات.',
    'أنا طالب في سلك الدكتوراه في الكيمياء، عمري 26 وغير متزوج. ما هي فرصتي في الهجرة إلى كندا؟',
]

export default function ChatbotUI() {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isLoading])

    const sendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return

        const userMessage: Message = { role: 'user', content: text.trim() }
        const updatedMessages = [...messages, userMessage]
        setMessages(updatedMessages)
        setInput('')
        setIsLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: updatedMessages }),
            })

            if (!res.ok || !res.body) throw new Error('فشل الاتصال بالمحلل الذكي')

            const reader = res.body.getReader()
            const decoder = new TextDecoder()
            let assistantText = ''

            setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

            while (true) {
                const { done, value } = await reader.read()
                if (done) break
                const chunk = decoder.decode(value)
                const lines = chunk.split('\n').filter(Boolean)
                for (const line of lines) {
                    try {
                        const json = JSON.parse(line)
                        if (json.message?.content) {
                            assistantText += json.message.content
                            setMessages((prev) => {
                                const updated = [...prev]
                                updated[updated.length - 1] = { role: 'assistant', content: assistantText }
                                return updated
                            })
                        }
                    } catch {
                        // ignore partial JSON
                    }
                }
            }
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'حدث خطأ غير متوقع'
            setMessages((prev) => [...prev, { role: 'assistant', content: `⚠️ ${errorMsg}` }])
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        sendMessage(input)
    }

    return (
        <section id="chatbot" className="px-6 md:px-20 py-20 bg-background-light">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center flex flex-col gap-6 bg-white p-8 md:p-16 rounded-[2rem] shadow-xl border relative overflow-hidden" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                    {/* Decor */}
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-[120px] text-primary">psychology</span>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col gap-4 items-center relative z-10">
                        <span className="px-4 py-1 text-xs font-bold rounded-full uppercase tracking-widest" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                            Powered by AI
                        </span>
                        <h2 className="text-slate-900 text-3xl md:text-5xl font-black">المحلل الذكي (AI Analyser)</h2>
                        <p className="text-slate-600 text-lg max-w-[700px]">
                            تقييم فوري وشامل لفرص هجرتك بناءً على معايير السفارات. أخبرني عن تفاصيلك المهنية والأكاديمية، وسأقوم بالتحليل في ثوانٍ.
                        </p>
                    </div>

                    {/* Chat Container */}
                    <div className="w-full max-w-[800px] mx-auto mt-8 relative z-10 shadow-sm border rounded-2xl overflow-hidden bg-slate-50" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                        <div className="h-[450px] overflow-y-auto p-4 md:p-6 space-y-4">
                            {messages.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(26,95,122,0.1)', color: '#1a5f7a' }}>
                                        <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold mb-1">ابدأ التقييم الذكي بضغطة زر</p>
                                        <p className="text-sm text-slate-500">اختر مثالاً من الأسفل، أو اكتب حالتك مباشرة.</p>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full max-w-lg mt-2">
                                        {STARTER_PROMPTS.map((prompt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => sendMessage(prompt)}
                                                className="text-right text-sm text-slate-700 bg-white hover:bg-slate-100 border rounded-xl px-5 py-3 transition-colors shadow-sm leading-relaxed"
                                                style={{ borderColor: 'rgba(26,95,122,0.1)' }}
                                            >
                                                {prompt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {messages.map((msg, i) => (
                                <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`size-10 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm
                    ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-white border text-primary'}`}
                                        style={msg.role !== 'user' ? { borderColor: 'rgba(26,95,122,0.1)' } : {}}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {msg.role === 'user' ? 'person' : 'smart_toy'}
                                        </span>
                                    </div>
                                    <div className={`max-w-[85%] px-5 py-4 text-[15px] leading-loose whitespace-pre-wrap shadow-sm
                    ${msg.role === 'user' ? 'bg-primary text-white rounded-[20px_20px_4px_20px]' : 'bg-white text-slate-700 rounded-[20px_20px_20px_4px]'}`}
                                        style={msg.role !== 'user' ? { border: '1px solid rgba(26,95,122,0.1)' } : {}}
                                    >
                                        {msg.content || (
                                            <span className="flex items-center gap-2 text-slate-400">
                                                <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
                                                يحلل البيانات...
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isLoading && messages[messages.length - 1]?.role === 'user' && (
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-full bg-white border flex items-center justify-center shrink-0 mt-1 shadow-sm text-primary" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                                        <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                                    </div>
                                    <div className="bg-white border text-slate-500 rounded-[20px_20px_20px_4px] px-5 py-4 text-sm flex items-center gap-2" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                                        <span className="size-2 bg-primary rounded-full animate-pulse-dot"></span>
                                        <span className="size-2 bg-primary rounded-full animate-pulse-dot animation-delay-100"></span>
                                        <span className="size-2 bg-primary rounded-full animate-pulse-dot animation-delay-200"></span>
                                        <span className="ml-2 font-medium">الذكاء الاصطناعي يبحث في تحديثات القوانين ...</span>
                                    </div>
                                </div>
                            )}

                            <div ref={bottomRef} />
                        </div>

                        {/* Input Form */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t flex items-center gap-3" style={{ borderColor: 'rgba(26,95,122,0.1)' }}>
                            {messages.length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setMessages([])}
                                    title="محادثة جديدة"
                                    className="p-3 text-slate-400 hover:text-red-500 hover:bg-slate-50 rounded-xl transition-colors shrink-0"
                                >
                                    <span className="material-symbols-outlined text-[24px]">restart_alt</span>
                                </button>
                            )}
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="اكتب بياناتك أو استفسارك هنا..."
                                disabled={isLoading}
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 h-14 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="h-14 w-14 bg-primary text-white rounded-xl flex items-center justify-center transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                <span className="material-symbols-outlined rtl:-scale-x-100">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
