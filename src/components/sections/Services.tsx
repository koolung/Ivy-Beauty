'use client';

import { motion } from 'framer-motion';
import { Eye, Sparkles, Heart, Clock, Star, Users } from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'Classic Lash Extensions',
    description: 'Natural-looking individual lashes for everyday elegance.',
    price: 'From $120',
    duration: '2-3 hours',
    image: '/api/placeholder/400/300'
  },
  {
    icon: Sparkles,
    title: 'Volume Lash Extensions', 
    description: 'Fuller, more dramatic lashes with multiple extensions per natural lash.',
    price: 'From $180',
    duration: '3-4 hours',
    image: '/api/placeholder/400/300'
  },
  {
    icon: Heart,
    title: 'Hybrid Lash Extensions',
    description: 'Perfect blend of classic and volume for customized fullness.',
    price: 'From $150',
    duration: '2.5-3.5 hours', 
    image: '/api/placeholder/400/300'
  },
  {
    icon: Star,
    title: 'Lash Lift & Tint',
    description: 'Enhance your natural lashes with lifting and tinting.',
    price: 'From $80',
    duration: '1-1.5 hours',
    image: '/api/placeholder/400/300'
  },
  {
    icon: Users,
    title: 'Brow Shaping & Tint',
    description: 'Professional eyebrow shaping and tinting services.',
    price: 'From $60',
    duration: '45-60 minutes',
    image: '/api/placeholder/400/300'
  },
  {
    icon: Clock,
    title: 'Lash Fill & Maintenance',
    description: 'Keep your lashes looking perfect with regular touch-ups.',
    price: 'From $70',
    duration: '1-2 hours',
    image: '/api/placeholder/400/300'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-rose-50">
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
            Discover our range of premium beauty services designed to enhance your natural beauty
            with expert techniques and luxury care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-soft-black mb-3 group-hover:text-rose-600 transition-colors duration-300">
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
                      <div className="text-2xl font-bold text-rose-600">
                        {service.price}
                      </div>
                      <button className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-3 rounded-full font-medium hover:from-rose-500 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Book Now
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <Sparkles className="w-6 h-6 text-rose-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              <button className="btn-primary">
                Free Consultation
              </button>
              <button className="btn-secondary">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
