import { SeoPageTemplate } from '@/components/SeoPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Дешевый доступ к Gemini API | Скидки до 70% | api429.com',
    description: 'Как экономить на токенах Gemini API. Оптовые цены, pay-as-you-go биллинг и никакого vendor lock-in.',
};

export default function GeminiApiCheapPage() {
    return (
        <SeoPageTemplate
            h1="Дешевый доступ к Gemini API"
            subtitle="Экономьте до 70% на инфраструктуре LLM"
            problem="Использование передовых моделей (таких как Gemini-3-Pro) для больших объемов данных или миллионов запросов обходится дорого. Официальные прайсы съедают маржу продукта, вынуждая переходить на более слабые модели или ограничивать функционал для пользователей."
            solution="Мы закупаем серверные мощности и токены в гигантских объемах по специальнымEnterprise контрактам (Enterprise Commits). За счет этого мы можем реселлить те же самые <strong>оригинальные ответы Gemini API</strong>, но по цене, которая значительно ниже розничного прайса."
            benefits={[
                { title: 'До −70% от розницы', desc: 'Снижайте косты на токены без потери качества ответов.' },
                { title: 'Без предоплат', desc: 'Чистый Pay-as-you-go. Платите только за то, что реально потратили.' },
                { title: 'Никаких коммитов', desc: 'Не нужно подписывать контракты на десятки тысяч долларов для скидки.' }
            ]}
            ctaText="Посмотреть тарифы"
        />
    );
}
