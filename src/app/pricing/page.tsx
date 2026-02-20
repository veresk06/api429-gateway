"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

export default function Pricing() {
    const [tokens, setTokens] = useState<number>(50); // in millions
    const googlePricePerM = 0.50; // Gemini Flash baseline
    const ourPricePerM = 0.15; // Our discounted price

    const estimatedGoogle = tokens * googlePricePerM;
    const estimatedUs = tokens * ourPricePerM;
    const savings = estimatedGoogle - estimatedUs;

    return (
        <>
            <Header />
            <main className="container py-16">
                <h1 className="text-5xl font-bold text-center mb-6">Тарифы и калькулятор</h1>
                <p className="text-xl text-secondary text-center max-w-2xl mx-auto mb-16">
                    Простые и понятные тарифы без скрытых платежей. Оплата за использованные токены (Pay-as-you-go).
                </p>

                {/* Pricing Cards */}
                <div className={styles.grid}>
                    <Card className={styles.pricingCard}>
                        <h3 className="text-2xl font-bold mb-2">Старт</h3>
                        <p className="text-secondary mb-6">Для тестирования и небольших проектов</p>
                        <div className="text-4xl font-bold mb-6">Pay-as-you-go</div>
                        <ul className={styles.features}>
                            <li>Скидка до 50% от оф. прайса</li>
                            <li>Базовая балансировка 429</li>
                            <li>Оплата криптой (USDT/TON)</li>
                            <li>Ограничение: до 10M токенов/мес</li>
                            <li>Поддержка в Telegram (до 24ч)</li>
                        </ul>
                        <div className="mt-auto pt-8">
                            <Link href="/#connect">
                                <Button variant="secondary" fullWidth>Создать аккаунт</Button>
                            </Link>
                        </div>
                    </Card>

                    <Card className={`${styles.pricingCard} ${styles.popular}`}>
                        <div className={styles.badge}>Популярный</div>
                        <h3 className="text-2xl font-bold mb-2">Про</h3>
                        <p className="text-secondary mb-6">Для растущих продуктов и стартапов</p>
                        <div className="text-4xl font-bold mb-6 text-primary">−70% <span className="text-lg text-secondary line-through">Google API</span></div>
                        <ul className={styles.features}>
                            <li>Максимальная скидка на токены</li>
                            <li>Premium балансировка и ретраи</li>
                            <li>Оплата картами РФ / Юрлица</li>
                            <li>Ограничения: без лимитов</li>
                            <li>Приоритетная поддержка (до 2ч)</li>
                            <li>Выделенный пул ключей</li>
                        </ul>
                        <div className="mt-auto pt-8">
                            <Link href="/#connect">
                                <Button variant="primary" fullWidth>Подключить Про</Button>
                            </Link>
                        </div>
                    </Card>

                    <Card className={styles.pricingCard}>
                        <h3 className="text-2xl font-bold mb-2">Бизнес</h3>
                        <p className="text-secondary mb-6">Для high-load систем</p>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <ul className={styles.features}>
                            <li>Индивидуальные RPM/RPD лимиты</li>
                            <li>Выделенные каналы и Endpoint</li>
                            <li>SLA 99.99%</li>
                            <li>Скидки за объем от 1B токенов</li>
                            <li>Закрывающие документы РФ</li>
                            <li>Персональный менеджер</li>
                        </ul>
                        <div className="mt-auto pt-8">
                            <Link href="/#connect">
                                <Button variant="outline" fullWidth>Связаться с нами</Button>
                            </Link>
                        </div>
                    </Card>
                </div>

                {/* Calculator */}
                <section className="mt-24 max-w-4xl mx-auto">
                    <Card className={styles.calculatorCard}>
                        <h2 className="text-3xl font-bold mb-8 text-center">Калькулятор экономии</h2>

                        <div className={styles.calcGrid}>
                            <div className={styles.sliderSection}>
                                <label className="flex justify-between mb-4">
                                    <span className="font-semibold text-lg">Объем токенов в месяц</span>
                                    <span className="text-primary font-bold text-lg">{tokens}M</span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="1000"
                                    value={tokens}
                                    onChange={(e) => setTokens(Number(e.target.value))}
                                    className={styles.slider}
                                />
                                <div className="flex justify-between text-sm text-secondary mt-2">
                                    <span>1M</span>
                                    <span>1B+</span>
                                </div>
                                <div className="mt-6 text-sm text-secondary">
                                    * Расчет приведен для модели Gemini 1.5 Flash. Для других моделей (Pro) пропорция экономии сохраняется.
                                </div>
                            </div>

                            <div className={styles.resultSection}>
                                <div className={styles.resultRow}>
                                    <span>Google напрямую:</span>
                                    <span className="text-xl line-through text-secondary">${estimatedGoogle.toFixed(2)}</span>
                                </div>
                                <div className={`${styles.resultRow} ${styles.highlight}`}>
                                    <span>Через GeminiGW:</span>
                                    <span className="text-3xl font-bold text-primary">${estimatedUs.toFixed(2)}</span>
                                </div>
                                <div className={styles.savingsBox}>
                                    Ваша экономия: <strong>${savings.toFixed(2)}/мес</strong>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>
            </main>
            <Footer />
        </>
    );
}
