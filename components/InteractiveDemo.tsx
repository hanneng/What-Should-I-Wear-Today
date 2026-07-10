'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { generateOutfits } from '@/lib/outfitGenerator';
import type { Outfit, Weather, Occasion, Style, Gender, AgeRange } from '@/types';
import { Sparkles, Shirt, RefreshCw, Eye, X } from 'lucide-react';

const weatherOptions: { value: Weather; label: string }[] = [
  { value: 'Sunny', label: 'Sunny' },
  { value: 'Rain', label: 'Rain' },
  { value: 'Cloudy', label: 'Cloudy' },
  { value: 'Hot', label: 'Hot' },
  { value: 'Cold', label: 'Cold' },
];

const occasionOptions: { value: Occasion; label: string }[] = [
  { value: 'Office', label: 'Office' },
  { value: 'Date', label: 'Date' },
  { value: 'Wedding', label: 'Wedding' },
  { value: 'Business Meeting', label: 'Business Meeting' },
  { value: 'Casual', label: 'Casual' },
  { value: 'Travel', label: 'Travel' },
];

const styleOptions: { value: Style; label: string }[] = [
  { value: 'Minimal', label: 'Minimal' },
  { value: 'Classic', label: 'Classic' },
  { value: 'Smart Casual', label: 'Smart Casual' },
  { value: 'Streetwear', label: 'Streetwear' },
  { value: 'Business', label: 'Business' },
];

const genderOptions: { value: Gender; label: string }[] = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Non-Binary', label: 'Non-Binary' },
];

const ageOptions: { value: AgeRange; label: string }[] = [
  { value: '18-24', label: '18–24' },
  { value: '25-34', label: '25–34' },
  { value: '35-44', label: '35–44' },
  { value: '45-54', label: '45–54' },
  { value: '55+', label: '55+' },
];

interface SelectFieldProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

function SelectField({ label, options, value, onChange }: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function InteractiveDemo() {
  const [weather, setWeather] = useState<Weather>('Sunny');
  const [occasion, setOccasion] = useState<Occasion>('Office');
  const [style, setStyle] = useState<Style>('Smart Casual');
  const [gender, setGender] = useState<Gender>('Male');
  const [ageRange, setAgeRange] = useState<AgeRange>('25-34');
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [comingSoonIndex, setComingSoonIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    setGenerating(true);
    setOutfits([]);

    setTimeout(() => {
      const results = generateOutfits(weather, occasion, style, gender, ageRange);
      setOutfits(results);
      setGenerated(true);
      setGenerating(false);
    }, 400);
  };

  return (
    <section id="demo" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-indigo-600 mb-3">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Try it yourself.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Select your conditions and let our outfit generator do the rest. No
            sign-up required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-6 lg:p-8">
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-4">
                <SelectField
                  label="Weather"
                  options={weatherOptions}
                  value={weather}
                  onChange={(v) => setWeather(v as Weather)}
                />
                <SelectField
                  label="Occasion"
                  options={occasionOptions}
                  value={occasion}
                  onChange={(v) => setOccasion(v as Occasion)}
                />
                <SelectField
                  label="Style Preference"
                  options={styleOptions}
                  value={style}
                  onChange={(v) => setStyle(v as Style)}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 max-w-md mx-auto sm:mx-0">
                <SelectField
                  label="Gender"
                  options={genderOptions}
                  value={gender}
                  onChange={(v) => setGender(v as Gender)}
                />
                <SelectField
                  label="Age Range"
                  options={ageOptions}
                  value={ageRange}
                  onChange={(v) => setAgeRange(v as AgeRange)}
                />
              </div>

              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={generating}
                className="w-full gap-2"
              >
                {generating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate Outfit
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <AnimatePresence mode="wait">
            {outfits.length > 0 && (
              <motion.div
                key="outfits"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-8 space-y-4"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  Generated {outfits.length} outfit{outfits.length > 1 ? 's' : ''}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {outfits.map((outfit, i) => (
                    <motion.div
                      key={`${outfit.top}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <Card className="h-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <CardContent className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <Shirt className="w-4 h-4 text-indigo-500" />
                            <span className="text-xs font-medium text-indigo-600">
                              Option {i + 1}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm mt-1 flex-1">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Top</span>
                              <span className="text-gray-900 font-medium">
                                {outfit.top}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Bottom</span>
                              <span className="text-gray-900 font-medium">
                                {outfit.bottom}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Shoes</span>
                              <span className="text-gray-900 font-medium">
                                {outfit.shoes}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Accessories</span>
                              <span className="text-gray-900 font-medium">
                                {outfit.accessories.join(', ')}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-xs text-gray-500 italic">
                              {outfit.explanation}
                            </p>
                          </div>
                          <button
                            onClick={() => setComingSoonIndex(i)}
                            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 text-indigo-600 text-sm font-medium hover:from-indigo-100 hover:to-violet-100 transition-all cursor-pointer group"
                          >
                            <Eye className="w-4 h-4" />
                            Visualize It
                          </button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <AnimatePresence>
                  {comingSoonIndex !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center mt-6"
                    >
                      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-amber-50 border border-amber-200 shadow-sm">
                        <Eye className="w-5 h-5 text-amber-600" />
                        <div>
                          <p className="text-sm font-semibold text-amber-900">
                            Visualize It — Coming Soon
                          </p>
                          <p className="text-xs text-amber-700">
                            We&apos;re working on letting you see Option {comingSoonIndex + 1} on a virtual model.
                          </p>
                        </div>
                        <button
                          onClick={() => setComingSoonIndex(null)}
                          className="ml-2 p-1 rounded-lg hover:bg-amber-100 transition-colors text-amber-500"
                          aria-label="Dismiss"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
