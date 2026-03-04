export type ChatMessage = {
    role: 'system' | 'user' | 'assistant'
    content: string
}

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL ?? 'http://localhost:11434'
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? 'llama3'

const SYSTEM_PROMPT = `أنت مستشار متخصص في شؤون التأشيرات والهجرة واللجوء، تعمل لصالح منصة "مسار فيزا". 
تتحدث دائماً باللغة العربية، وتقدم تحليلاً دقيقاً ومفصلاً لفرص التأشيرات والإقامة والهجرة بناءً على الملف الشخصي للمستخدم.
عند طرح سؤال، حدد أفضل 3 دول مناسبة مع نوع التأشيرة ومتطلباتها الأساسية والرسوم التقريبية.
أسلوبك مهني، موثوق، ومشجع. لا تقدم ضمانات قانونية.`

export async function callOllama(messages: ChatMessage[]): Promise<Response> {
    const body = {
        model: OLLAMA_MODEL,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        stream: true,
    }

    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })

    if (!response.ok) {
        throw new Error(`Ollama error: ${response.status} ${response.statusText}`)
    }

    return response
}
