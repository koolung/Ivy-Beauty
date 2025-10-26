'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Heart, X } from 'lucide-react';

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
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Book Appointment', href: 'https://dikidi.app/1904636' },
    { name: 'Cancellation Policy', href: '#' },
    { name: 'Refill Policy', href: '#' },
  ],
};

export function Footer() {
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [isRefillOpen, setIsRefillOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCancelOpen(false);
        setIsRefillOpen(false);
        setIsPrivacyOpen(false);
        setIsTermsOpen(false);
        setIsCookieOpen(false);
      }
    };
    if (isCancelOpen || isRefillOpen || isPrivacyOpen || isTermsOpen || isCookieOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isCancelOpen, isRefillOpen, isPrivacyOpen, isTermsOpen, isCookieOpen]);

  return (
    <>
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
              Ivy Beauty Lash & SPMU
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Licensed home-based beauty studio in Timberlea, Nova Scotia. Specializing in 
              eyelash extensions, lash lifts, brow lamination, and semi-permanent makeup since 2021.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5" style={{ color: '#951e38' }} />
                <span>1937 St. Margarets Bay Road, Timberlea, NS B3T 1C3</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" style={{ color: '#951e38' }} />
                <span>Contact for Booking</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" style={{ color: '#951e38' }} />
                <span>ivy@ivybeautylashnpmu.ca</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ivybeauty.hfx/"
                target="_blank"
                rel="noopener noreferrer"
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
                  {item.name === 'Cancellation Policy' ? (
                    <button
                      onClick={() => setIsCancelOpen(true)}
                      className="text-gray-600 hover:text-rose-600 transition-colors duration-200 text-left w-full"
                    >
                      {item.name}
                    </button>
                  ) : item.name === 'Refill Policy' ? (
                    <button
                      onClick={() => setIsRefillOpen(true)}
                      className="text-gray-600 hover:text-rose-600 transition-colors duration-200 text-left w-full"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                      {...(item.href.includes('dikidi.app') && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                      })}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

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
              © 2025 Ivy Beauty Lash & SPMU. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setIsCookieOpen(true)}
                className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current" style={{ color: '#951e38' }} />
              <span>by <a href="https://bedfordwebservices.com" style={{ color: '#222087ff', textDecoration: 'underline' }}>Bedford Web Services</a></span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
    
    {/* Cancellation Policy Modal */}
    {isCancelOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={() => setIsCancelOpen(false)}
      >
        <div
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-auto p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsCancelOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-rose-600 transition-colors duration-200"
            aria-label="Close cancellation policy"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
          <p className="text-gray-700 mb-4">Please allow at least 24 hours notice for any cancellations.</p>

          <p className="text-gray-700 mb-4">There will be a 15 minutes grace period before you will be charged a $10 late fee.</p>

          <p className="text-gray-700 mb-4">Cancellation Policy — If you cancel or do not show up without giving at least 24 hours’ notice, a $30 cancellation fee will be required before booking your next appointment.</p>

          <p className="text-gray-700 mb-4">If multiple late cancellations occur, we reserve the right to refuse service.</p>

          <p className="text-red-600 font-bold mt-4">IF YOU DO NOT SHOW UP with ANY NOTICE could result in being BLOCKED FROM BOOKING</p>

          <div className="text-right mt-6">
            <button
              onClick={() => setIsCancelOpen(false)}
              className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    )}
    {/* Refill Policy Modal */}
    {isRefillOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={() => setIsRefillOpen(false)}
      >
        <div
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-auto p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsRefillOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-rose-600 transition-colors duration-200"
            aria-label="Close refill policy"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold mb-4">Refill Policy</h2>
          <p className="text-gray-700 mb-4">Refills for eyelash extensions are required approximately every 2-3 weeks depending on natural lash cycle and proper care.</p>
          <p className="text-gray-700 mb-4">A refill scheduled over 4 weeks from the previous appointment will need to be rescheduled as a full set. No matter how many lash extensions remain.</p>

          <div className="text-right mt-6">
            <button
              onClick={() => setIsRefillOpen(false)}
              className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    )}
    {/* Privacy Policy Modal */}
    {isPrivacyOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={() => setIsPrivacyOpen(false)}
      >
        <div
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-auto p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsPrivacyOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-rose-600 transition-colors duration-200"
            aria-label="Close privacy policy"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-gray-700 mb-4">We respect your privacy. We collect only the information necessary to provide booking and communication services. Your email and contact details will be used to confirm appointments and send occasional updates or promotions. We do not sell or share personal information with third parties except for service providers required to process bookings or payments.</p>

          <div className="text-right mt-6">
            <button
              onClick={() => setIsPrivacyOpen(false)}
              className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    )}

    {/* Terms of Service Modal */}
    {isTermsOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={() => setIsTermsOpen(false)}
      >
        <div
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-auto p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsTermsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-rose-600 transition-colors duration-200"
            aria-label="Close terms of service"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
          <p className="text-gray-700 mb-4">By booking an appointment you agree to our policies, including cancellation and refill policies, and to provide accurate contact information. Services are provided as described and results may vary. Payments and deposits are handled through our booking provider; additional terms may apply for gift cards, packages, and promotions.</p>

          <div className="text-right mt-6">
            <button
              onClick={() => setIsTermsOpen(false)}
              className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    )}

    {/* Cookie Policy Modal */}
    {isCookieOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={() => setIsCookieOpen(false)}
      >
        <div
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-auto p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsCookieOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-rose-600 transition-colors duration-200"
            aria-label="Close cookie policy"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
          <p className="text-gray-700 mb-4">We use cookies to improve site functionality and to provide analytics for enhancing user experience. Cookies used by our booking provider may be set to enable secure booking flows. You can control cookie preferences in your browser settings; disabling certain cookies may affect booking functionality.</p>

          <div className="text-right mt-6">
            <button
              onClick={() => setIsCookieOpen(false)}
              className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    )}
    </>
  );
}
