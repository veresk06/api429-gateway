import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <span className="text-gradient font-bold text-xl">GeminiGW</span>
                    </Link>
                    <p className={styles.desc}>
                        Надежный платежный и технический слой для работы с Gemini API.
                    </p>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Продукт</h4>
                        <Link href="/pricing" className={styles.link}>Тарифы</Link>
                        <Link href="/docs" className={styles.link}>API Документация</Link>
                        <Link href="/status" className={styles.link}>Статус сервиса</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Правовая информация</h4>
                        <Link href="/legal/terms" className={styles.link}>Условия сервиса</Link>
                        <Link href="/legal/privacy" className={styles.link}>Политика конфиденциальности</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Связь</h4>
                        <a href="mailto:support@geminigw.example.com" className={styles.link}>support@geminigw.com</a>
                        <a href="https://t.me/geminigw_support" target="_blank" rel="noopener noreferrer" className={styles.link}>Telegram Поддержка</a>
                    </div>
                </div>
            </div>
            <div className={`container ${styles.bottom}`}>
                <p>© {new Date().getFullYear()} GeminiGW. All rights reserved.</p>
                <p className={styles.disclaimer}>Not affiliated with Google or Gemini.</p>
            </div>
        </footer>
    );
}
