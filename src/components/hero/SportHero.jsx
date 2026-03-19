import React from 'react';
import { motion } from 'framer-motion';
import { sportsData } from '../../data/sportsData';

const SportHero = ({ sportKey }) => {
  const sport = sportsData.find(s => s.id === sportKey);
  
  if (!sport) return null;
  const sportStats = sport.keyStats || [];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16 px-6 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={sport.image || 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1000'}
          alt={`${sport.name} Hero`}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-2 border-primary pl-3 mb-4 block">
              {sport.role}
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-none uppercase tracking-tighter text-white drop-shadow-2xl">
              {sport.name}
            </h1>
          </motion.div>
        </div>

        {/* Key Stats Block on Hero */}
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 max-w-md w-full bg-surface/30 backdrop-blur-xl border border-white/10 p-6 rounded-3xl"
        >
          {sportStats.slice(0, 2).map((stat, idx) => (
             <div key={idx} className="flex-1 border-r last:border-0 border-white/10 px-4 first:pl-0 last:pr-0">
               <span className="text-4xl font-black text-white block mb-1 font-mono">{stat.value}</span>
               <span className="text-xs uppercase tracking-widest text-text-subtle font-bold">{stat.label}</span>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SportHero;
