import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from './Button';

export function Header({ lang = 'ru' }: { lang?: 'ru' | 'en' }) {
    const isEn = lang === 'en';
    const prefix = isEn ? '/en' : '';

    return (
        <header className={`${styles.header} glass-panel`}>
            <div className={`container ${styles.container}`}>
                <Link href={prefix || '/'} className={styles.logo}>
                    <span className="text-gradient font-bold text-2xl">Gemini<span className="text-primary">GW</span></span>
                </Link>

                <nav className={styles.nav}>
                    <Link href={`${prefix}#benefits`} className={styles.link}>{isEn ? 'Features' : 'Преимущества'}</Link>
                    <Link href="/pricing" className={styles.link}>{isEn ? 'Pricing' : 'Тарифы'}</Link>
                    <Link href="/docs" className={styles.link}>{isEn ? 'Docs' : 'Документация'}</Link>
                    <Link href={`${prefix}#faq`} className={styles.link}>FAQ</Link>
                </nav>

                <div className={styles.actions}>
                    <div className="mr-8 flex gap-2 text-sm font-semibold">
                        <Link href="/" className={!isEn ? "text-primary" : "text-secondary"}>RU</Link>
                        <span className="text-secondary">/</span>
                        <Link href="/en" className={isEn ? "text-primary" : "text-secondary"}>EN</Link>
                    </div>
                    <Link href={`${prefix}#connect`}>
                        <Button variant="primary" size="sm">{isEn ? 'Get Access' : 'Подключиться'}</Button>
                    </Link>
                </div>

                {/* Mobile menu toggle would go here */}
                <button className={styles.mobileMenuBtn} aria-label="Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
}
