import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
    const classes = [
        styles.card,
        'glass-panel',
        hoverable ? styles.hoverable : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {children}
        </div>
    );
}
