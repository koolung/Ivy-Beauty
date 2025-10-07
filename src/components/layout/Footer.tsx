'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

const navigation = {
  services: [
    { name: 'Classic Lash Extensions', href: '#' },
    { name: 'Volume Lash Extensions', href: '#' },
    { name: 'Hybrid Lash Extensions', href: '#' },
    { name: 'Lash Lift & Tint', href: '#' },
    { name: 'Brow Services', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Book Appointment', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Aftercare Guide', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer 
      className="border-t"
      style={{
        background: 'linear-gradient(to bottom, rgba(149, 30, 56, 0.05), white)',
        borderColor: 'rgba(149, 30, 56, 0.1)'
      }}
    >
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="text-3xl font-serif font-bold text-gradient mb-4">
              Ivy Beauty Lash
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform your look with premium eyelash extensions and beauty services. 
              We enhance your natural beauty with expert precision and luxury care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5" style={{ color: '#951e38' }} />
                <span>123 Beauty Lane, Suite 456, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" style={{ color: '#951e38' }} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" style={{ color: '#951e38' }} />
                <span>hello@ivybeauty.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors duration-200"
                style={{
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #7a1a2e 0%, #951e38 100%)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)';
                }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors duration-200"
                style={{
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #7a1a2e 0%, #951e38 100%)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)';
                }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors duration-200"
                style={{
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #7a1a2e 0%, #951e38 100%)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)';
                }}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-soft-black mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-soft-black mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-soft-black mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-rose-100 pt-8 pb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-soft-black mb-4">
              Stay Updated with Beauty Tips & Offers
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for exclusive offers, beauty tips, and the latest trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 transition-colors duration-200 focus:border-[#951e38] focus:outline-none focus:ring-2 focus:ring-[#951e38]/10"
              />
              <button 
                className="text-white px-8 py-3 rounded-2xl font-medium transition-colors duration-200 whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-rose-100 pt-8 pb-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 Ivy Beauty Lash. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current" style={{ color: '#951e38' }} />
              <span>by Ivy Beauty Lash Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
