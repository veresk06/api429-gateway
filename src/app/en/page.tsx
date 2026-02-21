import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Accordion } from '@/components/Accordion';
import { CodeSnippet } from '@/components/CodeSnippet';
import { LeadForm } from '@/components/LeadForm';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../page.module.css';
import { faqItemsEn } from '@/lib/faq-data';

export const metadata: Metadata = {
    title: 'Gemini API Gateway | Stable Access & Load Balancing',
    description: 'Gemini API access with up to 70% lower cost, global payments, and a load-balancing gateway designed to reduce 429 rate-limit errors and keep throughput stable.',
    alternates: {
        canonical: '/en',
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Gemini API Gateway",
    "operatingSystem": "Web",
    "applicationCategory": "DeveloperApplication",
    "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD"
    },
    "description": "Gateway and load balancer for Google Gemini API with protection against 429 limits and alternative payment methods."
};

const codeExampleNode = `import { GoogleGenAI } from "@google/genai";

// 1. Use our endpoint instead of the official one
// 2. Use your assigned api429.com API key

const ai = new GoogleGenAI({
  apiKey: "gw_xxxxxxxxxxxx",
  baseURL: "https://api.api429.com/v1" 
});

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "Explain API load balancing",
});

console.log(response.text());`;

const codeExamplePython = `from google import genai

# 1. Use our endpoint instead of the official one
# 2. Standard Google SDK syntax is fully supported

client = genai.Client(
    api_key="gw_xxxxxxxxxxxx",
    http_options={'base_url': 'https://api.api429.com/v1'}
)

response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='Write a Hello World script',
)
print(response.text)`;

// faqItems moved to src/lib/faq-data.ts
const FAQ_PLACEHOLDER = true;


const MockWindow = ({ type }: { type: 'video' | 'image' | 'music' | 'code' }) => (
    <div className={styles.mockWindow}>
        <div className={styles.mockWindowHeader}>
            <div className={styles.mockWindowDot}></div>
            <div className={styles.mockWindowDot}></div>
            <div className={styles.mockWindowDot}></div>
        </div>
        <div className={styles.mockWindowBody}>
            <div className={styles.mockImage} style={{ height: type === 'video' ? '250px' : type === 'image' ? '200px' : type === 'code' ? '180px' : '150px', position: 'relative', overflow: 'hidden' }}>
                {type === 'video' && <Image src="/mockup-video.webp" alt="Video Generation" fill style={{ objectFit: 'cover' }} />}
                {type === 'image' && <Image src="/banana-image.png" alt="Image Generation" fill style={{ objectFit: 'cover' }} />}
                {type === 'music' && <Image src="/mockup-audio.webp" alt="Music Generation" fill style={{ objectFit: 'cover' }} />}
                {type === 'code' && <Image src="/mockup-code.webp" alt="LLM Generation" fill style={{ objectFit: 'cover' }} />}
            </div>
            <div className={styles.mockSkeleton} style={{ width: '100%', marginTop: '1rem' }}></div>
            <div className={styles.mockSkeleton} style={{ width: '70%' }}></div>
        </div>
    </div>
);

export default function HomeEN() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header lang="en" />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className={styles.heroBadge}>
                            <span className={styles.badgePulse}></span>
                            Gemini API Access as a Service
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center animate-fade-in">
                            <span className="text-gradient">Gemini API</span> without<br />
                            limits or overpaying
                        </h1>
                        <p className="text-xl text-secondary text-center max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
                            Access the Gemini API with up to 70% savings, global payment options, and a load-balancing gateway that reduces 429 errors and maintains stable RPM.
                        </p>
                        <div className={`${styles.heroActions} animate-fade-in delay-200`}>
                            <Link href="/en#connect">
                                <Button variant="primary" size="lg">Get Access</Button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.glowBg}></div>
                </section>

                {/* Hero Metrics */}
                <section className={styles.trustBar}>
                    <div className="container">
                        <div className={styles.metrics}>
                            <div className={styles.metric}>
                                <div className="text-4xl font-bold text-primary">Up to −70%</div>
                                <div className="text-sm text-secondary font-medium mt-2">Token Savings</div>
                            </div>
                            <div className={styles.metric}>
                                <div className="text-4xl font-bold text-primary">99.9%</div>
                                <div className="text-sm text-secondary font-medium mt-2">Gateway Uptime</div>
                            </div>
                            <div className={styles.metric}>
                                <div className="text-4xl font-bold text-primary">0</div>
                                <div className="text-sm text-secondary font-medium mt-2">429 Errors</div>
                            </div>
                            <div className={styles.metric}>
                                <div className="text-4xl font-bold text-primary">~15ms</div>
                                <div className="text-sm text-secondary font-medium mt-2">Overhead Latency</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Supported Models */}
                <section className="py-24 pb-12">
                    <div className="container">
                        <h2 className="text-4xl font-bold text-center mb-4">Supported Gemini Models</h2>
                        <p className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12">
                            Access Google's most powerful models at a fraction of the cost.
                        </p>
                        <div className={styles.modelsGrid}>

                            <div className={styles.modelCard}>
                                <div className="flex justify-between mb-6" style={{ alignItems: 'flex-start' }}>
                                    <div className="flex items-center" style={{ gap: '0.75rem' }}>
                                        <div className={styles.modelLogo}>G</div>
                                        <div>
                                            <h4 className="font-bold text-lg leading-tight">Gemini 3 Flash</h4>
                                            <div className="text-xs text-secondary mt-1">New standard for speed</div>
                                        </div>
                                    </div>
                                    <span className={styles.badge}>Top Choice</span>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                                        <span className="text-sm text-secondary">Google Price:</span>
                                        <span className="text-sm font-medium line-through text-secondary opacity-70">$0.075 / 1M</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-sm font-semibold">Our Price:</span>
                                        <span className="text-lg font-bold text-primary">$0.035 / 1M</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modelCard}>
                                <div className="flex justify-between mb-6" style={{ alignItems: 'flex-start' }}>
                                    <div className="flex items-center" style={{ gap: '0.75rem' }}>
                                        <div className={styles.modelLogo}>G</div>
                                        <div>
                                            <h4 className="font-bold text-lg leading-tight">Gemini 3.1 Pro</h4>
                                            <div className="text-xs text-secondary mt-1">For complex reasoning</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                                        <span className="text-sm text-secondary">Google Price:</span>
                                        <span className="text-sm font-medium line-through text-secondary opacity-70">$1.25 / 1M</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-sm font-semibold">Our Price:</span>
                                        <span className="text-lg font-bold text-primary">$0.95 / 1M</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modelCard}>
                                <div className="flex justify-between mb-6" style={{ alignItems: 'flex-start' }}>
                                    <div className="flex items-center" style={{ gap: '0.75rem' }}>
                                        <div className={styles.modelLogo}>G</div>
                                        <div>
                                            <h4 className="font-bold text-lg leading-tight">Gemini 2.5 Flash</h4>
                                            <div className="text-xs text-secondary mt-1">Cheapest entry model</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                                        <span className="text-sm text-secondary">Google Price:</span>
                                        <span className="text-sm font-medium line-through text-secondary opacity-70">$0.075 / 1M</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-sm font-semibold">Our Price:</span>
                                        <span className="text-lg font-bold text-primary">$0.035 / 1M</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modelCard}>
                                <div className="flex flex-1 items-center" style={{ gap: '2.5rem' }}>
                                    <div className={styles.modelLogo} style={{ width: '120px', height: '120px', borderRadius: '24px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                                        <Image src="/banana-image.png" alt="Nano Banana" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="font-bold text-2xl leading-tight">Nano Banana</h4>
                                            <span className={styles.badge} style={{ borderColor: '#fbbc05', color: '#fbbc05', background: 'rgba(251, 188, 5, 0.1)' }}>New Content</span>
                                        </div>
                                        <div className="text-base text-secondary">Superior image generation with absolute control over characters and details.</div>
                                    </div>
                                </div>

                                <div style={{ width: '1px', height: '80px', background: 'var(--border-color)', opacity: '0.5' }} className="hidden md:block"></div>

                                <div style={{ minWidth: '240px' }}>
                                    <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                                        <span className="text-sm text-secondary">Google Price:</span>
                                        <span className="text-sm font-medium line-through text-secondary opacity-70">$0.04 / img</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-sm font-semibold">Our Price:</span>
                                        <span className="text-xl font-bold text-primary">$0.012 / img</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/pricing"><Button variant="outline">View All Pricing</Button></Link>
                        </div>
                    </div>
                </section>

                {/* Multi-Modal APIs Showcase */}
                <section className="py-24" style={{ background: 'var(--bg-color)' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <h2 className="text-4xl font-bold text-center mb-16">AI API for any tasks</h2>

                        {/* Video API */}
                        <div className={styles.splitSection + " mb-24"}>
                            <div className={styles.splitVisual}>
                                <MockWindow type="video" />
                            </div>
                            <div className={styles.splitContent}>
                                <h3 className="text-3xl font-bold mb-4">AI Video Generation API</h3>
                                <p className="text-secondary mb-6 leading-relaxed">
                                    Create high-quality videos using <strong>Veo 3.1</strong>. Our supported models offer synchronized audio, fluid motion, and realistic scenes, delivering fast rendering and reduced costs for your projects.
                                </p>
                                <Link href="/#connect"><Button variant="primary">Get API Key →</Button></Link>
                            </div>
                        </div>

                        {/* Image API */}
                        <div className={styles.splitSection + " mb-24"}>
                            <div className={styles.splitContent}>
                                <h3 className="text-3xl font-bold mb-4">AI Image Generation API</h3>
                                <p className="text-secondary mb-6 leading-relaxed">
                                    Generate high-quality, stylish images using <strong>Nano Banana</strong> and Nano Banana Pro. From photorealistic renders to design assets, offering supreme control over character consistency.
                                </p>
                                <Link href="/#connect"><Button variant="primary">Get API Key →</Button></Link>
                            </div>
                            <div className={styles.splitVisual}>
                                <MockWindow type="image" />
                            </div>
                        </div>

                        {/* Music API */}
                        <div className={styles.splitSection + " mb-24"}>
                            <div className={styles.splitVisual}>
                                <MockWindow type="music" />
                            </div>
                            <div className={styles.splitContent}>
                                <h3 className="text-3xl font-bold mb-4">AI Audio Generation API</h3>
                                <p className="text-secondary mb-6 leading-relaxed">
                                    Produce high-fidelity soundtracks and music. Designed to integrate music generation into apps, games, and creative workflows with stable, low-latency performance through our gateway.
                                </p>
                                <Link href="/#connect"><Button variant="primary">Get API Key →</Button></Link>
                            </div>
                        </div>

                        {/* LLM API */}
                        <div className={styles.splitSection}>
                            <div className={styles.splitContent}>
                                <h3 className="text-3xl font-bold mb-4">LLM & Chatbot APIs</h3>
                                <p className="text-secondary mb-6 leading-relaxed">
                                    Leverage our advanced LLMs (including the latest <strong>Gemini 3.1 Pro</strong> and Flash series) for natural conversations, coding assistance, and deep reasoning without rewriting your architecture.
                                </p>
                                <Link href="/#connect"><Button variant="primary">Get API Key →</Button></Link>
                            </div>
                            <div className={styles.splitVisual}>
                                <MockWindow type="code" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="py-24">
                    <div className="container">
                        <h2 className="text-4xl font-bold text-center mb-16">Why choose our Gateway</h2>
                        <div className={styles.benefitsGrid}>
                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Cheaper than official</h3>
                                <p className="text-secondary text-sm">Bulk purchasing and smart distribution allow us to offer prices up to 70% lower than Google's retail pricing.</p>
                            </Card>

                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Global Payments</h3>
                                <p className="text-secondary text-sm">Pay from anywhere in the world. We accept major credit cards and cryptocurrencies (USDT, TON) for seamless top-ups.</p>
                            </Card>

                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Smart Load Balancing</h3>
                                <p className="text-secondary text-sm">Forget about 429 Too Many Requests errors. We distribute the load and maintain a stable stream of requests.</p>
                            </Card>

                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Zero code rewrite</h3>
                                <p className="text-secondary text-sm">Full compatibility with official Google SDKs. Just change the baseURL and API key, and your code continues to work securely.</p>
                            </Card>

                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Streaming Support</h3>
                                <p className="text-secondary text-sm">We don't buffer responses. Server-sent events (streaming) flows directly to your application for a snappy, seamless UX.</p>
                            </Card>

                            <Card hoverable className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Zero data retention</h3>
                                <p className="text-secondary text-sm">Your data is yours alone. We act purely as a proxy and never store your prompts, attachments, or model responses.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How to Start */}
                <section className="py-24" style={{ background: 'var(--surface-hover)' }}>
                    <div className="container">
                        <h2 className="text-4xl font-bold mb-4 text-center">How to Start</h2>
                        <p className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12">
                            Integration takes 5 minutes. No need to rewrite your code — simply change the endpoint.
                        </p>

                        <div className={styles.stepsGrid}>
                            <div className={styles.stepCard}>
                                <div className={styles.stepNum + " mx-auto mb-4"}>1</div>
                                <h4 className="font-bold text-xl mb-2">Signup</h4>
                                <p className="text-sm text-secondary">Quick registration and dashboard access</p>
                                <div className={styles.microUI}>
                                    <div className="flex gap-4 justify-center items-center opacity-80 py-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span className="text-secondary">➔</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNum + " mx-auto mb-4"}>2</div>
                                <h4 className="font-bold text-xl mb-2">Buy credits</h4>
                                <p className="text-sm text-secondary">Crypto or fiat, no minimum limits</p>
                                <div className={styles.microUI}>
                                    <div className="flex justify-between items-center mb-2 px-1">
                                        <span className="text-xs">Balance:</span>
                                        <span className="font-bold text-primary">$50.00</span>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <span style={{ background: 'var(--surface-hover)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', border: '1px solid var(--border-color)' }}>USDT</span>
                                        <span style={{ background: 'var(--surface-hover)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', border: '1px solid var(--border-color)' }}>CARD</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNum + " mx-auto mb-4"}>3</div>
                                <h4 className="font-bold text-xl mb-2">Get your API key</h4>
                                <p className="text-sm text-secondary">Full OpenAI SDK compatibility</p>
                                <div className={styles.microUI}>
                                    <div className="text-left text-xs text-primary font-mono mb-1">baseURL:</div>
                                    <div className="text-left text-xs overflow-hidden text-ellipsis whitespace-nowrap" style={{ background: 'var(--surface-hover)', padding: '6px 8px', borderRadius: '4px' }}>
                                        https://api.api429.com/v1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Checkerboard Code Features */}
                <section className="py-24">
                    <div className="container">
                        {/* Feature 1 (Node.js) */}
                        <div className={styles.splitSection + " mb-24"}>
                            <div className={styles.splitContent}>
                                <h3 className="text-3xl font-bold mb-4">Node.js Integration</h3>
                                <p className="text-secondary mb-6 leading-relaxed">The official SDK works out of the box. Just configure our <code className="text-primary font-mono bg-[var(--surface-hover)] px-2 py-1 rounded border border-[var(--border-color)]">baseURL</code> and API key. No need to learn new docs or rewrite existing LLM business logic.</p>
                                <ul className="flex flex-col gap-3 text-sm text-primary font-medium">
                                    <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Zero code rewrite</li>
                                    <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Full streaming support</li>
                                    <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Strict Google SDK typing</li>
                                </ul>
                            </div>
                            <div className={styles.splitVisual}>
                                <div className={styles.codeWrapper}>
                                    <CodeSnippet code={codeExampleNode} language="typescript" filename="gemini-client.ts" />
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 (Python) */}
                        <div className={styles.splitSection}>
                            <div className={styles.splitVisual}>
                                <div className={styles.codeWrapper}>
                                    <CodeSnippet code={codeExamplePython} language="python" filename="app.py" />
                                </div>
                            </div>
                            <div className={styles.splitContent}>
                                <h3 className="text-3xl font-bold mb-4">Python SDK</h3>
                                <p className="text-secondary mb-6 leading-relaxed">Building an AI agent, analytics pipeline or Python backend? We got you covered. Native support for the <code className="text-primary font-mono bg-[var(--surface-hover)] px-2 py-1 rounded border border-[var(--border-color)]">google-genai</code> library means you can scale instantly without rate limits.</p>
                                <ul className="flex flex-col gap-3 text-sm text-primary font-medium">
                                    <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> LangChain and LlamaIndex compatible</li>
                                    <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Asynchronous API calls</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lead Form Section */}
                <section className="py-24" style={{ background: 'var(--surface-hover)' }}>
                    <div className="container">
                        <LeadForm lang="en" />
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-24">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <Accordion items={faqItemsEn} />
                    </div>
                </section>

            </main>
            <Footer lang="en" />
        </>
    );
}
