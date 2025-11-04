'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'kristine efenio',
    service: 'Volume Lash Extensions',
    rating: 5,
    text: 'Ivy is the best ✨ she REALLY understands my eye shape. She is so sweet, she is super accommodating, and she makes me feel beautiful everytime. She really cares about making sure you feel comfortable and making sure your lashes stay healthy.',
    image: '/api/placeholder/100/100'
  },
  {
    id: 2,
    name: 'Kallista N',
    service: 'Classic Lash Extensions',
    rating: 5,
    text: 'Hands down the best lash tech! Ivy’s attention to detail, professionalism, and expertise is unmatched. Ivy has been doing my lashes for over a year and I have never left an appointment disappointed.',
    image: '/api/placeholder/100/100'
  },
  {
    id: 3,
    name: 'Jeizza',
    service: 'Hybrid Lash Extensions',
    rating: 5,
    text: 'We had a wonderful experience at Ivy Beauty Lashes! Ivy is incredibly accommodating, kind, and patient, especially with first-time clients. She took the time to explain everything thoroughly and made sure we felt comfortable throughout the process.',
    image: '/api/placeholder/100/100'
  },
  {
    id: 4,
    name: 'Ellie-Aphelia',
    service: 'Lash Lift & Tint',
    rating: 5,
    text: 'So, I have had lashes extensions for a decade, and traveling the country (extensively) has resulted in experience with at least a dozen techs, and I can say wholeheartedly that Ivy is the ABSOLUTE BEST!!!',
    image: '/api/placeholder/100/100'
  },
  {
    id: 5,
    name: 'Lucia Duarte Baron',
    service: 'Brow Shaping',
    rating: 5,
    text: 'I highly recommended visiting IVY BEAUTY. The location is very convenient, parking is available and the place is super clean, nice and neat.',
    image: '/api/placeholder/100/100'
  },
  {
    id: 6,
    name: 'Erica Goodwin',
    service: 'Mega Volume Lashes',
    rating: 5,
    text: 'Absolutely recommend Ivy Beauty, she is fantastic! I have been seeing her for a few years now and am so happy with her work! The salon is clean and very inviting! A true spa feeling!!',
    image: '/api/placeholder/100/100'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="reviews" className="py-20" style={{
      background: 'linear-gradient(to bottom, rgba(149, 30, 56, 0.05), white)'
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Read what our satisfied clients 
            have to say about their experience at Ivy Beauty Lash.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 py-12"
                >
                  <div className="glass-card max-w-4xl mx-auto text-center relative">
                    {/* Quote Icon */}
                    <div 
                      className="absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                      }}
                    >
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="pt-8">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-medium"
                          style={{
                            background: 'linear-gradient(135deg, rgba(149, 30, 56, 0.2) 0%, rgba(149, 30, 56, 0.3) 100%)'
                          }}
                        >
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-soft-black text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.service}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={index === currentIndex ? {
                  width: '2rem',
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                } : {
                  backgroundColor: '#d1d5db'
                }}
                onMouseEnter={(e) => {
                  if (index !== currentIndex) {
                    (e.target as HTMLElement).style.backgroundColor = '#9ca3af';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentIndex) {
                    (e.target as HTMLElement).style.backgroundColor = '#d1d5db';
                  }
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#951e38' }}>5.0★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#951e38' }}>4+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#951e38' }}>98%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#951e38' }}>2000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="https://dikidi.app/1904636" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
