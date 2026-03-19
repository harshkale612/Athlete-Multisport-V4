import React from 'react';
import { athleteProfile } from '../../data/athleteProfile';

const Footer = () => {
  return (
    <footer className="bg-surface/30 backdrop-blur-md border-t border-white/5 py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl font-display font-black text-text uppercase">
          {athleteProfile.name}<span className="text-primary">.</span>
        </h2>
        <div className="flex gap-6">
          <a href={`mailto:${athleteProfile.socialLinks?.email}`} className="text-text-muted hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors">Contact</a>
          <a href={athleteProfile.socialLinks?.instagram} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
