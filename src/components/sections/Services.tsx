'use client';

import { motion, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Eye, Sparkles, Heart, Clock, Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Star,
    title: 'Lift Tint Combo',
    description: 'Lift and tint your natural lashes for a wide-eyed, low-maintenance look.',
    price: '$80',
    duration: '1 hour 30 minutes',
    image: '/images/lashlift.jpg'
  },
  {
    icon: Sparkles,
    title: 'Wispy Style Add-On',
    description: 'Light, wispy extensions for a fluttery silhouette.',
    price: '$10',
    duration: '10 minutes',
    image: '/images/wispy.png'
  },
  {
    icon: Eye,
    title: 'Color Lashes Add-On',
    description: 'Add a pop of colour to your set with single or mixed colour lash accents.',
    price: '$10',
    duration: '10 minutes',
    image: '/images/color.jpg'
  },
  {
    icon: Eye,
    title: 'Classic Full Set',
    description: 'Natural-looking individual lashes for everyday elegance and sophistication.',
    // Make the "From" text smaller by using a JSX fragment with a smaller span
    price: (
      <div className="flex flex-col items-end">
        <span className="text-sm text-gray-500">From</span>
        <span>$100</span>
      </div>
    ),
    duration: '2 hours',
    image: '/images/classic.jpg'
  },
  {
    icon: Heart,
    title: 'Hybrid Full Set',
    description: 'Perfect balance between classic and volume lashes for a soft, full, textured look.',
    price: '$120',
    duration: '2 hours 20 minutes',
    image: '/images/hybrid.jpg'
  },
  {
    icon: Users,
    title: '2D Volume Full Set',
    description: 'Soft, layered volume using 2D fans for a textured, natural fullness.',
    price: '$120',
    duration: '2 hours 15 minutes',
    image: '/images/2d.jpg'
  },
  {
    icon: Sparkles,
    title: 'Wet Volume Full Set',
    description: 'Glossy, separated wet-look volume for a bold and modern finish.',
    price: '$130',
    duration: '2 hours 20 minutes',
    image: '/images/wet.jpg'
  },
  {
    icon: Sparkles,
    title: 'Volume Full Set',
    description: 'Maximum fullness using multiple extensions per natural lash for dramatic impact.',
    price: '$140',
    duration: '2 hours 30 minutes',
    image: '/images/volume.jpg'
  }
];

export function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    if (currentSlide < services.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const swipeThreshold = 75;
    const velocityThreshold = 300;
    
    // Determine direction based on offset and velocity
    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      // Swiping right - go to previous slide
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      // Swiping left - go to next slide
      if (currentSlide < services.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < services.length) {
      setCurrentSlide(index);
    }
  };

  // Auto-advance carousel on mobile (surprise element)
  useEffect(() => {
    if (isMobile && !isDragging) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => {
          // Reset to first slide when reaching the end
          return prev >= services.length - 1 ? 0 : prev + 1;
        });
      }, 8000); // Auto-advance every 8 seconds
      
      return () => clearInterval(timer);
    }
  }, [isDragging, isMobile]);

  return (
    <section id="services" className="py-20" style={{
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional eyelash extensions, lash lifts, brow lamination, and semi-permanent makeup 
            in our fully licensed home studio in Timberlea, Nova Scotia.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  {/* Service Image - Top 45% */}
                  <div className="relative h-0 pb-[45%] overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    
                    {/* Icon on Image */}
                    {/* <div className="absolute top-4 right-4 z-10">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div> */}
                  </div>

                  {/* Card Content */}
                  <div className="p-8 relative">
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                      style={{
                        background: 'linear-gradient(135deg, rgba(149, 30, 56, 0.05) 0%, transparent 100%)'
                      }}
                    />
                  </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-soft-black mb-3 group-hover:text-[#951e38] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Details */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </span>
                      </div>

                      {/* Price & Book Button */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold" style={{ color: '#951e38' }}>
                          {service.price}
                        </div>
                        <a 
                          href="https://dikidi.app/1904636" target="_blank" rel="noopener noreferrer"
                          className="text-white px-6 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
                          style={{
                            background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                          }}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <Sparkles className="w-6 h-6" style={{ color: 'rgba(149, 30, 56, 0.7)' }} />
                    </div>
                  </div>
                </motion.div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl mx-2">
            <motion.div
              drag="x"
              dragConstraints={{ left: -200, right: 200 }}
              dragElastic={0.2}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{ 
                x: -currentSlide * 100 + "%"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 50,
                duration: 0.4
              }}
              className="flex"
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="min-w-full px-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0.8,
                      scale: currentSlide === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 mx-2 relative overflow-hidden min-h-[500px] flex flex-col">
                      {/* Service Image - Top 45% */}
                      <div className="relative h-0 pb-[45%] overflow-hidden">
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                        
                        {/* Icon on Image */}
                        {/* <motion.div 
                          className="absolute top-4 right-4 z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                          }}
                          animate={{
                            scale: currentSlide === index ? [1, 1.05, 1] : 1,
                            rotate: currentSlide === index ? [0, 5, -5, 0] : 0
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: currentSlide === index ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div> */}
                      </div>

                      {/* Card Content */}
                      <div className="p-8 flex-1 flex flex-col justify-between relative">
                        {/* Animated background */}
                        <motion.div 
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(135deg, rgba(149, 30, 56, 0.08) 0%, transparent 100%)'
                          }}
                          animate={{
                            opacity: currentSlide === index ? 1 : 0
                          }}
                          transition={{ duration: 0.8 }}
                        />

                        <div className="relative z-10">
                        {/* Floating particles effect (surprise element) */}
                        {currentSlide === index && (
                          <>
                            {[...Array(3)].map((_, i) => {
                              // Use deterministic positions based on index to avoid hydration issues
                              const positions = [
                                { startX: 50, startY: 100, endX: 150, endY: 200 },
                                { startX: 200, startY: 50, endX: 100, endY: 300 },
                                { startX: 120, startY: 250, endX: 250, endY: 150 }
                              ];
                              const pos = positions[i];
                              
                              return (
                                <motion.div
                                  key={i}
                                  className="absolute w-2 h-2 rounded-full bg-[#951e38]/30"
                                  initial={{ x: pos.startX, y: pos.startY, opacity: 0 }}
                                  animate={{
                                    x: [pos.startX, pos.endX, pos.startX],
                                    y: [pos.startY, pos.endY, pos.startY],
                                    opacity: [0, 1, 0]
                                  }}
                                  transition={{
                                    duration: 4 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                    ease: "easeInOut"
                                  }}
                                />
                              );
                            })}
                          </>
                        )}
                        
                        <motion.h3 
                          className="text-3xl font-bold mb-4 text-center text-gray-800"
                          animate={{
                            color: currentSlide === index ? "#951e38" : "#1f2937"
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {service.title}
                        </motion.h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed text-center text-lg">
                          {service.description}
                        </p>
                        
                        <div className="flex justify-center items-center mb-8 space-x-6">
                          <motion.span 
                            className="text-4xl font-bold"
                            style={{ color: '#951e38' }}
                            animate={{
                              scale: currentSlide === index ? [1, 1.1, 1] : 1
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: currentSlide === index ? Infinity : 0 
                            }}
                          >
                            {service.price}
                          </motion.span>
                          <span className="text-sm text-gray-500 flex items-center bg-gray-50 px-4 py-2 rounded-full shadow-sm">
                            <Clock className="w-4 h-4 mr-2" />
                            {service.duration}
                          </span>
                        </div>
                        
                        <motion.a 
                          href="https://dikidi.app/1904636" target="_blank" rel="noopener noreferrer"
                          className="w-full py-4 text-white rounded-2xl font-semibold text-lg shadow-xl inline-block text-center"
                          style={{
                            background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            boxShadow: currentSlide === index ? 
                              ["0 15px 35px rgba(149, 30, 56, 0.3)", "0 20px 45px rgba(149, 30, 56, 0.4)", "0 15px 35px rgba(149, 30, 56, 0.3)"] :
                              "0 10px 25px rgba(149, 30, 56, 0.2)"
                          }}
                          transition={{ 
                            duration: 2.5, 
                            repeat: currentSlide === index ? Infinity : 0 
                          }}
                        >
                          Book Now
                        </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-[#951e38] hover:bg-[#951e38] hover:text-white transition-all duration-300 z-20"
            disabled={currentSlide === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              x: currentSlide === 0 ? -20 : 0,
              opacity: currentSlide === 0 ? 0.5 : 1
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-[#951e38] hover:bg-[#951e38] hover:text-white transition-all duration-300 z-20"
            disabled={currentSlide === services.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              x: currentSlide === services.length - 1 ? 20 : 0,
              opacity: currentSlide === services.length - 1 ? 0.5 : 1
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>

          {/* Enhanced Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
              >
                <motion.div
                  className="w-4 h-4 rounded-full transition-all duration-300"
                  animate={{
                    backgroundColor: currentSlide === index ? "#951e38" : "#d1d5db",
                    scale: currentSlide === index ? 1.3 : 1
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                {currentSlide === index && (
                  <motion.div
                    className="absolute inset-0 w-4 h-4 rounded-full border-2 border-[#951e38]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 2, 
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </button>
            ))}
          </div>


        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-soft-black mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-gray-600 mb-8">
              Schedule a complimentary consultation and let our experts help you choose
              the perfect treatment for your beauty goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" rel="noopener noreferrer" className="btn-primary">
                Free Consultation
              </a>
              <a href="#gallery" className="btn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
