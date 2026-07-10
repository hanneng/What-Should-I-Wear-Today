'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sparkles,
  Luggage,
  Shirt,
  Briefcase,
  ShoppingBag,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Daily Outfit Recommendations',
    description: 'AI considers weather, occasion and comfort to suggest the perfect outfit every morning.',
    gradient: 'from-indigo-500/10 to-purple-500/10',
    iconColor: 'text-indigo-500',
  },
  {
    icon: Luggage,
    title: 'Travel Packing Assistant',
    description: 'Pack smarter for every trip with a complete wardrobe tailored to your destination.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Shirt,
    title: 'Digital Wardrobe',
    description: 'Know what you already own. Catalog your clothes and never buy duplicates again.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Briefcase,
    title: 'Dress Code Advisor',
    description: 'Business, casual or formal — get dress code guidance for any event or workplace.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconColor: 'text-rose-500',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping Assistant',
    description: 'Find pieces that complement your existing wardrobe. Avoid buying what you already own.',
    gradient: 'from-cyan-500/10 to-blue-500/10',
    iconColor: 'text-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Wardrobe Analytics',
    description: 'Understand your clothing habits with insights on what you wear most and what you ignore.',
    gradient: 'from-violet-500/10 to-purple-500/10',
    iconColor: 'text-violet-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-indigo-600 mb-3">
            Everything You Need
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Your complete style companion.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From daily recommendations to travel packing, we&apos;ve got every
            aspect of getting dressed covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default">
                  <CardContent className="p-6 lg:p-8">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-5.5 h-5.5 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
