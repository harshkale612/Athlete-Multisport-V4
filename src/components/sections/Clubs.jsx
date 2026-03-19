import React from 'react';
import { motion } from 'framer-motion';
import { clubsData } from '../../data/clubsData';
import { ShieldCheck } from 'lucide-react';

const Clubs = ({ sportKey }) => {
  const filtered = sportKey 
     ? clubsData.filter(c => c.sportKey === sportKey || c.sportKey === 'multi')
     : clubsData;

  if (filtered.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Teams
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text">
            Clubs & <span className="text-transparent text-edge-outline">Memberships</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((club, idx) => (
             <motion.div
               key={club.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-background/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl group hover:border-primary/50 transition-colors"
             >
               <div className="flex flex-col items-center text-center">
                 <div className="w-20 h-20 rounded-full bg-surface-elevated flex items-center justify-center mb-6 p-4 shadow-inner border border-white/10 group-hover:bg-primary/20 transition-colors">
                   <ShieldCheck size={32} className="text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold font-display leading-tight mb-2 text-text group-hover:text-primary transition-colors">
                   {club.name}
                 </h3>
                 <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-text-muted border border-white/10 mb-4">
                   Role: {club.role}
                 </span>
                 <div className="text-[10px] text-text-subtle font-mono uppercase border-t border-white/10 pt-4 w-full">
                   Joined {club.joinedYear}
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;
