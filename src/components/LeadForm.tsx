"use client";

import React, { useState } from 'react';
import styles from './LeadForm.module.css';
import { Button } from './Button';

export function LeadForm({ lang = 'ru' }: { lang?: 'ru' | 'en' }) {
    const isEn = lang === 'en';
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telegram: '',
        role: 'dev',
        volume: '10-100M',
        payment: 'USDT',
        comment: '',
        consent: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.consent) return;

        console.log('[Analytics] Event: lead_submit_attempt');
        setStatus('loading');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Server returned ' + response.status);

            console.log('[Analytics] Event: lead_submitted_success');
            setStatus('success');
        } catch (err) {
            console.error(err);
            console.log('[Analytics] Event: lead_submitted_error');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={`${styles.formCard} ${styles.success} glass-panel`}>
                <div className={styles.successIcon}>✓</div>
                <h3 className="text-2xl font-bold mb-4">{isEn ? 'Request Submitted!' : 'Заявка принята!'}</h3>
                <p className="text-secondary mb-8">
                    {isEn ? 'We will contact you within 24 hours via Telegram or email to issue a test key.' : 'Мы свяжемся с вами в течение 24 часов в Telegram или по email для выдачи тестового ключа.'}
                </p>
                <Button variant="secondary" onClick={() => setStatus('idle')}>{isEn ? 'Submit Another' : 'Отправить еще'}</Button>
            </div>
        );
    }

    return (
        <div className={`${styles.formCard} glass-panel`} id="connect">
            <h2 className="text-3xl font-bold mb-2 text-center">{isEn ? 'Request Access' : 'Оставить заявку'}</h2>
            <p className="text-secondary text-center mb-8">
                {isEn ? 'Get test access, an API key, and individual conditions' : 'Получите тестовый доступ, API ключ и индивидуальные условия'}
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">{isEn ? 'Name / Company *' : 'Имя / Компания *'}</label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={isEn ? "John, Tech Corp" : "Иван, Tech Corp"}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="hello@example.com"
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="telegram">{isEn ? 'Telegram (optional, but faster)' : 'Telegram (опционально, но быстрее)'}</label>
                    <input
                        type="text"
                        id="telegram"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleChange}
                        placeholder="@username"
                    />
                </div>

                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="role">{isEn ? 'Role' : 'Роль'}</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange}>
                            <option value="dev">{isEn ? 'Developer' : 'Разработчик'}</option>
                            <option value="pm">Product Manager</option>
                            <option value="founder">Founder / C-level</option>
                            <option value="agency">{isEn ? 'Agency' : 'Агентство'}</option>
                            <option value="other">{isEn ? 'Other' : 'Другое'}</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="volume">{isEn ? 'Monthly Volume (Tokens)' : 'Объем в месяц (Токенов)'}</label>
                        <select id="volume" name="volume" value={formData.volume} onChange={handleChange}>
                            <option value="<10M">{isEn ? 'Under 10M' : 'До 10M'}</option>
                            <option value="10-100M">10M - 100M</option>
                            <option value="100M-1B">100M - 1B</option>
                            <option value=">1B">{isEn ? 'Over 1B' : 'Более 1B'}</option>
                        </select>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="payment">{isEn ? 'Preferred Payment Method' : 'Удобный способ оплаты'}</label>
                    <select id="payment" name="payment" value={formData.payment} onChange={handleChange}>
                        <option value="RUB">{isEn ? 'Invoice / Card' : 'Карта РФ / Счет'}</option>
                        <option value="USDT">Crypto (USDT TRC20/ERC20)</option>
                        <option value="TON">TON</option>
                        <option value="other">{isEn ? 'Other' : 'Другое'}</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="comment">{isEn ? 'Comments (optional)' : 'Комментарий (опционально)'}</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows={3}
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder={isEn ? "Special requirements, current pain points..." : "Особые требования, текущие боли..."}
                    />
                </div>

                <div className={styles.checkboxGroup}>
                    <input
                        required
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                    />
                    <label htmlFor="consent" className="text-sm text-secondary">
                        {isEn ? 'I agree to the processing of personal data according to the ' : 'Я согласен на обработку персональных данных согласно '}
                        <a href="/legal/privacy" className="text-primary hover:underline">{isEn ? 'Privacy Policy' : 'Политике конфиденциальности'}</a>
                    </label>
                </div>

                {status === 'error' && (
                    <div className={styles.error}>
                        {isEn ? 'An error occurred during submission. Please try again later or contact us.' : 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже или напишите нам.'}
                    </div>
                )}

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === 'loading' || !formData.consent}
                >
                    {status === 'loading' ? (isEn ? 'Submitting...' : 'Отправка...') : (isEn ? 'Request Access' : 'Получить доступ')}
                </Button>
            </form>
        </div>
    );
}
