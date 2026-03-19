import React from 'react';
import { motion } from 'framer-motion';
import { athleteProfile } from '../../data/athleteProfile';

const HomeHero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden flex flex-col justify-center bg-background">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm md:text-base border-l-2 border-primary pl-3">
              Elite Multi-Sport Athlete
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none uppercase tracking-tighter text-text drop-shadow-lg"
          >
            {athleteProfile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-text-muted max-w-xl leading-relaxed"
          >
            {athleteProfile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white font-bold px-8 py-4 rounded-full uppercase tracking-widest hover:bg-primary-hover transition-colors shadow-glow"
            >
              Explore Journey
            </button>
            <button 
              onClick={() => document.getElementById('sports-overview')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-surface/50 backdrop-blur-md text-text font-bold px-8 py-4 rounded-full uppercase tracking-widest border border-white/10 hover:bg-surface transition-colors"
            >
              View Stats
            </button>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full aspect-[3/4] md:max-h-[75vh] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group"
        >
          {/* Subtle Glow Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-3xl opacity-50" />
          
          <img 
            src={athleteProfile.profileImage}
            alt={athleteProfile.name}
            className="absolute inset-0 z-10 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Internal Overlay */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/80 via-background/0 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default HomeHero;
