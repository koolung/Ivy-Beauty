'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20" style={{
      background: 'linear-gradient(to bottom, rgba(149, 30, 56, 0.05), white)'
    }}>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-black mb-6">
              About <span className="text-gradient">Ivy Beauty Lash & SPMU</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Established in 2021, Ivy Beauty Lash & SPMU is a fully licensed home-based beauty 
              studio located in Timberlea, Nova Scotia. Specializing in professional eyelash 
              extensions, lash lifts, brow lamination, and semi-permanent makeup for brows and lips.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a focus on precision, comfort, and natural enhancement, Ivy provides a relaxing 
              and personalized beauty experience. Our flagship service, Hybrid Lash Extensions, 
              offers the perfect balance between classic and volume for a soft, full, textured look.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#951e38' }}>4+</div>
                <div className="text-gray-600">Years of Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#951e38' }}>Licensed</div>
                <div className="text-gray-600">Home Studio</div>
              </div>
            </div>

            <a href="https://dikidi.app/1904636" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Appointment
            </a>
          </motion.div>

          {/* Image/Visual */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img
              src="/images/classic.jpg"
              alt="Classic Lash"
              className="w-full h-full object-cover"
              loading="lazy"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center floating-animation">
              <Award className="w-12 h-12" style={{ color: '#951e38' }} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center floating-animation" style={{ animationDelay: '1s' }}>
              <Heart className="w-10 h-10" style={{ color: '#951e38' }} />
            </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
          <h3 className="text-3xl font-bold text-center text-soft-black mb-12">
            Why Choose Ivy Beauty Lash & SPMU?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                }}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-soft-black mb-3">Licensed Professional</h4>
              <p className="text-gray-600">
                Certified lash technician, brow artist, and permanent makeup specialist 
                with ongoing training in the latest techniques.
              </p>
            </div>
            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-soft-black mb-3">Home Studio Comfort</h4>
              <p className="text-gray-600">
                Enjoy a relaxing, private beauty experience in our fully licensed 
                home studio in Timberlea, Nova Scotia.
              </p>
            </div>
            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-soft-black mb-3">Natural Enhancement</h4>
              <p className="text-gray-600">
                Specializing in natural-looking results that enhance your features
                with precision, comfort, and personalized care.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
