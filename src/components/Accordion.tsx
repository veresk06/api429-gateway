"use client";

import React, { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionItem {
    id: string;
    question: string;
    answer: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div
                        key={item.id}
                        className={`${styles.item} ${isOpen ? styles.open : ''} glass-panel`}
                    >
                        <button
                            className={styles.header}
                            onClick={() => toggle(item.id)}
                            aria-expanded={isOpen}
                        >
                            <span className={styles.question}>{item.question}</span>
                            <span className={styles.icon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </button>
                        <div
                            className={styles.contentWrapper}
                            style={{ maxHeight: isOpen ? '500px' : '0px' }}
                        >
                            <div className={styles.content}>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
