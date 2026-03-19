import React from 'react';
import { motion } from 'framer-motion';
import { coachesData } from '../../data/coachesData';

const Coaches = ({ sportKey }) => {
  const filteredOptions = sportKey 
     ? coachesData.filter(c => c.sportKey === sportKey)
     : coachesData;

  if (filteredOptions.length === 0) return null;

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
            Mentors & Coaches
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text">
            Guided by <span className="text-transparent text-edge-outline">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOptions.map((coach, idx) => (
             <motion.div
               key={coach.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-surface/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-primary/50 transition-all group"
             >
               <div className="flex items-center gap-4 mb-6">
                 <img src={coach.imageUrl} alt={coach.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:border-primary transition-colors" />
                 <div>
                   <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{coach.name}</h3>
                   <span className="text-xs uppercase tracking-widest text-text-subtle font-bold">{coach.role}</span>
                 </div>
               </div>
               
               <p className="text-text-muted italic leading-relaxed text-sm">"{coach.quote}"</p>
               
               <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs text-text-subtle font-bold uppercase tracking-widest">
                 <span>{coach.experience}</span>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
