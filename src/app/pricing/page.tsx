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
    const googlePricePerM = 0.075; // Gemini Flash baseline
    const ourPricePerM = 0.035; // Our discounted price

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
                                    * Расчет приведен для модели Gemini 3 Flash. Для других моделей (Pro) пропорция экономии сохраняется.
                                </div>
                            </div>

                            <div className={styles.resultSection}>
                                <div className={styles.resultRow}>
                                    <span>Google напрямую:</span>
                                    <span className="text-xl line-through text-secondary">${estimatedGoogle.toFixed(2)}</span>
                                </div>
                                <div className={`${styles.resultRow} ${styles.highlight}`}>
                                    <span>Через api429.com:</span>
                                    <span className="text-3xl font-bold text-primary">${estimatedUs.toFixed(2)}</span>
                                </div>
                                <div className={styles.savingsBox}>
                                    Ваша экономия: <strong>${savings.toFixed(2)}/мес</strong>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Detailed Pricing Tables */}
                <section className={styles.tableSection}>
                    <h2 className="text-3xl font-bold mb-8 text-center">Подробный прайс на модели API</h2>

                    {/* Video Generation Table */}
                    <h3 className="text-xl font-bold mb-4">Генерация Видео (Veo 3.1)</h3>
                    <p className="text-secondary mb-4 text-sm">Тарификация посекундная. Официальный стандарт рынка.</p>
                    <div className={styles.tableContainer}>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Модель (Алиас)</th>
                                    <th>Описание</th>
                                    <th>Цена Google (за 1 сек.)</th>
                                    <th>Наша цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Veo 3.1 Fast</strong>
                                        <span className={styles.tableAlias}>veo-3.1-fast</span>
                                    </td>
                                    <td>Быстрая генерация видео (без аудио)</td>
                                    <td className={styles.tablePriceOld}>$0.10</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.03</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Veo 3.1 Fast + Audio</strong>
                                        <span className={styles.tableAlias}>veo-3.1-fast-audio</span>
                                    </td>
                                    <td>Быстрая генерация видео (с аудио)</td>
                                    <td className={styles.tablePriceOld}>$0.15</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.045</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Veo 3.1 Standard</strong>
                                        <span className={styles.tableAlias}>veo-3.1-standard</span>
                                    </td>
                                    <td>Максимальное качество (без аудио)</td>
                                    <td className={styles.tablePriceOld}>$0.40</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.12</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Veo 3.1 Standard + Audio</strong>
                                        <span className={styles.tableAlias}>veo-3.1-standard-audio</span>
                                    </td>
                                    <td>Макс. качество + звук и эффекты</td>
                                    <td className={styles.tablePriceOld}>$0.75</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.225</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Image Generation Table */}
                    <h3 className="text-xl font-bold mb-4 mt-12">Генерация Изображений (Nano Banana)</h3>
                    <p className="text-secondary mb-4 text-sm">Единая фиксированная цена на любое разрешение. Выгоднее Google до 79%.</p>
                    <div className={styles.tableContainer}>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Модель (Алиас)</th>
                                    <th>Описание</th>
                                    <th>Цена Google (за 1 шт.)</th>
                                    <th>Наша цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Nano Banana</strong>
                                        <span className={styles.tableAlias}>gemini-2.5-flash-image</span>
                                    </td>
                                    <td>Быстрая генерация (аналог Imagen 3 Fast)</td>
                                    <td className={styles.tablePriceOld}>$0.030</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.009</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Nano Banana Pro (1K/2K)</strong>
                                        <span className={styles.tableAlias}>gemini-3-pro-image-preview</span>
                                    </td>
                                    <td>Высокое качество, сложные сцены, 1K-2K</td>
                                    <td className={styles.tablePriceOld}>$0.134</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.04</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Nano Banana Pro (4K)</strong>
                                        <span className={styles.tableAlias}>gemini-3-pro-image-preview-4k</span>
                                    </td>
                                    <td>Ультра-высокое качество, 4K разрешение</td>
                                    <td className={styles.tablePriceOld}>$0.240</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.050</span>
                                        <span className={styles.tableBadge}>Скидка 79%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* LLM Table */}
                    <h3 className="text-xl font-bold mb-4 mt-12">Мультимодальные LLM (Текст, Чат, Vision)</h3>
                    <p className="text-secondary mb-4 text-sm">Цена за 1 миллион (1М) токенов.</p>
                    <div className={styles.tableContainer}>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Модель (Алиас)</th>
                                    <th>Тип токенов</th>
                                    <th>Цена Google (за 1М)</th>
                                    <th>Наша цена (за 1М)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Gemini 3.1 Pro Preview</strong>
                                        <span className={styles.tableAlias}>gemini-3.1-pro-preview</span>
                                    </td>
                                    <td>Входящие / Исходящие</td>
                                    <td className={styles.tablePriceOld}>$2.00 / $12.00</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.60 / $3.60</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Gemini 3.0 Flash</strong>
                                        <span className={styles.tableAlias}>gemini-3.0-flash</span>
                                    </td>
                                    <td>Входящие / Исходящие</td>
                                    <td className={styles.tablePriceOld}>$0.50 / $3.00</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.15 / $0.90</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Gemini 2.5 Pro</strong>
                                        <span className={styles.tableAlias}>gemini-2.5-pro</span>
                                    </td>
                                    <td>Входящие / Исходящие</td>
                                    <td className={styles.tablePriceOld}>$1.25 / $10.00</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.37 / $3.00</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Gemini 2.5 Flash</strong>
                                        <span className={styles.tableAlias}>gemini-2.5-flash</span>
                                    </td>
                                    <td>Входящие / Исходящие</td>
                                    <td className={styles.tablePriceOld}>$0.30 / $2.50</td>
                                    <td>
                                        <span className={styles.tablePriceNew}>$0.09 / $0.75</span>
                                        <span className={styles.tableBadge}>Скидка 70%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}
