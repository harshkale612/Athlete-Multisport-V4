import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { postsData } from '../../data/postsData';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';

const Posts = ({ sportKey }) => {
  // Filter posts
  const filteredPosts = sportKey 
    ? postsData.filter(p => p.sport === sportKey || p.sport === 'multi' || !p.sport)
    : postsData;

  const publicPosts = filteredPosts.slice(0, 6);

  if (publicPosts.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block border-l-2 border-primary pl-3">
              Social Wall
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text">
              Latest from <span className="text-transparent text-edge-outline">YouInSports</span>
            </h2>
          </motion.div>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-3 text-text hover:text-primary uppercase tracking-widest font-bold text-sm transition-colors"
          >
            Follow Athlete
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicPosts.map((post, index) => (
             <motion.div
               key={post.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-surface/30 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer"
             >
                {/* Image */}
                <div className="aspect-square w-full relative overflow-hidden border-b border-white/5">
                  <img src={post.image} alt={post.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                     <p className="text-white text-sm line-clamp-3 leading-relaxed drop-shadow-lg">{post.caption}</p>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="p-4 flex items-center justify-between text-text-muted">
                   <div className="flex gap-4">
                     <span className="flex items-center gap-1.5 text-xs font-bold hover:text-primary transition-colors">
                       <Heart size={16} /> {post.likesCount}
                     </span>
                     <span className="flex items-center gap-1.5 text-xs font-bold hover:text-blue-400 transition-colors">
                       <MessageCircle size={16} /> {post.commentsCount}
                     </span>
                   </div>
                   <span className="text-[10px] uppercase tracking-wider font-mono opacity-60">
                     YouInSports
                   </span>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
