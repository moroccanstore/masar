import { callOllama } from '@/lib/ai'
import { NextResponse } from 'next/server'
import type { ChatMessage } from '@/lib/ai'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { messages } = body as { messages: ChatMessage[] }

        if (!Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: 'messages array is required' }, { status: 400 })
        }

        // Validate roles
        const validRoles = ['user', 'assistant', 'system']
        const isValid = messages.every(
            (m) =>
                validRoles.includes(m.role) &&
                typeof m.content === 'string' &&
                m.content.trim().length > 0
        )

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid message format' }, { status: 400 })
        }

        const ollamaResponse = await callOllama(messages)

        // Stream the Ollama response directly to the client
        return new Response(ollamaResponse.body, {
            status: 200,
            headers: {
                'Content-Type': 'application/x-ndjson',
                'Transfer-Encoding': 'chunked',
                'X-Content-Type-Options': 'nosniff',
            },
        })
    } catch (error) {
        console.error('[/api/chat] Error:', error)
        const message =
            error instanceof Error && error.message.includes('Ollama')
                ? 'المحلل الذكي غير متاح حالياً. الرجاء المحاولة لاحقاً.'
                : 'حدث خطأ داخلي'
        return NextResponse.json({ error: message }, { status: 500 })
    }
}
