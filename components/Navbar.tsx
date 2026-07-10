'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Features', href: '/#features' },
  { label: 'How it Works', href: '/#demo' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      const el = document.querySelector(href.substring(1));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    if (href === '/about') return pathname === '/about';
    if (href.startsWith('/#')) return pathname === '/';
    return false;
  };

  const handleWaitlist = () => {
    setMobileOpen(false);
    if (pathname === '/') {
      document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#waitlist';
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || pathname !== '/'
          ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-100/80 shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-sm shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span>Stylomylo</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('/#') && pathname === '/') {
                  e.preventDefault();
                  handleNavClick(item.href);
                }
              }}
              className={cn(
                'relative px-3.5 py-2 text-sm rounded-lg transition-all duration-200',
                isActive(item.href)
                  ? 'text-foreground font-medium bg-gray-100/80'
                  : 'text-muted-foreground hover:text-foreground hover:bg-gray-50/80',
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-gray-200">
            <Button
              size="sm"
              onClick={handleWaitlist}
              className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 shadow-sm shadow-indigo-500/20 text-white border-0"
            >
              Get Early Access
            </Button>
          </div>
        </div>

        <button
          className="md:hidden p-2.5 rounded-lg text-foreground hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden border-b border-gray-100 bg-white/95 backdrop-blur-2xl"
          >
            <div className="px-4 py-5 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'block px-4 py-2.5 rounded-lg text-sm transition-colors',
                    isActive(item.href)
                      ? 'text-foreground font-medium bg-gray-100'
                      : 'text-muted-foreground hover:text-foreground hover:bg-gray-50',
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-3 px-0">
                <Button
                  className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white border-0 shadow-sm"
                  onClick={handleWaitlist}
                >
                  Get Early Access
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
