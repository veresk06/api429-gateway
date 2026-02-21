import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Accordion } from '@/components/Accordion';
import { CodeSnippet } from '@/components/CodeSnippet';
import { LeadForm } from '@/components/LeadForm';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { faqItemsRu } from '@/lib/faq-data';

const codeExampleNode = `import { GoogleGenAI } from "@google/genai";

// 1. Используйте наш endpoint вместо официального
// 2. Используйте выданный вам API ключ api429.com

const ai = new GoogleGenAI({
  apiKey: "gw_xxxxxxxxxxxx",
  baseURL: "https://api.api429.com/v1" 
});

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "Расскажи про балансировку запросов",
});

console.log(response.text());`;

const codeExamplePython = `from google import genai

# 1. Используйте наш endpoint вместо официального
# 2. Обычный синтаксис Google SDK полностью поддерживается

client = genai.Client(
    api_key="gw_xxxxxxxxxxxx",
    http_options={'base_url': 'https://api.api429.com/v1'}
)

response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='Напиши Hello World',
)
print(response.text)`;

// faqItems moved to src/lib/faq-data.ts


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

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Gemini API Gateway',
    operatingSystem: 'Web',
    applicationCategory: 'DeveloperApplication',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    description: 'Gateway and load balancer for Google Gemini API with protection against 429 limits and alternative payment methods.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className={styles.heroBadge}>
              <span className={styles.badgePulse}></span>
              Gemini API Access as a Service
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center animate-fade-in">
              <span className="text-gradient">Gemini API</span> без боли,<br />
              лимитов и переплат
            </h1>
            <p className="text-xl text-secondary text-center max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
              Доступ к Gemini API со скидкой до 70%, оплатой картами РФ и криптой, и балансировщиком, который снижает 429 ошибки и держит стабильный RPM.
            </p>
            <div className={`${styles.heroActions} animate-fade-in delay-200`}>
              <Link href="#connect">
                <Button variant="primary" size="lg">Получить доступ</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">Тарифы и калькулятор</Button>
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
                <div className="text-4xl font-bold text-primary">До −70%</div>
                <div className="text-sm text-secondary font-medium mt-2">Экономия на токенах</div>
              </div>
              <div className={styles.metric}>
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-secondary font-medium mt-2">Uptime шлюза</div>
              </div>
              <div className={styles.metric}>
                <div className="text-4xl font-bold text-primary">0</div>
                <div className="text-sm text-secondary font-medium mt-2">Ошибок 429</div>
              </div>
              <div className={styles.metric}>
                <div className="text-4xl font-bold text-primary">~15 мс</div>
                <div className="text-sm text-secondary font-medium mt-2">Overhead задержка</div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Models */}
        <section className="py-24 pb-12">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-4">Поддерживаемые модели Gemini</h2>
            <p className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12">
              Мы предоставляем доступ к самым актуальным моделям Google со значительной скидкой.
            </p>
            <div className={styles.modelsGrid}>

              <div className={styles.modelCard}>
                <div className="flex justify-between mb-6" style={{ alignItems: 'flex-start' }}>
                  <div className="flex items-center" style={{ gap: '0.75rem' }}>
                    <div className={styles.modelLogo}>G</div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">Gemini 3 Flash</h4>
                      <div className="text-xs text-secondary mt-1">Новый стандарт скорости</div>
                    </div>
                  </div>
                  <span className={styles.badge}>Top Choice</span>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                    <span className="text-sm text-secondary">Цена Google:</span>
                    <span className="text-sm font-medium line-through text-secondary opacity-70">$0.075 / 1M</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-semibold">Наша цена:</span>
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
                      <div className="text-xs text-secondary mt-1">Для сложнейших задач</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                    <span className="text-sm text-secondary">Цена Google:</span>
                    <span className="text-sm font-medium line-through text-secondary opacity-70">$1.25 / 1M</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-semibold">Наша цена:</span>
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
                      <div className="text-xs text-secondary mt-1">Самая дешевая модель</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                    <span className="text-sm text-secondary">Цена Google:</span>
                    <span className="text-sm font-medium line-through text-secondary opacity-70">$0.075 / 1M</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-semibold">Наша цена:</span>
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
                    <div className="text-base text-secondary">Превосходная генерация изображений с полным контролем над персонажами и деталями.</div>
                  </div>
                </div>

                <div style={{ width: '1px', height: '80px', background: 'var(--border-color)', opacity: '0.5' }} className="hidden md:block"></div>

                <div style={{ minWidth: '240px' }}>
                  <div className="flex justify-between items-center py-3 border-b border-[var(--border-color)]">
                    <span className="text-sm text-secondary">Цена Google:</span>
                    <span className="text-sm font-medium line-through text-secondary opacity-70">$0.04 / img</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-semibold">Наша цена:</span>
                    <span className="text-xl font-bold text-primary">$0.012 / img</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/pricing"><Button variant="outline">Посмотреть все тарифы</Button></Link>
            </div>
          </div>
        </section>

        {/* Multi-Modal APIs Showcase */}
        <section className="py-24" style={{ background: 'var(--bg-color)' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <h2 className="text-4xl font-bold text-center mb-16">API для ИИ для любых задач</h2>

            {/* Video API */}
            <div className={styles.splitSection + " mb-24"}>
              <div className={styles.splitVisual}>
                <MockWindow type="video" />
              </div>
              <div className={styles.splitContent}>
                <h3 className="text-3xl font-bold mb-4">API для генерации видео с ИИ</h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Создавайте видео высокого качества с помощью <strong>Veo 3.1</strong>. Модели предлагают синхронизированный звук, плавные движения и реалистичные сцены, обеспечивая быстрый рендеринг и меньшие затраты для ваших проектов.
                </p>
                <Link href="/#connect"><Button variant="primary">Получить API ключ →</Button></Link>
              </div>
            </div>

            {/* Image API */}
            <div className={styles.splitSection + " mb-24"}>
              <div className={styles.splitContent}>
                <h3 className="text-3xl font-bold mb-4">API для генерации изображений ИИ</h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Создавайте высококачественные, стильные изображения с помощью <strong>Nano Banana</strong> и Nano Banana Pro. От фотореалистичных рендеров до создания активов для дизайна, предлагая превосходный контроль над персонажами.
                </p>
                <Link href="/#connect"><Button variant="primary">Получить API ключ →</Button></Link>
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
                <h3 className="text-3xl font-bold mb-4">API для генерации музыки с ИИ</h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Создавайте музыку высокого качества. Разработано для интеграции генерации аудио в приложения, игры и творческие рабочие процессы со стабильной производительностью.
                </p>
                <Link href="/#connect"><Button variant="primary">Получить API ключ →</Button></Link>
              </div>
            </div>

            {/* LLM API */}
            <div className={styles.splitSection}>
              <div className={styles.splitContent}>
                <h3 className="text-3xl font-bold mb-4">API для LLM и чат-ботов на основе ИИ</h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Используйте новейшие <strong>Gemini 3.1 Pro</strong> и модели серии Flash для естественных бесед, помощи в кодировании и сложных аналитических задач без переписывания архитектуры.
                </p>
                <Link href="/#connect"><Button variant="primary">Получить API ключ →</Button></Link>
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
            <h2 className="text-4xl font-bold text-center mb-16">Почему выбирают наш Gateway</h2>
            <div className={styles.benefitsGrid}>
              <Card hoverable className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Дешевле официального</h3>
                <p className="text-secondary text-sm">Оптовая закупка и оптимизация распределения позволяет нам давать цены до 70% ниже официального прайса Google.</p>
              </Card>

              <Card hoverable className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Оплата из РФ и Крипта</h3>
                <p className="text-secondary text-sm">Никаких проблем с зарубежными картами. Принимаем переводы по РФ (вкл. юрлица), USDT и TON.</p>
              </Card>

              <Card hoverable className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Умная балансировка</h3>
                <p className="text-secondary text-sm">Забудьте об ошибках 429 Too Many Requests. Мы распределяем нагрузку и держим стабильный поток запросов.</p>
              </Card>
              <Card hoverable className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Zero code rewrite</h3>
                <p className="text-secondary text-sm">Полная совместимость с официальными Google SDK. Просто измените baseURL и ключ, остальной код будет работать как прежде.</p>
              </Card>

              <Card hoverable className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Поддержка Streaming</h3>
                <p className="text-secondary text-sm">Мы не буферизуем ответы. Потоковая генерация текста (streaming) работает без задержек, обеспечивая лучший UX для ваших пользователей.</p>
              </Card>

              <Card hoverable className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Zero data retention</h3>
                <p className="text-secondary text-sm">Ваши данные остаются вашими. Мы функционируем исключительно как прокси и не сохраняем промпты или ответы моделей.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Start */}
        <section className="py-24" style={{ background: 'var(--surface-hover)' }}>
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 text-center">Как начать работу</h2>
            <p className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12">
              Интеграция занимает 5 минут. Вам не нужно переписывать свой код — просто измените endpoint.
            </p>

            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNum + " mx-auto mb-4"}>1</div>
                <h4 className="font-bold text-xl mb-2">Оставьте заявку</h4>
                <p className="text-sm text-secondary">Регистрация и доступ к кабинету</p>
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
                <h4 className="font-bold text-xl mb-2">Пополните баланс</h4>
                <p className="text-sm text-secondary">Удобная оплата без лимитов</p>
                <div className={styles.microUI}>
                  <div className="flex justify-between items-center mb-2 px-1">
                    <span className="text-xs">Баланс:</span>
                    <span className="font-bold text-primary">$50.00</span>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span style={{ background: 'var(--surface-hover)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', border: '1px solid var(--border-color)' }}>USDT</span>
                    <span style={{ background: 'var(--surface-hover)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', border: '1px solid var(--border-color)' }}>СБП</span>
                  </div>
                </div>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepNum + " mx-auto mb-4"}>3</div>
                <h4 className="font-bold text-xl mb-2">Измените код</h4>
                <p className="text-sm text-secondary">Полная OpenAI совместимость</p>
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
                <h3 className="text-3xl font-bold mb-4">Node.js интеграция</h3>
                <p className="text-secondary mb-6 leading-relaxed">Официальный SDK работает из коробки. Просто укажите наш <code className="text-primary font-mono bg-[var(--surface-hover)] px-2 py-1 rounded border border-[var(--border-color)]">baseURL</code> и ключ API. Не нужно переучиваться или переписывать существующую бизнес-логику для LLM.</p>
                <ul className="flex flex-col gap-3 text-sm text-primary font-medium">
                  <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Zero code rewrite</li>
                  <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Поддержка streaming ответов</li>
                  <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Полная типизация Google SDK</li>
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
                <p className="text-secondary mb-6 leading-relaxed">Бекенд на Python, пайплайны данных или AI-агенты? Идеально. Прямая поддержка библиотеки <code className="text-primary font-mono bg-[var(--surface-hover)] px-2 py-1 rounded border border-[var(--border-color)]">google-genai</code> означает, что вы можете быстро масштабироваться без страха блокировок.</p>
                <ul className="flex flex-col gap-3 text-sm text-primary font-medium">
                  <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Совместимость с LangChain и LlamaIndex</li>
                  <li className="flex items-center gap-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Асинхронные вызовы API</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form Section */}
        <section className="py-24" style={{ background: 'var(--surface-hover)' }}>
          <div className="container">
            <LeadForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
            <Accordion items={faqItemsRu} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
