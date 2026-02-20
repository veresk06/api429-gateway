import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Terms() {
    return (
        <>
            <Header />
            <main className="container py-16 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Условия сервиса (Terms of Service)</h1>
                <div className="text-secondary leading-relaxed flex flex-col gap-6">
                    <p>
                        Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-4">1. Общие положения</h2>
                    <p>
                        Настоящее пользовательское соглашение регулирует использование сервиса GeminiGW. Искользуя сервис, вы соглашаетесь с данными условиями. GeminiGW является интерфейсом для доступа к API Google Gemini.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-4">2. Использование сервиса</h2>
                    <p>
                        Вы обязуетесь использовать API в соответствии с официальными правилами компании Google. Запрещена генерация незаконного контента, спама или использование сервиса в мошеннических целях. Мы оставляем за собой право заблокировать ваш ключ без возврата средств при нарушении данных правил.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-4">3. Оплата и возвраты</h2>
                    <p>
                        Оплата производится за фактически использованные токены (Pay-as-you-go). Средства списываются с внутреннего баланса. При отрицательном балансе доступ к API приостанавливается. Возврат неиспользованных средств производится по письменному запросу в течение 30 дней.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-4">4. Отказ от ответственности</h2>
                    <p>
                        Сервис предоставляется "как есть". Мы гарантируем аптайм шлюза согласно SLA вашего тарифа, но не несем ответственности за доступность или качество ответов серверов Google Gemini.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
