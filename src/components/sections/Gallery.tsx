'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/api/placeholder/400/500',
    alt: 'Classic lash extensions - natural look',
    category: 'Classic'
  },
  {
    id: 2,
    src: '/api/placeholder/400/500',
    alt: 'Volume lash extensions - dramatic look',
    category: 'Volume'
  },
  {
    id: 3,
    src: '/api/placeholder/400/500',
    alt: 'Hybrid lash extensions - balanced look',
    category: 'Hybrid'
  },
  {
    id: 4,
    src: '/api/placeholder/400/500',
    alt: 'Lash lift and tint results',
    category: 'Lift & Tint'
  },
  {
    id: 5,
    src: '/api/placeholder/400/500',
    alt: 'Before and after lash transformation',
    category: 'Before & After'
  },
  {
    id: 6,
    src: '/api/placeholder/400/500',
    alt: 'Eyebrow shaping and tinting',
    category: 'Brows'
  },
  {
    id: 7,
    src: '/api/placeholder/400/500',
    alt: 'Mega volume lash extensions',
    category: 'Mega Volume'
  },
  {
    id: 8,
    src: '/api/placeholder/400/500',
    alt: 'Natural lash enhancement',
    category: 'Natural'
  },
  {
    id: 9,
    src: '/api/placeholder/400/500',
    alt: 'Special occasion lashes',
    category: 'Special'
  }
];

const categories = ['All', 'Classic', 'Volume', 'Hybrid', 'Lift & Tint', 'Brows'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const currentImageIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1;

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-black mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our stunning work and see the beautiful transformations 
            we create for our clients every day.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div 
                  className="aspect-[4/5] bg-gradient-to-br from-rose-200 to-rose-300 relative"
                >
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                    {image.alt}
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    {image.category}
                  </div>
                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium border border-white/30 hover:bg-white/30 transition-colors duration-200">
                      View Full Size
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            View More on Instagram
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {currentImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {currentImageIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <div 
              className="w-full h-full max-w-3xl max-h-[80vh] bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl flex items-center justify-center text-white font-medium text-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages.find(img => img.id === selectedImage)?.alt}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
