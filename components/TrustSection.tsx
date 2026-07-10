'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    value: '35,000+',
    label: 'Decisions we make each day',
    note: 'illustrative',
  },
  {
    value: 'Unlimited',
    label: 'Average outfit combinations',
    note: 'illustrative',
  },
  {
    value: '365/year',
    label: 'Morning decisions saved',
    note: 'illustrative',
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-indigo-600 mb-3">
            Built for Efficiency
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Designed for busy professionals.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="text-center border-0 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider text-gray-400 font-medium border border-gray-200 px-2 py-0.5 rounded">
                    {stat.note}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
