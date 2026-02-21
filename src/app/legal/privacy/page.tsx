import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Privacy() {
    return (
        <>
            <Header />
            <main className="container py-16 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности (MVP)</h1>
                <div className="text-secondary leading-relaxed flex flex-col gap-6">
                    <p>
                        В api429.com мы серьезно относимся к конфиденциальности ваших данных. Наша цель — обеспечить максимальную безопасность и прозрачность.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-4">1. Сбор данных (Zero Data Retention)</h2>
                    <p>
                        Мы <strong>не сохраняем</strong> тексты ваших запросов (промптов) и ответов API на наших серверах. Все данные транзитом передаются в Google Gemini.
                        <br />
                        Мы сохраняем только <strong>метаданные</strong> в целях биллинга и мониторинга качества:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Время запроса</li>
                        <li>Количество затраченных токенов</li>
                        <li>HTTP статус ответа сервера</li>
                        <li>Идентификатор вашего ключа</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-primary mt-4">2. Персональные данные</h2>
                    <p>
                        При регистрации мы собираем минимальный набор данных: email и/или Telegram для связи и рассылки уведомлений о балансе. Мы не передаем эти данные третьим лицам.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-4">3. Сторонние интеграции</h2>
                    <p>
                        Так как мы являемся прокси для Google Gemini, просим вас ознакомиться с политикой конфиденциальности Google в отношении обработки непосредственно текстовых/медиа запросов.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
