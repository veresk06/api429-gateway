import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Accordion } from '@/components/Accordion';
import { CodeSnippet } from '@/components/CodeSnippet';
import { LeadForm } from '@/components/LeadForm';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Gemini API Gateway | Stable Access & Load Balancing',
    description: 'Gemini API access with up to 70% lower cost, global payments, and a load-balancing gateway designed to reduce 429 rate-limit errors and keep throughput stable.',
    alternates: {
        canonical: '/en',
    },
};

const codeExample = `import { GoogleGenAI } from "@google/genai";

// 1. Use our endpoint instead of the official one
// 2. Use your assigned GeminiGW API key

const ai = new GoogleGenAI({
  apiKey: "gw_xxxxxxxxxxxx",
  baseURL: "https://api.geminigw.com/v1" 
});

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "Explain API load balancing",
});

console.log(response.text());`;

const faqItemsEN = [
    {
        id: '1',
        question: 'How do you prevent 429 errors?',
        answer: 'We use smart load balancing across a vast pool of keys and instances. If one channel hits a rate limit, your request is transparently routed to another. We also utilize request queuing to smooth out traffic spikes.'
    },
    {
        id: '2',
        question: 'What models are available?',
        answer: 'We support all current Gemini models, including gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, and gemini-1.5-pro. Feature availability is synchronized with the official Google API.'
    },
    {
        id: '3',
        question: 'Is my data secure?',
        answer: 'We act purely as a proxy layer. We do not store your prompts or the model responses (zero data retention policy). Only request metadata (token usage, status code, latency) is logged for billing purposes.'
    }
];

export default function HomeEN() {
    return (
        <>
            <Header lang="en" />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className={styles.heroBadge}>
                            <span className={styles.badgePulse}></span>
                            Gemini API Access as a Service
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center animate-fade-in">
                            <span className="text-gradient">Gemini API</span> without<br />
                            limits or overpaying
                        </h1>
                        <p className="text-xl text-secondary text-center max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
                            Access the Gemini API with up to 70% savings, global payment options, and a load-balancing gateway that reduces 429 errors and maintains stable RPM.
                        </p>
                        <div className={`${styles.heroActions} animate-fade-in delay-200`}>
                            <Link href="/en#connect">
                                <Button variant="primary" size="lg">Get Access</Button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.glowBg}></div>
                </section>

                {/* Trust Bar */}
                <section className={styles.trustBar}>
                    <div className="container flex-col items-center">
                        <p className="text-sm text-secondary uppercase tracking-widest mb-6 font-semibold">Trusted by product teams and startups worldwide</p>
                        <div className={styles.metrics}>
                            <div className={styles.metric}>
                                <div className="text-3xl font-bold text-primary">99.9%</div>
                                <div className="text-sm text-secondary">Gateway Uptime</div>
                            </div>
                            <div className={styles.metric}>
                                <div className="text-3xl font-bold text-primary">{'< 50ms'}</div>
                                <div className="text-sm text-secondary">Overhead Latency</div>
                            </div>
                            <div className={styles.metric}>
                                <div className="text-3xl font-bold text-primary">−70%</div>
                                <div className="text-sm text-secondary">Token Savings</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="py-24">
                    <div className="container">
                        <h2 className="text-4xl font-bold text-center mb-16">Why choose our Gateway</h2>
                        <div className={styles.benefitsGrid}>
                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Cheaper than official</h3>
                                <p className="text-secondary text-sm">Bulk purchasing and smart distribution allow us to offer prices up to 70% lower than Google's retail pricing.</p>
                            </Card>

                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Smart Load Balancing</h3>
                                <p className="text-secondary text-sm">Forget about 429 Too Many Requests errors. We distribute the load and maintain a stable stream of requests.</p>
                            </Card>

                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">OpenAI Compatible</h3>
                                <p className="text-secondary text-sm">Use your existing OpenAI SDK. Zero code rewrite required—just update the Base URL and API Key.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Code snippet */}
                <section className="py-24" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="container">
                        <div className={styles.splitSection}>
                            <div className={styles.splitContent}>
                                <h2 className="text-4xl font-bold mb-6">Seamless Integration</h2>
                                <p className="text-lg text-secondary mb-8">
                                    We support the official SDK out of the box. You only need to change two lines of code: configure our baseURL and replace your key.
                                </p>
                            </div>
                            <div className={styles.splitVisual}>
                                <div className={styles.codeWrapper}>
                                    <CodeSnippet code={codeExample} language="typescript" filename="gemini-client.ts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lead Form Section */}
                <section className="py-24">
                    <div className="container">
                        <LeadForm lang="en" />
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-24">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <Accordion items={faqItemsEN} />
                    </div>
                </section>

            </main>
            <Footer lang="en" />
        </>
    );
}
