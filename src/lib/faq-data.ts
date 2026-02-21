export const faqItemsRu = [
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
        answer: 'Мы поддерживаем все актуальные модели Gemini, включая gemini-3.1-pro, gemini-3.0-flash, gemini-2.5-flash и Nano Banana. Доступность новых моделей синхронизируется с официальным API.'
    },
    {
        id: '4',
        question: 'Насколько это безопасно?',
        answer: 'Мы выступаем только как прокси-слой. Мы не сохраняем содержимое ваших промптов и ответов моделей (zero data retention policy), логируются только метаданные запросов (токены, статус, время) для биллинга.'
    }
];

export const faqItemsEn = [
    {
        id: '1',
        question: 'How do you prevent 429 errors?',
        answer: 'We use smart balancing between a pool of keys and accounts. If one channel hits a limit, the request is transparently redirected. We also use queues for peak load smoothing.'
    },
    {
        id: '2',
        question: 'What payment methods do you accept?',
        answer: 'We accept global credit cards, Russian cards (for local users), bank transfers, and cryptocurrencies (USDT, TON).'
    },
    {
        id: '3',
        question: 'Which models are available?',
        answer: 'We support all current Gemini models: gemini-3.1-pro, gemini-3.0-flash, gemini-2.5-flash, and Nano Banana.'
    },
    {
        id: '4',
        question: 'Is my data secure?',
        answer: 'We act purely as a proxy layer. We do not store prompts or model responses (zero data retention policy). Only metadata is logged for billing.'
    }
];
