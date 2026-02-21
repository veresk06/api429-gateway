import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Accordion } from '@/components/Accordion';
import { faqItemsEn } from '@/lib/faq-data';

export default function FAQPageEn() {
    return (
        <>
            <Header lang="en" />
            <main className="container py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-12 text-center text-gradient">Frequently Asked Questions</h1>
                <div className="glass-panel p-8">
                    <Accordion items={faqItemsEn} />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-secondary mb-4">Can't find the answer you're looking for?</p>
                    <a href="https://t.me/api429_support" className="text-primary hover:underline font-bold">Contact support on Telegram</a>
                </div>
            </main>
            <Footer lang="en" />
        </>
    );
}
