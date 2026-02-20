"use client";

import React, { useState } from 'react';
import styles from './CodeSnippet.module.css';

interface CodeSnippetProps {
    code: string;
    language?: string;
    filename?: string;
}

export function CodeSnippet({ code, language = 'python', filename }: CodeSnippetProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    return (
        <div className={styles.container}>
            {(filename || language) && (
                <div className={styles.header}>
                    <div className={styles.filename}>{filename || language}</div>
                    <button
                        onClick={handleCopy}
                        className={styles.copyBtn}
                        title="Copy code"
                    >
                        {copied ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        )}
                        <span className={styles.copyText}>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                </div>
            )}
            <div className={styles.codeWrapper}>
                <pre className={styles.pre}>
                    <code className={`${styles.code} language-${language}`}>
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
}
