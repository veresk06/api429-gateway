import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Accordion } from '@/components/Accordion';
import { faqItemsRu } from '@/lib/faq-data';

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="container py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-12 text-center text-gradient">Часто задаваемые вопросы</h1>
                <div className="glass-panel p-8">
                    <Accordion items={faqItemsRu} />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-secondary mb-4">Не нашли ответ на свой вопрос?</p>
                    <a href="https://t.me/api429_support" className="text-primary hover:underline font-bold">Свяжитесь с поддержкой в Telegram</a>
                </div>
            </main>
            <Footer />
        </>
    );
}
