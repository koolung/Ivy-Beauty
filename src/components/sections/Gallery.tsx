'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/images/lashlift.jpg', alt: 'Lash Lift', category: 'Lash & Brow' },
  { id: 2, src: '/images/wispy.png', alt: 'Wispy', category: 'Add-on' },
  { id: 3, src: '/images/color.jpg', alt: 'Color', category: 'Add-on' },
  { id: 4, src: '/images/classic.jpg', alt: 'Classic', category: 'Full Sets' },
  { id: 5, src: '/images/hybrid.jpg', alt: 'Hybrid', category: 'Full Sets' },
  { id: 6, src: '/images/2d.jpg', alt: '2D Volume', category: 'Full Sets' },
  { id: 7, src: '/images/wet.jpg', alt: 'Wet Volume', category: 'Full Sets' },
  { id: 8, src: '/images/volume.jpg', alt: 'Volume', category: 'Full Sets' }
];

const categories = ['All', 'Lash & Brow', 'Full Sets', 'Add-on'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Full Sets');
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
    <section id="gallery" className="py-20" style={{
      background: 'linear-gradient(to bottom, white, rgba(149, 30, 56, 0.05))'
    }}>
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
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 border border-gray-200"
                style={selectedCategory === category ? {
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)',
                  color: 'white',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  borderColor: 'transparent'
                } : {
                  background: 'white',
                  color: '#6b7280'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(149, 30, 56, 0.05)';
                    (e.target as HTMLElement).style.color = '#951e38';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    (e.target as HTMLElement).style.backgroundColor = 'white';
                    (e.target as HTMLElement).style.color = '#6b7280';
                  }
                }}
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
                <div className="aspect-[4/5] relative">
                  {/* Gallery Image */}
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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
          <a href="https://dikidi.app/1904636" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Appointment
          </a>
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
              className="w-full h-full max-w-3xl max-h-[80vh] rounded-2xl overflow-hidden bg-black/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredImages.find(img => img.id === selectedImage)?.src}
                alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
