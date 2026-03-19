import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { athleteProfile } from '../../data/athleteProfile';

const CTASection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5 relative overflow-hidden flex items-center justify-center">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
          Work With Me
        </span>
        <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-text mb-8">
          Ready to <br/><span className="text-primary">Collaborate?</span>
        </h2>
        <p className="text-lg text-text-muted mb-12">
          Whether it's sponsorships, partnerships, or media inquiries, let's build something exceptional together.
        </p>
        
        <button 
          onClick={() => window.location.href = `mailto:${athleteProfile.socialLinks.email}`}
          className="group relative inline-flex items-center gap-4 bg-text text-background font-bold px-10 py-5 rounded-full uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Get in Touch
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
