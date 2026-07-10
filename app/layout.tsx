import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl = 'https://what-should-i-wear-today.pages.dev';

export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'What Should I Wear Today | Stylomylo',
  description:
    'AI-powered outfit recommendations based on weather, occasion and lifestyle. Never wonder what to wear again.',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'What Should I Wear Today | Stylomylo',
    description:
      'AI-powered outfit recommendations based on weather, occasion and lifestyle. Never wonder what to wear again.',
    url: baseUrl,
    siteName: 'Stylomylo',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Should I Wear Today | Stylomylo',
    description:
      'AI-powered outfit recommendations based on weather, occasion and lifestyle.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Stylomylo',
      url: baseUrl,
      description:
        'AI-powered outfit recommendations based on weather, occasion and lifestyle.',
      foundingDate: '2026',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'What Should I Wear Today | Stylomylo',
      url: baseUrl,
      description:
        'AI-powered outfit recommendations based on weather, occasion and lifestyle.',
    },
  ];

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
