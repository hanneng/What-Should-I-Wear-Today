'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FutureAIBanner() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Coming Soon
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          AI Wardrobe Upload
        </h2>

        <p className="text-lg text-indigo-200/80 max-w-2xl mx-auto leading-relaxed">
          Upload your wardrobe and receive truly personalized outfit
          recommendations powered by AI. We&apos;re training our models to
          understand your unique style.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {['Wardrobe Scanning', 'Style Learning', 'Personal AI Model'].map(
            (feature) => (
              <div
                key={feature}
                className="px-4 py-2 rounded-full border border-indigo-400/20 bg-indigo-400/5 text-indigo-200 text-sm"
              >
                {feature}
              </div>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
}
