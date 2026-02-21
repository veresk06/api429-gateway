import { NextResponse } from 'next/server';

// Basic in-memory rate limiting map for the MVP
const ipMap = new Map<string, { count: number; timer?: NodeJS.Timeout }>();

// ── Telegram Helper ──────────────────────────────────────────────
async function sendTelegram(payload: Record<string, string>) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return;

    const text = [
        '🔔 *Новая заявка с api429.com*',
        '',
        `👤 *Имя:* ${payload.name}`,
        `📧 *Email:* ${payload.email}`,
        payload.telegram ? `💬 *Telegram:* ${payload.telegram}` : '',
        `🏷 *Роль:* ${payload.role}`,
        `📊 *Объём:* ${payload.volume}`,
        `💳 *Оплата:* ${payload.payment}`,
        payload.comment ? `📝 *Комментарий:* ${payload.comment}` : '',
        '',
        `🕐 ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
    ].filter(Boolean).join('\n');

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'Markdown',
            }),
        });
    } catch (err) {
        console.error('Telegram send error:', err);
    }
}

// ── Resend Email Helper ──────────────────────────────────────────
async function sendEmail(payload: Record<string, string>) {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEADS_EMAIL || 'val.sokolov60@gmail.com';
    if (!apiKey) return;

    const html = `
        <h2>🔔 Новая заявка с api429.com</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:8px;font-weight:bold;">Имя:</td><td style="padding:8px;">${payload.name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${payload.email}</td></tr>
            ${payload.telegram ? `<tr><td style="padding:8px;font-weight:bold;">Telegram:</td><td style="padding:8px;">${payload.telegram}</td></tr>` : ''}
            <tr><td style="padding:8px;font-weight:bold;">Роль:</td><td style="padding:8px;">${payload.role}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Объём:</td><td style="padding:8px;">${payload.volume}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Оплата:</td><td style="padding:8px;">${payload.payment}</td></tr>
            ${payload.comment ? `<tr><td style="padding:8px;font-weight:bold;">Комментарий:</td><td style="padding:8px;">${payload.comment}</td></tr>` : ''}
        </table>
        <p style="color:#888;font-size:12px;margin-top:16px;">Отправлено ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</p>
    `;

    try {
        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                from: 'api429 <leads@api429.com>',
                to: [toEmail],
                subject: `🔔 Новая заявка: ${payload.name} (${payload.volume})`,
                html,
            }),
        });
    } catch (err) {
        console.error('Resend email error:', err);
    }
}

// ── Main Handler ─────────────────────────────────────────────────
export async function POST(request: Request) {
    try {
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

        // Very basic rate limiting MVP logic (max 5 requests per minute per IP)
        const record = ipMap.get(ip);
        if (record) {
            if (record.count >= 5) {
                return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
            }
            record.count++;
        } else {
            const timer = setTimeout(() => ipMap.delete(ip), 60000);
            ipMap.set(ip, { count: 1, timer });
        }

        const payload = await request.json();

        // Honeypot or anti-spam could be validated here
        if (!payload.name || !payload.email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Send notifications in parallel (fire-and-forget, don't block response)
        Promise.allSettled([
            sendTelegram(payload),
            sendEmail(payload),
        ]).then(results => {
            results.forEach((r, i) => {
                if (r.status === 'rejected') {
                    console.error(`Notification ${i} failed:`, r.reason);
                }
            });
        });

        console.log('New Lead Submitted:', payload);

        return NextResponse.json({ success: true, message: 'Lead saved successfully' });
    } catch (error) {
        console.error('Error in /api/leads:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
