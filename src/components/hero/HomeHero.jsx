import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { athleteProfile } from '../../data/athleteProfile';

const HomeHero = () => {
  const containerRef = useRef(null);
  
  // Setup Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Dynamic parallax mappings
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Derive domains from athlete profile bio or generic defaults
  const domains = ['Chess', 'Football', 'Basketball']; // Example domain mappings

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0A0F1C]"
    >
      {/* Background grid texture & Glow orb */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/2 left-[15%] -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Right Background Sub-container (Image & Gradients) */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute top-0 right-0 w-full lg:w-[50%] h-[70vh] lg:h-full z-0"
      >
        <img 
          src={athleteProfile.profileImage}
          alt={athleteProfile.name}
          className="w-full h-full object-cover object-top opacity-80 lg:opacity-100"
        />
        {/* Blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/40 lg:via-[#0A0F1C]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:justify-between pt-32 pb-16">
        
        {/* Left Content Panel */}
        <motion.div 
          style={{ y: textY }}
          className="w-full lg:w-[50%] space-y-8 mt-24 lg:mt-0"
        >
          {/* Identity Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 w-max bg-white/5 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Multi-Disciplinary Athlete
            </span>
          </motion.div>

          {/* Typography - Name Stack */}
          <div className="flex flex-col relative w-max">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[7.5rem] font-black uppercase tracking-tighter leading-none"
              style={{
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)',
                color: 'transparent'
              }}
            >
              {athleteProfile.name.split(' ')[0]}
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-none -mt-1 md:-mt-2 lg:-mt-3 ml-2 md:ml-4 lg:ml-6 relative z-10 drop-shadow-2xl"
            >
              {athleteProfile.name.split(' ')[1] || ''}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#94A3B8] font-light max-w-md leading-relaxed pt-2"
          >
            {athleteProfile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-start sm:items-center gap-6 pt-6 group/cta"
          >
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white font-bold px-8 py-4 text-xs tracking-wide transition-all duration-300 hover:scale-[1.05] shadow-lg flex items-center justify-center gap-3 group/btn uppercase"
            >
              EXPLORE JOURNEY <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-4 text-xs font-bold tracking-wide text-[#94A3B8] hover:text-white transition-colors group/play uppercase"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors bg-white/5 group-hover/play:bg-white/20 group-hover/play:border-white">
                <Play size={14} fill="currentColor" />
              </div> 
              WATCH SHOWREEL
            </button>
          </motion.div>

          {/* Domain Indicators */}
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
             className="pt-12 flex items-center gap-4"
          >
            <span className="text-[10px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase">DOMAINS</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <div className="flex gap-3">
              {domains.map((domain, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-white/20 hover:bg-primary hover:scale-150 transition-all cursor-pointer relative group/tooltip"
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-black/80 px-3 py-1.5 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap text-white pointer-events-none">
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Floating QR Code Widget */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-16 lg:mt-0 lg:absolute lg:bottom-10 lg:right-10 z-20 flex flex-col items-center gap-3 p-4 rounded-3xl bg-surface/5 backdrop-blur-md border border-white/10 shadow-2xl w-full sm:w-[200px] max-w-[90vw]"
        >
            <div className="w-full aspect-square bg-white p-2 rounded-xl shadow-inner flex items-center justify-center transition-transform hover:scale-105 duration-500">
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://youinsports.com"
                    alt="Scan to Connect"
                    className="w-full h-full object-contain"
                />
            </div>
            
            <div className="flex flex-col items-center gap-2 w-full pt-2">
              <span className="text-[9px] md:text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] whitespace-nowrap">
                  SCAN TO CONNECT
              </span>
              <button 
                onClick={() => window.open('https://youinsports.com', '_blank')}
                className="w-full relative overflow-hidden bg-primary group/qr text-white text-[9px] md:text-[10px] font-bold py-3 px-3 rounded-xl flex items-center justify-center transition-colors tracking-wide shadow-lg border border-white/10"
              >
                {/* Embedded subtle inner hover gradient wipe */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[30deg] opacity-0 group-hover/qr:opacity-100 group-hover/qr:animate-[swipe_1s_ease-in-out_infinite]" />
                <span className="relative z-10 transition-transform duration-300 group-hover/qr:scale-105">CONNECT &rarr;</span>
              </button>
            </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HomeHero;
