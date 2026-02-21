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
            body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
        });
    } catch (err) {
        console.error('Telegram send error:', err);
    }
}

// ── Resend: Notification to Admin ────────────────────────────────
async function sendAdminEmail(payload: Record<string, string>) {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEADS_EMAIL || 'admin@api429.com';
    if (!apiKey) return;

    const html = `
<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:32px 24px;">
  <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);border-radius:16px;padding:32px;border:1px solid rgba(255,255,255,0.08);">
    <h2 style="color:#fff;margin:0 0 24px;font-size:22px;">🔔 Новая заявка с api429.com</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:12px 16px;color:#888;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.06);">Имя</td><td style="padding:12px 16px;color:#fff;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.06);">${payload.name}</td></tr>
      <tr><td style="padding:12px 16px;color:#888;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.06);">Email</td><td style="padding:12px 16px;color:#fff;border-bottom:1px solid rgba(255,255,255,0.06);"><a href="mailto:${payload.email}" style="color:#6c63ff;">${payload.email}</a></td></tr>
      ${payload.telegram ? `<tr><td style="padding:12px 16px;color:#888;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.06);">Telegram</td><td style="padding:12px 16px;color:#fff;border-bottom:1px solid rgba(255,255,255,0.06);">${payload.telegram}</td></tr>` : ''}
      <tr><td style="padding:12px 16px;color:#888;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.06);">Роль</td><td style="padding:12px 16px;color:#fff;border-bottom:1px solid rgba(255,255,255,0.06);">${payload.role}</td></tr>
      <tr><td style="padding:12px 16px;color:#888;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.06);">Объём</td><td style="padding:12px 16px;color:#fff;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.06);">${payload.volume} токенов/мес</td></tr>
      <tr><td style="padding:12px 16px;color:#888;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.06);">Оплата</td><td style="padding:12px 16px;color:#fff;border-bottom:1px solid rgba(255,255,255,0.06);">${payload.payment}</td></tr>
      ${payload.comment ? `<tr><td style="padding:12px 16px;color:#888;font-size:13px;">Комментарий</td><td style="padding:12px 16px;color:#fff;">${payload.comment}</td></tr>` : ''}
    </table>
    <p style="color:#555;font-size:11px;margin:20px 0 0;text-align:center;">${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })} МСК</p>
  </div>
</div>
</body></html>`;

    try {
        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
            body: JSON.stringify({
                from: 'api429.com <leads@api429.com>',
                to: [toEmail],
                subject: `🔔 Новая заявка: ${payload.name} (${payload.volume})`,
                html,
            }),
        });
    } catch (err) {
        console.error('Admin email error:', err);
    }
}

// ── Resend: Auto-Reply to Client ─────────────────────────────────
async function sendClientAutoReply(payload: Record<string, string>) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || !payload.email) return;

    const name = payload.name.split(/[\s,]/)[0]; // First name only

    const html = `
<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f8f9fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:32px 24px;">

  <!-- Header -->
  <div style="text-align:center;margin-bottom:32px;">
    <h1 style="font-size:28px;font-weight:800;margin:0;">
      <span style="background:linear-gradient(135deg,#6c63ff,#4ecdc4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">api429.com</span>
    </h1>
  </div>

  <!-- Main Card -->
  <div style="background:#ffffff;border-radius:16px;padding:40px 32px;box-shadow:0 2px 16px rgba(0,0,0,0.06);">
    <h2 style="color:#1a1a2e;margin:0 0 16px;font-size:22px;">Здравствуйте, ${name}! 👋</h2>
    <p style="color:#555;line-height:1.7;margin:0 0 24px;font-size:15px;">
      Спасибо за заявку! Мы получили ваш запрос на подключение к Gemini API Gateway и уже начали его обработку.
    </p>

    <!-- What's Next -->
    <div style="background:#f0f0ff;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h3 style="color:#1a1a2e;margin:0 0 16px;font-size:16px;">⚡ Что будет дальше:</h3>
      <table style="width:100%;">
        <tr>
          <td style="padding:6px 12px 6px 0;vertical-align:top;color:#6c63ff;font-weight:bold;font-size:18px;">1.</td>
          <td style="padding:6px 0;color:#444;font-size:14px;">Наш менеджер свяжется с вами в течение <strong>2–6 часов</strong></td>
        </tr>
        <tr>
          <td style="padding:6px 12px 6px 0;vertical-align:top;color:#6c63ff;font-weight:bold;font-size:18px;">2.</td>
          <td style="padding:6px 0;color:#444;font-size:14px;">Вы получите <strong>тестовый API-ключ</strong> для проверки интеграции</td>
        </tr>
        <tr>
          <td style="padding:6px 12px 6px 0;vertical-align:top;color:#6c63ff;font-weight:bold;font-size:18px;">3.</td>
          <td style="padding:6px 0;color:#444;font-size:14px;">Обсудим тариф и <strong>индивидуальные условия</strong> под ваш объём</td>
        </tr>
      </table>
    </div>

    <!-- Your Request Summary -->
    <div style="border:1px solid #eee;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h3 style="color:#1a1a2e;margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;">Ваша заявка</h3>
      <table style="width:100%;">
        <tr><td style="padding:6px 0;color:#888;font-size:13px;">Объём:</td><td style="padding:6px 0;color:#1a1a2e;font-weight:600;text-align:right;">${payload.volume} токенов/мес</td></tr>
        <tr><td style="padding:6px 0;color:#888;font-size:13px;">Оплата:</td><td style="padding:6px 0;color:#1a1a2e;text-align:right;">${payload.payment}</td></tr>
      </table>
    </div>

    <!-- CTA -->
    <div style="text-align:center;margin-bottom:16px;">
      <a href="https://t.me/api429_support" style="display:inline-block;background:linear-gradient(135deg,#6c63ff,#4ecdc4);color:#fff;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:15px;">💬 Написать в Telegram</a>
    </div>
    <p style="color:#999;font-size:12px;text-align:center;margin:0;">
      Для ускорения обработки — свяжитесь через Telegram
    </p>
  </div>

  <!-- Footer -->
  <div style="text-align:center;margin-top:32px;">
    <p style="color:#999;font-size:12px;margin:0;">
      <a href="https://api429.com" style="color:#6c63ff;text-decoration:none;">api429.com</a> — надёжный шлюз для Gemini API
    </p>
    <p style="color:#ccc;font-size:11px;margin:8px 0 0;">
      Это автоматическое подтверждение. Не отвечайте на это письмо.
    </p>
  </div>

</div>
</body></html>`;

    try {
        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
            body: JSON.stringify({
                from: 'api429.com <noreply@api429.com>',
                to: [payload.email],
                subject: `✅ Заявка принята — api429.com`,
                html,
            }),
        });
    } catch (err) {
        console.error('Client auto-reply error:', err);
    }
}

// ── Main Handler ─────────────────────────────────────────────────
export async function POST(request: Request) {
    try {
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

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

        if (!payload.name || !payload.email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Send all notifications in parallel (fire-and-forget)
        Promise.allSettled([
            sendTelegram(payload),
            sendAdminEmail(payload),
            sendClientAutoReply(payload),
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
