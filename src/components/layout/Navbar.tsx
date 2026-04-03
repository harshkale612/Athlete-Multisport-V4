'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../theme/ThemeProvider';
import { sportsData } from '../../data/sportsData';
import { athleteProfile } from '../../data/athleteProfile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border py-4'
            : 'bg-transparent py-6'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-black tracking-tighter text-text z-50"
            aria-label={`${athleteProfile.name} – Home`}
          >
            {athleteProfile.name.split(' ')[0]}
            <span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-widest text-text hover:text-primary transition-colors"
            >
              Home
            </Link>

            <div className="flex gap-4">
              {sportsData.map((sport) => (
                <Link
                  key={sport.id}
                  href={`/sport/${sport.id}`}
                  className="text-sm font-bold uppercase tracking-widest text-text-muted hover:text-primary transition-colors"
                  aria-label={`${athleteProfile.name} – ${sport.name}`}
                >
                  {sport.name}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <div
              className="flex bg-surface/50 border border-contrast-alpha/10 rounded-full p-1 backdrop-blur-sm"
              role="group"
              aria-label="Theme selector"
            >
              <button
                onClick={() => toggleTheme('dark-cinematic')}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark-cinematic'
                    ? 'bg-primary text-white'
                    : 'text-text-muted hover:text-text'
                }`}
                aria-label="Dark Theme"
                aria-pressed={theme === 'dark-cinematic'}
              >
                <Moon size={16} />
              </button>
              <button
                onClick={() => toggleTheme('light-editorial')}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'light-editorial'
                    ? 'bg-primary text-white'
                    : 'text-text-muted hover:text-text'
                }`}
                aria-label="Light Theme"
                aria-pressed={theme === 'light-editorial'}
              >
                <Sun size={16} />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-text p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 flex flex-col items-center"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col items-center gap-8 text-center mt-12 w-full">
              <Link
                href="/"
                className="text-3xl font-display font-black uppercase text-text"
              >
                Home
              </Link>
              <hr className="w-12 border-border" />
              {sportsData.map((sport) => (
                <Link
                  key={sport.id}
                  href={`/sport/${sport.id}`}
                  className="text-2xl font-display font-bold uppercase text-text hover:text-primary transition-colors"
                >
                  {sport.name}
                </Link>
              ))}

              <div
                className="mt-8 flex gap-4 bg-surface rounded-full p-2 border border-contrast-alpha/10"
                role="group"
                aria-label="Theme selector"
              >
                <button
                  onClick={() => toggleTheme('dark-cinematic')}
                  className={`p-3 rounded-full ${
                    theme === 'dark-cinematic' ? 'bg-primary text-white' : 'text-text-muted'
                  }`}
                  aria-label="Dark Theme"
                >
                  <Moon size={20} />
                </button>
                <button
                  onClick={() => toggleTheme('light-editorial')}
                  className={`p-3 rounded-full ${
                    theme === 'light-editorial' ? 'bg-primary text-white' : 'text-text-muted'
                  }`}
                  aria-label="Light Theme"
                >
                  <Sun size={20} />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
