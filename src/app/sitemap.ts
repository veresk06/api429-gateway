import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://api429.com';

    const routes = [
        '',
        '/en',
        '/pricing',
        '/docs',
        '/gemini-api-429-error',
        '/gemini-api-russia',
        '/gemini-api-cheap',
        '/gemini-flash-api',
        '/openai-compatible-gateway',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' || route === '/en' ? 1.0 : 0.8,
    }));

    return routes;
}
