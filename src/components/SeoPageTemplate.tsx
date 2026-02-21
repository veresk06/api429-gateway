import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import Link from 'next/link';

interface SeoPageProps {
    h1: string;
    subtitle: string;
    problem: string;
    solution: string;
    benefits: { title: string; desc: string }[];
    ctaText: string;
}

export function SeoPageTemplate({ h1, subtitle, problem, solution, benefits, ctaText }: SeoPageProps) {
    return (
        <>
            <Header />
            <main className="container py-16">
                <article className="max-w-4xl mx-auto">
                    {/* Header Area */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">{h1}</h1>
                        <p className="text-xl text-secondary">{subtitle}</p>
                    </div>

                    {/* Content Area */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
                        <div className="glass-panel p-6 md:p-8 border-l-4 border-l-error">
                            <h2 className="text-2xl font-bold text-error mb-4">Проблема</h2>
                            <div className="text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: problem }} />
                        </div>

                        <div className="glass-panel p-6 md:p-8 border-l-4 border-l-success">
                            <h2 className="text-2xl font-bold text-success mb-4">Решение от api429.com</h2>
                            <div className="text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: solution }} />
                        </div>
                    </div>

                    {/* Benefits */}
                    <h2 className="text-3xl font-bold text-center mb-12">Что вы получаете?</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {benefits.map((b, i) => (
                            <Card key={i} hoverable>
                                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                                <p className="text-secondary text-sm">{b.desc}</p>
                            </Card>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-[rgba(99,102,241,0.1)] p-8 md:p-12 rounded-2xl border border-[rgba(99,102,241,0.2)]">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Готовы интегрировать API?</h2>
                        <Link href="/#connect">
                            <Button variant="primary" size="lg" className="w-full md:w-auto">{ctaText}</Button>
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
