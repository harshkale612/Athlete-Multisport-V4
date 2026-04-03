import React from 'react';
import { athleteProfile } from '../../data/athleteProfile';

const Footer = () => {
  return (
    <footer
      className="bg-surface/30 backdrop-blur-md border-t border-contrast-alpha/10 py-12 px-6 lg:px-24"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl font-display font-black text-text uppercase">
          {athleteProfile.name}
          <span className="text-primary">.</span>
        </h2>
        <nav aria-label="Footer navigation" className="flex gap-6">
          <a
            href={`mailto:${athleteProfile.socialLinks?.email}`}
            className="text-text-muted hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors"
            aria-label="Contact Harsh Kale via email"
          >
            Contact
          </a>
          <a
            href={athleteProfile.socialLinks?.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors"
            aria-label="Harsh Kale on Instagram"
          >
            Instagram
          </a>
          <a
            href={athleteProfile.socialLinks?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors"
            aria-label="Harsh Kale on LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-contrast-alpha/10 flex justify-center">
        <p className="text-text-muted/50 text-[10px] uppercase tracking-[0.2em] font-medium">
          Powered By{' '}
          <span className="text-text-muted/80 hover:text-primary transition-colors cursor-default">
            YouInSports
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
