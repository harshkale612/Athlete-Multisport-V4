'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { coachesData } from '../../data/coachesData';

interface CoachesProps {
  sportKey?: string;
}

const Coaches = ({ sportKey }: CoachesProps) => {
  const filtered = sportKey
    ? coachesData.filter((c) => c.sportKey === sportKey)
    : coachesData;

  if (filtered.length === 0) return null;

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-contrast-alpha/10 relative overflow-hidden"
      aria-labelledby="coaches-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Mentors &amp; Coaches
          </span>
          <h2
            id="coaches-heading"
            className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text"
          >
            Guided by <span className="text-transparent text-edge-outline">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((coach, idx) => (
            <motion.article
              key={coach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface/50 backdrop-blur-md border border-contrast-alpha/10 p-8 rounded-3xl hover:-translate-y-2 hover:border-primary/50 transition-all group"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-contrast-alpha/20 group-hover:border-primary transition-colors flex-shrink-0">
                  <Image
                    src={coach.imageUrl}
                    alt={`Coach ${coach.name}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-text group-hover:text-primary transition-colors"
                    itemProp="name"
                  >
                    {coach.name}
                  </h3>
                  <span
                    className="text-xs uppercase tracking-widest text-text-subtle font-bold"
                    itemProp="jobTitle"
                  >
                    {coach.role}
                  </span>
                </div>
              </div>

              <blockquote className="text-text-muted italic leading-relaxed text-sm">
                &ldquo;{coach.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-contrast-alpha/10 flex justify-between items-center text-xs text-text-subtle font-bold uppercase tracking-widest">
                <span>{coach.experience}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
