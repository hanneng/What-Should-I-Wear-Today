'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Calendar, Luggage } from 'lucide-react';

const problems = [
  {
    icon: Sun,
    title: 'Weather-aware recommendations',
    description: 'No more checking the weather and guessing. We factor in temperature, rain, and conditions so you always dress appropriately.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Calendar,
    title: 'Recommendations based on your plans',
    description: 'Got a meeting, date, or casual outing? Your outfit should match the occasion — not just the weather.',
    gradient: 'from-indigo-500/10 to-violet-500/10',
    iconColor: 'text-indigo-500',
  },
  {
    icon: Luggage,
    title: 'Travel packing made simple',
    description: 'Packing for a trip? Get a complete wardrobe list tailored to your destination, duration, and planned activities.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-500',
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-indigo-600 mb-3">
            The Problem We Solve
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Getting dressed shouldn&apos;t be stressful.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every morning, millions of people waste time and mental energy
            deciding what to wear. We&apos;re fixing that.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${problem.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
