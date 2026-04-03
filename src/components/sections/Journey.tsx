'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../../data/timelineData';

interface JourneyProps {
  sportKey?: string;
}

const Journey = ({ sportKey }: JourneyProps) => {
  const filteredTimeline = sportKey
    ? timelineData.filter((t) => t.sportKey === sportKey)
    : timelineData;

  if (filteredTimeline.length === 0) return null;

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30 border-t border-contrast-alpha/10 relative overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Timeline
          </span>
          <h2
            id="journey-heading"
            className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text"
          >
            The <span className="text-transparent text-edge-outline">Journey</span>
          </h2>
        </motion.div>

        <ol className="space-y-12" aria-label="Career timeline">
          {filteredTimeline.map((item, idx) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-start gap-8 group"
            >
              {/* Dot & Line */}
              <div className="flex flex-col items-center h-full pt-2" aria-hidden="true">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 group-hover:scale-150 transition-transform" />
                {idx !== filteredTimeline.length - 1 && (
                  <div className="w-0.5 h-full bg-contrast-alpha/10 mt-2" />
                )}
              </div>

              {/* Content */}
              <article className="flex-1 bg-surface/50 backdrop-blur-md p-8 rounded-3xl border border-contrast-alpha/10 group-hover:border-primary/50 transition-colors">
                <time
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary uppercase tracking-widest mb-4"
                  dateTime={item.yearOrDate}
                >
                  {item.yearOrDate}
                </time>
                <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">{item.description}</p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
