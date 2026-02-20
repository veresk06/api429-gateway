import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://api429.com"),
  title: {
    default: "Gemini API Gateway | Stable Access & Load Balancing",
    template: "%s | GeminiGW"
  },
  description: "Gemini API access with up to 70% lower cost, RU card & crypto payments, and a load-balancing gateway designed to reduce 429 rate-limit errors and keep throughput stable.",
  keywords: ["Gemini API", "AI Gateway", "Russian Payments", "Crypto Payments", "LLM Routing", "AI rate limit 429"],
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/',
      'en-US': '/en',
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
