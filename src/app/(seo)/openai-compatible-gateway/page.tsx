import { SeoPageTemplate } from '@/components/SeoPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'OpenAI-Compatible Gemini Interface | Drop-in API Gateway | GeminiGW',
    description: 'Use your existing OpenAI SDK to access Google Gemini models seamlessly. No codebase rewrite needed. Built-in load balancing.',
};

export default function OpenAiGatewayPage() {
    return (
        <SeoPageTemplate
            h1="OpenAI-Compatible Gemini Gateway"
            subtitle="Zero-rewrite API adapter. Connect to Gemini using the OpenAI library"
            problem="Migrating from ChatGPT to Gemini usually requires rewriting your application's logic, learning a new SDK (`@google/genai`), and recreating your prompt building mechanisms. This forces immense technical debt on the team."
            solution="GeminiGW acts as a transparent translation layer. We provide an endpoint that accepts standard <strong>OpenAI API requests format</strong> and translates them on-the-fly into Gemini requests. Just change your `baseURL` and API Key."
            benefits={[
                { title: 'No Code Rewrite', desc: 'Keep using `openai.chat.completions.create`. We handle the rest.' },
                { title: 'Global Load Balancing', desc: 'Get automated protection against 429 Rate Limits entirely out of the box.' },
                { title: 'Better Pricing', desc: 'Save immensely on token volume costs compared to native OpenAI models.' }
            ]}
            ctaText="Start using Gemini via OpenAI SDK"
        />
    );
}
