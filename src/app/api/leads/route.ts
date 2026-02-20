import { NextResponse } from 'next/server';

// Basic in-memory rate limiting map for the MVP
const ipMap = new Map<string, { count: number; timer?: NodeJS.Timeout }>();

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

        // In a real application, save to DB (Supabase/Firebase/CRM) 
        // Example: await pb.collection('leads').create(payload);

        // Simulated webhook / Bot Logic
        // await fetch(TELEGRAM_BOT_WEBHOOK, { ... })
        console.log('New Lead Submitted:', payload);

        return NextResponse.json({ success: true, message: 'Lead saved successfully' });
    } catch (error) {
        console.error('Error in /api/leads:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
