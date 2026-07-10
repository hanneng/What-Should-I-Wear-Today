'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ProblemSection from '@/components/ProblemSection';
import FeatureGrid from '@/components/FeatureGrid';
import InteractiveDemo from '@/components/InteractiveDemo';
import FutureAIBanner from '@/components/FutureAIBanner';
import Waitlist from '@/components/Waitlist';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ProblemSection />
        <FeatureGrid />
        <InteractiveDemo />
        <FutureAIBanner />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
