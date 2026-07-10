'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Heart,
  Zap,
  ChevronDown,
  Quote,
} from 'lucide-react';
import Link from 'next/link';

const philosophyCards = [
  {
    icon: Zap,
    title: 'Simple',
    description: 'Technology should remove complexity.',
    gradient: 'from-indigo-500/10 to-purple-500/10',
    iconColor: 'text-indigo-500',
  },
  {
    icon: Sparkles,
    title: 'Useful',
    description: 'AI should solve real problems, not create new ones.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Shield,
    title: 'Private',
    description: 'Users should stay in control of their personal data.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Heart,
    title: 'Thoughtful',
    description: 'Good design feels effortless.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconColor: 'text-rose-500',
  },
];

const roadmapItems = [
  { label: 'What Should I Wear Today', done: true },
  { label: 'AI Outfit Recommendations', done: true },
  { label: 'Digital Wardrobe', done: false },
  { label: 'Travel Packing Assistant', done: false },
  { label: 'Shopping Assistant', done: false },
  { label: 'Personal Style Intelligence', done: false },
];

const connectLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hanneng/',
    icon: Linkedin,
    color: 'text-[#0A66C2]',
    bgColor: 'bg-[#0A66C2]/10',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/hanneng',
    icon: Github,
    color: 'text-gray-900',
    bgColor: 'bg-gray-900/10',
  },
  {
    label: 'Email',
    href: 'mailto:hello@stylomylo.co',
    icon: Mail,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
  },
];

function AvatarCard() {
  return (
    <div className="relative">
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-indigo-500/25">
        <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          HN
        </span>
      </div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-emerald-400 border-4 border-white flex items-center justify-center shadow-lg">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}

function RoadmapItem({
  item,
  index,
  isLast,
}: {
  item: { label: string; done: boolean };
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="flex items-start gap-4"
    >
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
            item.done
              ? 'bg-indigo-500 shadow-md shadow-indigo-500/25'
              : 'bg-gray-100 border-2 border-dashed border-gray-300'
          }`}
        >
          {item.done ? (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          )}
        </div>
        {!isLast && (
          <div className="w-px h-10 bg-gray-200" />
        )}
      </div>
      <div className="pt-1.5">
        <span
          className={`text-sm font-medium ${
            item.done ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}

function SectionTitle({
  label,
  title,
  centered = true,
}: {
  label: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? 'text-center mb-14' : 'mb-10'}
    >
      <p className="text-sm font-medium text-indigo-600 mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              About
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Meet the{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Maker
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Stylomylo is a personal project created to solve one simple
              question that millions of people ask every morning:
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Quote className="w-5 h-5 text-indigo-400 shrink-0" />
              <span className="text-white/80 text-lg italic">
                &ldquo;What should I wear today?&rdquo;
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12"
            >
              <AvatarCard />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 text-gray-500 animate-bounce" />
        </motion.div>
      </section>

      {/* ===== MY STORY ===== */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              label="The Story"
              title="Why I Built Stylomylo"
              centered
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-5 text-gray-600 leading-relaxed"
            >
              <p className="text-lg">
                I&apos;m an independent product builder who enjoys creating
                AI-powered tools that make everyday life a little simpler.
              </p>
              <p className="text-lg">
                Throughout my career, I&apos;ve worked on technology, digital
                innovation, and AI projects, always with the same belief:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500 my-6">
                <p className="text-lg font-medium text-gray-900 italic">
                  The best technology solves real problems in simple, intuitive
                  ways.
                </p>
              </div>

              <p className="text-lg">
                Stylomylo began with one surprisingly common question:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500 my-6 flex items-center gap-3">
                <Quote className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-gray-900 text-lg italic font-medium">
                  &ldquo;What should I wear today?&rdquo;
                </span>
              </div>

              <p className="text-lg">
                It&apos;s a small decision, but one that millions of people make
                every morning. Whether it&apos;s checking the weather, dressing
                for work, preparing for a meeting, or packing for a trip, these
                daily choices take time and mental energy.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-violet-500 my-6">
                <p className="text-lg font-medium text-gray-900 italic">
                  I believe AI can help.
                </p>
              </div>

              <p className="text-lg">
                Not by replacing personal style, but by acting as a thoughtful
                companion that understands your lifestyle and helps you make
                confident decisions every day.
              </p>
              <p className="text-lg">
                Today, Stylomylo starts with outfit recommendations. Tomorrow, I
                hope it grows into a complete personal style companion — helping
                with travel packing, wardrobe organisation, shopping decisions,
                and discovering your own unique style.
              </p>
              <p className="text-lg">
                I&apos;m building Stylomylo in public, learning from every user,
                and continuously improving it one feature at a time.
              </p>
              <p className="text-lg font-medium text-gray-900">
                Thank you for being part of this journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Who I Am" title="About the Creator" centered />

          <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="h-full border-0 bg-white shadow-sm">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-5 shadow-lg shadow-indigo-500/20">
                    <span className="text-3xl font-bold text-white">HN</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Han Neng
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Technology Leader
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      'AI Products',
                      'Digital Innovation',
                      'Technology',
                      'Product Building',
                      'Design Thinking',
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card className="h-full border-0 bg-white shadow-sm">
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    I&apos;m passionate about creating AI-powered tools that
                    solve everyday problems with simplicity and care.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Rather than building technology for its own sake, I focus on
                    tools that make life a little easier — whether that&apos;s
                    helping someone decide what to wear or packing smarter for a
                    trip.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Stylomylo is one of several independent AI projects I build
                    and experiment with, combining technology, design, and
                    real-world usability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="How I Think"
            title="Design Philosophy"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {philosophyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Card className="h-full border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${card.iconColor}`} />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="What's Next" title="Roadmap" centered />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-1">
                  {roadmapItems.map((item, i) => (
                    <RoadmapItem
                      key={item.label}
                      item={item}
                      index={i}
                      isLast={i === roadmapItems.length - 1}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <p className="text-xs text-gray-400 text-center mt-6">
              This roadmap reflects the current vision and may evolve based on
              user feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== OPEN DEVELOPMENT ===== */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Open Development
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Built in Public
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Stylomylo is an independent side project built in public. Every
              feature is driven by user feedback and continuous experimentation.
            </p>

            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mt-4">
              The vision is to create an AI companion that helps people dress
              confidently, travel smarter, and build a wardrobe they truly
              enjoy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONNECT ===== */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Say Hello" title="Let's Connect" centered />

          <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {connectLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-full border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-12 h-12 rounded-xl ${link.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`w-6 h-6 ${link.color}`} />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {link.label}
                        </h3>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="relative py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] mb-4">
            Technology should make
            <br />
            everyday decisions easier.
          </p>
          <p className="text-lg text-gray-400 mt-4 mb-10">
            That&apos;s the future I&apos;m building with Stylomylo.
          </p>

          <Link href="/">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
