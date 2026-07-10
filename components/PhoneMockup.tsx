'use client';

import { motion } from 'framer-motion';
import { Sun, MapPin, Check } from 'lucide-react';

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative mx-auto max-w-[300px] lg:max-w-[340px]"
    >
      <div className="relative rounded-[2.5rem] border-[3px] border-gray-700 bg-gray-900 p-3 shadow-2xl shadow-indigo-500/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-10" />

        <div className="rounded-[1.75rem] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2"
              >
                <Sun className="w-5 h-5 text-amber-400" />
                <span className="text-white/90 text-sm font-medium">
                  Good Morning
                </span>
                <span className="text-lg">👋</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-right"
              >
                <div className="text-white text-lg font-bold leading-tight">
                  31°C
                </div>
                <div className="text-white/60 text-xs">Sunny</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10"
            >
              <div className="flex items-center gap-1.5 text-white/70 text-xs mb-2">
                <MapPin className="w-3 h-3" />
                <span>Today&apos;s Plan</span>
              </div>
              <div className="space-y-1">
                {['Office', 'Lunch Meeting', 'Dinner'].map((item, i) => (
                  <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10"
            >
              <div className="text-white/70 text-xs mb-2 font-medium">
                Recommended Outfit
              </div>
              <div className="space-y-1.5">
                {[
                  'Navy Polo',
                  'Beige Chinos',
                  'White Sneakers',
                  'Brown Belt',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/90 text-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-white/10 text-white/50 text-xs">
                Bring sunglasses.
              </div>
            </motion.div>
          </div>

          <div className="px-5 pb-4">
            <div className="h-1 w-1/2 mx-auto rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -top-4 -left-4 w-20 h-20 bg-violet-500/20 rounded-full blur-2xl"
      />
    </motion.div>
  );
}
