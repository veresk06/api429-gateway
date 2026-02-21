import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer({ lang = 'ru' }: { lang?: 'ru' | 'en' }) {
    const isEn = lang === 'en';

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <Link href={isEn ? '/en' : '/'} className={styles.logo}>
                        <span className="text-gradient font-bold text-xl">api429.com</span>
                    </Link>
                    <p className={styles.desc}>
                        {isEn ? 'Reliable payment and technical layer for Google Gemini API.' : 'Надежный платежный и технический слой для работы с Gemini API.'}
                    </p>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>{isEn ? 'Product' : 'Продукт'}</h4>
                        <Link href="/pricing" className={styles.link}>{isEn ? 'Pricing' : 'Тарифы'}</Link>
                        <Link href="/docs" className={styles.link}>{isEn ? 'API Documentation' : 'API Документация'}</Link>
                        <Link href={isEn ? "/en/faq" : "/faq"} className={styles.link}>FAQ</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>{isEn ? 'Legal' : 'Правовая информация'}</h4>
                        <Link href="/legal/terms" className={styles.link}>{isEn ? 'Terms of Service' : 'Условия сервиса'}</Link>
                        <Link href="/legal/privacy" className={styles.link}>{isEn ? 'Privacy Policy' : 'Политика конфиденциальности'}</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>{isEn ? 'Contact' : 'Связь'}</h4>
                        <a href="mailto:support@api429.example.com" className={styles.link}>support@api429.com</a>
                        <a href="https://t.me/api429_support" target="_blank" rel="noopener noreferrer" className={styles.link}>{isEn ? 'Telegram Support' : 'Telegram Поддержка'}</a>
                    </div>
                </div>
            </div>
            <div className={`container ${styles.bottom}`}>
                <p>© {new Date().getFullYear()} api429.com. All rights reserved.</p>
                <p className={styles.disclaimer}>Not affiliated with Google or Gemini.</p>
            </div>
        </footer>
    );
}
