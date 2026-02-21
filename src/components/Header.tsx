"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from './Button';
import { ThemeToggle } from './ThemeToggle';

export function Header({ lang = 'ru' }: { lang?: 'ru' | 'en' }) {
    const isEn = lang === 'en';
    const prefix = isEn ? '/en' : '';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`${styles.header} glass-panel`}>
            <div className={`container ${styles.container}`}>
                <Link href={prefix || '/'} className={styles.logo} onClick={() => setIsMenuOpen(false)}>
                    <span className="text-gradient font-bold text-2xl">api429.com</span>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href={`${prefix}#benefits`} className={styles.link} onClick={() => setIsMenuOpen(false)}>{isEn ? 'Features' : 'Преимущества'}</Link>
                    <Link href="/pricing" className={styles.link} onClick={() => setIsMenuOpen(false)}>{isEn ? 'Pricing' : 'Тарифы'}</Link>
                    <Link href="/docs" className={styles.link} onClick={() => setIsMenuOpen(false)}>{isEn ? 'Docs' : 'Документация'}</Link>
                    <Link href={`${prefix}/faq`} className={styles.link} onClick={() => setIsMenuOpen(false)}>FAQ</Link>

                    {/* Mobile-only actions inside nav */}
                    <div className={styles.mobileOnlyActions}>
                        <div className={styles.langToggle}>
                            <Link href="/" className={!isEn ? "text-primary" : "text-secondary"}>RU</Link>
                            <span className="text-secondary">/</span>
                            <Link href="/en" className={isEn ? "text-primary" : "text-secondary"}>EN</Link>
                        </div>
                        <div className="flex justify-between w-full items-center mt-4 pt-4 border-t border-[var(--border-color)]">
                            <span className="text-sm font-medium">{isEn ? 'Theme' : 'Тема'}</span>
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>

                <div className={styles.actions}>
                    <div className={styles.langToggle}>
                        <Link href="/" className={!isEn ? "text-primary" : "text-secondary"}>RU</Link>
                        <span className="text-secondary">/</span>
                        <Link href="/en" className={isEn ? "text-primary" : "text-secondary"}>EN</Link>
                    </div>
                    <ThemeToggle />
                    <Link href={`${prefix}#connect`}>
                        <Button variant="primary" size="sm">{isEn ? 'Get Access' : 'Подключиться'}</Button>
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <Link href={`${prefix}#connect`}>
                        <Button variant="primary" size="sm" className={styles.mobileCta}>{isEn ? 'Connect' : 'Доступ'}</Button>
                    </Link>
                    <button
                        className={styles.mobileMenuBtn}
                        aria-label="Menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
