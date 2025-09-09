'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    service: 'Volume Lash Extensions',
    rating: 5,
    text: 'Absolutely incredible experience! The team at Ivy Beauty Lash transformed my lashes completely. I wake up every morning feeling gorgeous and confident. The attention to detail and professionalism is unmatched.',
    image: '/api/placeholder/100/100'
  },
  {
    id: 2,
    name: 'Emily Chen',
    service: 'Classic Lash Extensions',
    rating: 5,
    text: 'I have been coming to Ivy Beauty Lash for over two years now, and they never disappoint. The lashes look so natural and last for weeks. The staff is incredibly skilled and makes you feel so comfortable.',
    image: '/api/placeholder/100/100'
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    service: 'Hybrid Lash Extensions',
    rating: 5,
    text: 'Best lash salon in the city! The hybrid lashes gave me the perfect balance of natural and dramatic. I get so many compliments and the retention is amazing. Highly recommend!',
    image: '/api/placeholder/100/100'
  },
  {
    id: 4,
    name: 'Amanda Thompson',
    service: 'Lash Lift & Tint',
    rating: 5,
    text: 'The lash lift and tint was exactly what I needed for a more natural look. The results exceeded my expectations and the process was so relaxing. Will definitely be back!',
    image: '/api/placeholder/100/100'
  },
  {
    id: 5,
    name: 'Rachel Davis',
    service: 'Brow Shaping',
    rating: 5,
    text: 'Perfect brows every time! The attention to detail and the way they shape my brows to complement my face is incredible. I trust them completely with my beauty routine.',
    image: '/api/placeholder/100/100'
  },
  {
    id: 6,
    name: 'Lisa Wilson',
    service: 'Mega Volume Lashes',
    rating: 5,
    text: 'Stunning results! The mega volume lashes made me feel like a Hollywood star. The quality is outstanding and the lashes are so comfortable I forget I&apos;m wearing them.',
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
    <section id="reviews" className="py-20 bg-gradient-to-b from-rose-50 to-white">
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
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 py-12"
                >
                  <div className="glass-card max-w-4xl mx-auto text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
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
                        <div className="w-16 h-16 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full flex items-center justify-center text-white font-medium">
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-rose-400 to-rose-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
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
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">500+</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">98%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">5000+</div>
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
          <button className="btn-primary">
            Read More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
}
