import React from 'react';
import { motion } from 'framer-motion';
import { sportsData } from '../../data/sportsData';

const Stats = ({ sportKey }) => {
  const sport = sportsData.find(s => s.id === sportKey);
  const sportStats = sport?.keyStats || [];
  
  if (sportStats.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Performance Index
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text">
            By The <span className="text-transparent text-edge-outline">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {sportStats.map((stat, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-surface/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-surface/50 hover:border-primary/50 transition-colors group"
             >
               <span className="text-5xl md:text-6xl font-black font-mono text-white mb-2 group-hover:text-primary transition-colors">{stat.value}</span>
               <span className="text-xs uppercase tracking-widest text-text-subtle font-bold">{stat.label}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
