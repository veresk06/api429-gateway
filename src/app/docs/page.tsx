import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CodeSnippet } from '@/components/CodeSnippet';
import Link from 'next/link';

export default function Docs() {
    const authExample = `import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "ваш_ключ_geminigw",
  baseURL: "https://api.geminigw.com/v1"
});`;

    return (
        <>
            <Header />
            <main className="container py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-gradient">Документация (MVP)</h1>

                <div className="glass-panel p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Base URL и Авторизация</h2>
                    <p className="text-secondary mb-4">
                        Мы полностью совместимы с официальным SDK <code className="bg-[rgba(255,255,255,0.1)] px-1 rounded text-primary">@google/genai</code>.
                        Просто укажите наш эндпоинт и выданный API ключ.
                    </p>
                    <CodeSnippet code={authExample} language="typescript" filename="Подключение" />
                </div>

                <div className="glass-panel p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Лимиты и ошибки (429)</h2>
                    <p className="text-secondary mb-4">
                        Наш балансировщик перехватывает ошибки от вышестоящих серверов и автоматически перенаправляет запросы или ставит их в очередь.
                        <br /><br />
                        Если вы получаете <code className="text-error">429 Too Many Requests</code> от нашего сервера:
                    </p>
                    <ul className="list-disc list-inside text-secondary flex flex-col gap-2 ml-4">
                        <li>Вы превысили лимиты вашего тарифа (для тарифа Старт).</li>
                        <li>Глобальный пул перегружен (очередь переполнена). В этом случае мы рекомендуем реализовать exponential backoff на вашей стороне.</li>
                    </ul>
                </div>

                <div className="glass-panel p-8">
                    <h2 className="text-2xl font-bold mb-4">Поддержка</h2>
                    <p className="text-secondary">
                        Если у вас возникли вопросы при интеграции или вы столкнулись с нестандартными ошибками, пожалуйста, свяжитесь с нами:
                    </p>
                    <div className="mt-4">
                        <Link href="https://t.me/geminigw_support" className="text-brand-primary hover:underline font-bold">@geminigw_support в Telegram</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
