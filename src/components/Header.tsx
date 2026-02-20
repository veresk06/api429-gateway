import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from './Button';

export function Header() {
    return (
        <header className={`${styles.header} glass-panel`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className="text-gradient font-bold text-2xl">Gemini<span className="text-primary">GW</span></span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/#benefits" className={styles.link}>Преимущества</Link>
                    <Link href="/pricing" className={styles.link}>Тарифы</Link>
                    <Link href="/docs" className={styles.link}>Документация</Link>
                    <Link href="/#faq" className={styles.link}>FAQ</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="/#connect">
                        <Button variant="primary" size="sm">Подключиться</Button>
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
