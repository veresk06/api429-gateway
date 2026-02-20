"use client";

import React, { useState } from 'react';
import styles from './LeadForm.module.css';
import { Button } from './Button';

export function LeadForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telegram: '',
        role: 'dev',
        volume: '10-100M',
        payment: 'RUB',
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
                <h3 className="text-2xl font-bold mb-4">Заявка принята!</h3>
                <p className="text-secondary mb-8">
                    Мы свяжемся с вами в течение 24 часов в Telegram или по email для выдачи тестового ключа.
                </p>
                <Button variant="secondary" onClick={() => setStatus('idle')}>Отправить еще</Button>
            </div>
        );
    }

    return (
        <div className={`${styles.formCard} glass-panel`} id="connect">
            <h2 className="text-3xl font-bold mb-2 text-center">Оставить заявку</h2>
            <p className="text-secondary text-center mb-8">
                Получите тестовый доступ, API ключ и индивидуальные условия
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Имя / Компания *</label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Иван, Tech Corp"
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
                            placeholder="ivan@example.com"
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="telegram">Telegram (опционально, но быстрее)</label>
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
                        <label htmlFor="role">Роль</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange}>
                            <option value="dev">Разработчик</option>
                            <option value="pm">Product Manager</option>
                            <option value="founder">Founder / C-level</option>
                            <option value="agency">Агентство</option>
                            <option value="other">Другое</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="volume">Объем в месяц (Токенов)</label>
                        <select id="volume" name="volume" value={formData.volume} onChange={handleChange}>
                            <option value="<10M">До 10M</option>
                            <option value="10-100M">10M - 100M</option>
                            <option value="100M-1B">100M - 1B</option>
                            <option value=">1B">Более 1B</option>
                        </select>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="payment">Удобный способ оплаты</label>
                    <select id="payment" name="payment" value={formData.payment} onChange={handleChange}>
                        <option value="RUB">Карта РФ / Счет</option>
                        <option value="USDT">Крипта (USDT TRC20/ERC20)</option>
                        <option value="TON">TON</option>
                        <option value="other">Другое</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="comment">Комментарий (опционально)</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows={3}
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Особые требования, текущие боли..."
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
                        Я согласен на обработку персональных данных согласно <a href="/legal/privacy" className="text-primary hover:underline">Политике конфиденциальности</a>
                    </label>
                </div>

                {status === 'error' && (
                    <div className={styles.error}>
                        Произошла ошибка при отправке. Пожалуйста, попробуйте позже или напишите нам.
                    </div>
                )}

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === 'loading' || !formData.consent}
                >
                    {status === 'loading' ? 'Отправка...' : 'Получить доступ'}
                </Button>
            </form>
        </div>
    );
}
