'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setScrollY(currentScrollY);
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md shadow-lg' 
          : 'bg-black/10 backdrop-blur-sm'
      }`}
      style={scrolled ? {
        backgroundColor: 'rgba(149, 30, 56, 0.65)'
      } : undefined}
    >
      <nav className="container-custom section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-start relative"
          >
            <div className="relative w-32 h-14 overflow-hidden">
              {/* Light logo - shows initially */}
              <motion.img
                src="/images/logo/light_rectangle.svg"
                alt="Ivy Beauty Lash"
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  opacity: Math.max(0, 1 - (scrollY / 200))
                }}
              />
              {/* Base logo - shows when scrolled */}
              <motion.img
                src="/images/logo/base_rectangle.svg"
                alt="Ivy Beauty Lash"
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  opacity: Math.min(1, scrollY / 200)
                }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className={`relative font-medium transition-colors duration-300 group ${
                  scrolled 
                    ? 'text-white' 
                    : 'text-gray-700'
                }`}
                style={scrolled ? {
                  color: 'white'
                } : {
                  color: '#374151'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? '#e8b4a0' : '#951e38';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? 'white' : '#374151';
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{
                    background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                  }}
                ></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
              scrolled ? 'text-gray-300' : 'text-gray-600'
            }`}>
            </div>
            <a
              href="https://dikidi.app/1904636"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md transition-colors duration-200"
            style={scrolled ? {
              color: 'white'
            } : {
              color: '#374151'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = scrolled ? '#e8b4a0' : '#951e38';
              (e.target as HTMLElement).style.backgroundColor = scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(149,30,56,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = scrolled ? 'white' : '#374151';
              (e.target as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="block text-gray-700 font-medium py-2 transition-colors duration-200"
                    style={{
                      color: '#374151'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#951e38';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#374151';
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4 border-t border-gray-200 space-y-3"
                >
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>Click for Booking</span>
                  </div>
                  <a
                    href="https://dikidi.app/1904636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full inline-block text-center"
                  >
                    Book Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
