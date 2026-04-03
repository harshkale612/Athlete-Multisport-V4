'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { sportsData } from '../../data/sportsData';

const SportsOverview = () => {
  return (
    <section
      id="sports-overview"
      className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30 relative overflow-hidden"
      aria-labelledby="sports-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            The Disciplines
          </span>
          <h2
            id="sports-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-text"
          >
            Multi-Sport <span className="text-transparent text-edge-outline">Mastery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsData.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={`/sport/${sport.id}`}
                className="block h-full relative rounded-[2rem] overflow-hidden border border-contrast-alpha/10 hover:border-primary/50 transition-colors"
                aria-label={`View Harsh Kale's ${sport.name} profile – ${sport.role}`}
              >
                <div className="aspect-[4/5] w-full relative">
                  <Image
                    src={sport.image || 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1000'}
                    alt={sport.imageAlt || sport.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-display font-black text-white uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                        {sport.name}
                      </h3>
                      <p className="text-sm font-bold uppercase tracking-widest text-white/70">
                        {sport.role}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-surface/50 backdrop-blur-md flex items-center justify-center group-hover:bg-primary transition-colors border border-contrast-alpha/20">
                      <ChevronRight
                        size={24}
                        className="text-white group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsOverview;
