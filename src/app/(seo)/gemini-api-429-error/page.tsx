import { SeoPageTemplate } from '@/components/SeoPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Как убрать ошибку 429 Too Many Requests в Gemini API | GeminiGW',
    description: 'Решение проблемы 429 Too Many Requests при работе с Google Gemini API. Использование балансировщика, умных очередей и распределения лимитов ключей.',
};

export default function Gemini429ErrorPage() {
    return (
        <SeoPageTemplate
            h1="Как исправить ошибку 429 в Gemini API"
            subtitle="Надежное решение проблемы 'Too Many Requests' для продакшена"
            problem="Разработчики часто сталкиваются со статусом <strong>429 (Too Many Requests)</strong> или <strong>Quota Exceeded</strong>. Официальный API Gemini имеет жесткие лимиты на количество запросов в минуту (RPM) и в день (RPD) для каждого ключа. Когда ваше приложение или LLM-парсер делает всплеск запросов, Google просто сбрасывает часть из них, и ваш продукт перестает работать."
            solution="Наш прокси-шлюз использует <strong>пул API-ключей и умную маршрутизацию</strong>. Если один канал достигает лимита, мы прозрачно направляем запрос на следующий свободный. Во время пиковых всплесков мы используем микро-очереди, которые сглаживают нагрузку (rate smoothing). Вы получаете один стабильный URL и забываете о падении сервиса."
            benefits={[
                { title: 'Стабильный RPM', desc: 'Увеличьте пропускную способность за счет балансировки.' },
                { title: 'Zero Code Changes', desc: 'Работает с официальным SDK через изменение одной строчки base_url.' },
                { title: 'Авто-ретраи', desc: 'Если сервер Google кратковременно недоступен, мы сами повторим запрос.' }
            ]}
            ctaText="Получить стабильный доступ"
        />
    );
}
