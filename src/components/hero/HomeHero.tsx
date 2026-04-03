'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { athleteProfile } from '../../data/athleteProfile';

const domains = ['Chess', 'Football', 'Basketball'];

const HomeHero = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0A0F1C]"
      aria-label="Hero section"
    >
      {/* Background texture & glow */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/2 left-[15%] -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Background image with parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute top-0 right-0 w-full lg:w-[50%] h-[70vh] lg:h-full z-0"
      >
        <Image
          src={athleteProfile.profileImage}
          alt={`${athleteProfile.name} – Multi-Sport Athlete`}
          fill
          className="object-cover object-top opacity-80 lg:opacity-100"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/40 lg:via-[#0A0F1C]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:justify-between min-h-[100vh] pt-32 pb-16">
        {/* Left content */}
        <motion.div style={{ y: textY }} className="w-full lg:w-[50%] space-y-8 mt-24 lg:mt-0">
          {/* Identity badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-3 border border-contrast-alpha/20 rounded-full px-4 py-2 w-max bg-contrast-alpha/5 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Multi-Disciplinary Athlete
            </span>
          </motion.div>

          {/* Name */}
          <div className="flex flex-col relative w-max">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[7.5rem] font-black uppercase tracking-tighter leading-none"
              style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)', color: 'transparent' }}
            >
              {athleteProfile.name.split(' ')[0]}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-none -mt-1 md:-mt-2 lg:-mt-3 ml-2 md:ml-4 lg:ml-6 relative z-10 drop-shadow-2xl"
              aria-hidden="true"
            >
              {athleteProfile.name.split(' ')[1] || ''}
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl text-[#94A3B8] font-light max-w-md leading-relaxed pt-2"
          >
            {athleteProfile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row justify-start sm:items-center gap-6 pt-6"
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white font-bold px-8 py-4 text-xs tracking-wide transition-all duration-300 hover:scale-[1.05] shadow-lg flex items-center justify-center gap-3 group/btn uppercase"
              aria-label="Explore Harsh Kale's journey"
            >
              EXPLORE JOURNEY{' '}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-4 text-xs font-bold tracking-wide text-[#94A3B8] hover:text-white transition-colors group/play uppercase"
              aria-label="Watch showreel"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors bg-contrast-alpha/5 group-hover/play:bg-white/20 group-hover/play:border-white">
                <Play size={14} fill="currentColor" />
              </div>
              WATCH SHOWREEL
            </button>
          </motion.div>

          {/* Domain indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="pt-12 flex items-center gap-4"
            aria-label="Sports domains"
          >
            <span className="text-[10px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase">
              DOMAINS
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
            <div className="flex gap-3">
              {domains.map((domain, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/20 hover:bg-primary hover:scale-150 transition-all cursor-pointer relative group/tooltip"
                  title={domain}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-black/80 px-3 py-1.5 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap text-white pointer-events-none">
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* QR Code Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="relative mt-16 lg:mt-0 lg:absolute lg:bottom-10 lg:right-10 z-[50] flex flex-col items-center gap-3 p-4 rounded-3xl bg-surface/5 backdrop-blur-md border border-contrast-alpha/20 shadow-2xl w-full sm:w-[200px] max-w-[90vw]"
        >
          <div className="w-full aspect-square bg-white p-2 rounded-xl shadow-inner flex items-center justify-center transition-transform hover:scale-105 duration-500">
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://youinsports.com"
              alt="Scan QR code to connect with Harsh Kale on YouInSports"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-2 w-full pt-2">
            <span className="text-[9px] md:text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] whitespace-nowrap">
              SCAN TO CONNECT
            </span>
            <button
              onClick={() => window.open('https://youinsports.com', '_blank')}
              className="w-full relative overflow-hidden bg-primary text-white text-[9px] md:text-[10px] font-bold py-3 px-3 rounded-xl flex items-center justify-center transition-colors tracking-wide shadow-lg border border-contrast-alpha/20 group/qr"
              aria-label="Connect on YouInSports"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover/qr:scale-105">
                CONNECT &rarr;
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
