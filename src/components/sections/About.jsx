import React from 'react';
import { motion } from 'framer-motion';
import { athleteProfile } from '../../data/athleteProfile';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        {/* Left: Bio */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-2 border-primary pl-3 mb-4 block">
                The Origin
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text">
              Driven by <span className="text-primary">Purpose.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-text-muted text-lg leading-relaxed"
          >
            <p>{athleteProfile.bio}</p>
          </motion.div>
        </div>

        {/* Right: Quick Highlights */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          {athleteProfile.keyHighlights?.map((highlight, idx) => (
             <motion.div
             key={idx}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: idx * 0.1 }}
             className="bg-surface/30 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-surface/50 transition-colors"
           >
             <span className="text-3xl font-black text-white font-mono mb-2">{highlight.value}</span>
             <span className="text-xs uppercase tracking-widest text-text-subtle font-bold">{highlight.label}</span>
           </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
