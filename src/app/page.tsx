import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Accordion } from '@/components/Accordion';
import { CodeSnippet } from '@/components/CodeSnippet';
import { LeadForm } from '@/components/LeadForm';
import Link from 'next/link';
import styles from './page.module.css';

const codeExample = `import { GoogleGenAI } from "@google/genai";

// 1. Используйте наш endpoint вместо официального
// 2. Используйте выданный вам API ключ GeminiGW

const ai = new GoogleGenAI({
  apiKey: "gw_xxxxxxxxxxxx",
  baseURL: "https://api.geminigw.com/v1" 
});

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "Расскажи про балансировку запросов",
});

console.log(response.text());`;

const faqItems = [
  {
    id: '1',
    question: 'Как вы боретесь с ошибками 429?',
    answer: 'Мы используем умную балансировку между пулом ключей и аккаунтов. Если один из каналов упирается в лимит, запрос прозрачно для вас перенаправляется на другой. Плюс мы используем очереди для сглаживания пиковых нагрузок.'
  },
  {
    id: '2',
    question: 'Можно ли оплатить картой банка РФ?',
    answer: 'Да. Мы принимаем оплату российскими картами, по безналичному расчету (с закрывающими документами для юрлиц), а также криптовалютой (USDT, TON).'
  },
  {
    id: '3',
    question: 'Какие модели доступны?',
    answer: 'Мы поддерживаем все актуальные модели Gemini, включая gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-pro и другие. Доступность новых моделей синхронизируется с официальным API.'
  },
  {
    id: '4',
    question: 'Насколько это безопасно?',
    answer: 'Мы выступаем только как прокси-слой. Мы не сохраняем содержимое ваших промптов и ответов моделей (zero data retention policy), логируются только метаданные запросов (токены, статус, время) для биллинга.'
  }
];

export default function Home() {
  return (
    <>
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

        {/* Trust Bar */}
        <section className={styles.trustBar}>
          <div className="container flex-col items-center">
            <p className="text-sm text-secondary uppercase tracking-widest mb-6 font-semibold">Нам доверяют продуктовые команды и стартапы</p>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-secondary">Uptime шлюза</div>
              </div>
              <div className={styles.metric}>
                <div className="text-3xl font-bold text-primary">{'< 50ms'}</div>
                <div className="text-sm text-secondary">Overhead задержка</div>
              </div>
              <div className={styles.metric}>
                <div className="text-3xl font-bold text-primary">−70%</div>
                <div className="text-sm text-secondary">Экономия на токенах</div>
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
            </div>
          </div>
        </section>

        {/* How it works & Code snippet */}
        <section className="py-24" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="container">
            <div className={styles.splitSection}>
              <div className={styles.splitContent}>
                <h2 className="text-4xl font-bold mb-6">Бесшовная интеграция</h2>
                <p className="text-lg text-secondary mb-8">
                  Мы поддерживаем официальный SDK. Вам нужно изменить лишь две строчки кода: добавить наш baseURL и заменить ключ.
                </p>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNum}>1</div>
                    <div>
                      <h4 className="font-bold text-primary">Оставьте заявку</h4>
                      <p className="text-sm text-secondary">Получите доступ к дашборду и персональный API-ключ</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNum}>2</div>
                    <div>
                      <h4 className="font-bold text-primary">Пополните баланс</h4>
                      <p className="text-sm text-secondary">Удобным для вас способом без минимальных лимитов</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNum}>3</div>
                    <div>
                      <h4 className="font-bold text-primary">Измените код</h4>
                      <p className="text-sm text-secondary">Укажите наш endpoint и наслаждайтесь стабильностью</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.splitVisual}>
                <div className={styles.codeWrapper}>
                  <CodeSnippet code={codeExample} language="typescript" filename="gemini-client.ts" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form Section */}
        <section className="py-24">
          <div className="container">
            <LeadForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
            <Accordion items={faqItems} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
