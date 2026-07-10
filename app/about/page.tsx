import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

const baseUrl = 'https://what-should-i-wear-today.pages.dev';

export const metadata: Metadata = {
  title: 'About | Stylomylo',
  description:
    'Meet the creator of Stylomylo and learn the story behind the AI-powered personal style assistant.',
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: 'About | Stylomylo',
    description:
      'Meet the creator of Stylomylo and learn the story behind the AI-powered personal style assistant.',
    url: `${baseUrl}/about`,
    siteName: 'Stylomylo',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Stylomylo',
    description:
      'Meet the creator of Stylomylo and learn the story behind the AI-powered personal style assistant.',
  },
};

export default function About() {
  return <AboutPage />;
}
