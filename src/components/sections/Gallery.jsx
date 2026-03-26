import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryData } from '../../data/galleryData';

const Gallery = ({ sportKey }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = sportKey 
    ? galleryData.filter(item => item.type === 'image' && (item.sportKey === sportKey || item.sportKey === 'multi'))
    : galleryData.filter(item => item.type === 'image');
    
  // Show max 6 on preview
  const previewImages = images.slice(0, 6);

  if (previewImages.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-contrast-alpha/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Media
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text">
            Visual <span className="text-transparent text-edge-outline">Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {previewImages.map((img, idx) => (
             <motion.div
               key={img.id || idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="aspect-square w-full rounded-2xl overflow-hidden cursor-pointer group relative"
               onClick={() => setSelectedImage(img)}
             >
               <img src={img.src} alt={img.alt || 'Gallery image'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
             </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setSelectedImage(null)}
             className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
           >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-6 right-6 p-2 rounded-full glass text-white hover:text-primary transition-colors hover:rotate-90 z-50 duration-300"
              >
                <X size={28} />
              </button>
              
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-xl"
              />
           </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
