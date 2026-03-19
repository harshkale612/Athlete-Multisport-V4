import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data/achievementsData';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const iconMap = { Trophy, Medal, Award, Star };

const Achievements = ({ sportKey }) => {
  const filtered = sportKey 
    ? achievementsData.filter(a => a.sportKey === sportKey || a.sportKey === 'multi')
    : achievementsData;

  const dataToDisplay = filtered.slice(0, 8); // Limits for UI preview
  
  if (dataToDisplay.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text">
            Trophy <span className="text-transparent text-edge-outline">Cabinet</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataToDisplay.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background/80 backdrop-blur-md border border-white/5 p-6 rounded-[2rem] hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 relative group"
              >
                 <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-primary transition-colors" />
                 
                 <div className="flex justify-between items-start mb-6">
                   <div className="p-3 rounded-full bg-surface border border-white/10 group-hover:bg-primary/20 transition-colors">
                     <Icon size={24} className="text-primary" />
                   </div>
                   <span className="text-3xl font-black font-mono text-white/5 pointer-events-none select-none group-hover:text-white/10 transition-colors">
                     {item.year}
                   </span>
                 </div>

                 <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                   {item.title}
                 </h3>
                 <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                   {item.description}
                 </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
