'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FAQItem } from '@/types';

const faqs: FAQItem[] = [
  {
    question: 'What is What Should I Wear Today?',
    answer:
      'What Should I Wear Today is an AI-powered style assistant that provides personalized outfit recommendations based on weather, occasion, and your personal style preferences. It eliminates morning decision fatigue by suggesting complete outfits you can wear with confidence.',
  },
  {
    question: 'Will it always be free?',
    answer:
      'We will offer a generous free tier with daily outfit recommendations. Premium features like AI wardrobe scanning and advanced analytics will be available in our paid plan. Early access users will receive special pricing.',
  },
  {
    question: 'Do I need to upload photos?',
    answer:
      'Not at launch. The MVP works by understanding your preferences through style selections. AI wardrobe upload (coming soon) will allow you to photograph your clothes for even more personalized recommendations.',
  },
  {
    question: 'When will AI wardrobe support launch?',
    answer:
      'We are actively developing AI wardrobe scanning and expect to release it in Q3 2026. Early access users will be notified and receive priority access to this feature.',
  },
  {
    question: 'Can I use it while travelling?',
    answer:
      'Yes! Travel packing is one of our core features. Simply tell us your destination, trip duration, and planned activities, and we will generate a complete packing list tailored to the local weather and your itinerary.',
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded-lg px-1"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-gray-900 pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 pb-5 px-1 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-indigo-600 mb-3">
            Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl px-6 shadow-sm border border-gray-100"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
