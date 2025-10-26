'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ReCaptchaV3 {
  ready: () => Promise<void>;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

interface Window {
  grecaptcha?: ReCaptchaV3;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Ldx5PcrAAAAAN1ZAGtgw_hPgT3mDSNRoZ9b3TUM';
    if (!window.document.querySelector(`#recaptcha-script`)) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
      script.async = true;
      script.onload = () => setRecaptchaReady(true);
      document.body.appendChild(script);
    } else {
      setRecaptchaReady(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage(null);

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Ldx5PcrAAAAAN1ZAGtgw_hPgT3mDSNRoZ9b3TUM';

      const grecaptcha = (window as Window).grecaptcha;
      if (!grecaptcha?.execute) {
        setStatus('error');
        setStatusMessage('reCAPTCHA not ready. Please try again shortly.');
        return;
      }

      const token = await grecaptcha.execute(siteKey, { action: 'contact' });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus('success');
        setStatusMessage('Message sent — we will be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(json.error || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage('Server error — please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20" style={{
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your look? Contact us today to schedule your appointment 
            or ask any questions about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card"
          >
            <h3 className="text-2xl font-bold text-soft-black mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 transition-colors duration-200 bg-white/50"
                    placeholder="Your name"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#951e38';
                      e.target.style.outline = '2px solid rgba(149, 30, 56, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.outline = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-colors duration-200 bg-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-colors duration-200 bg-white/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-colors duration-200 bg-white/50"
                  >
                    <option value="">Select a service</option>
                    <option value="classic">Classic Lash Extensions</option>
                    <option value="volume">Volume Lash Extensions</option>
                    <option value="hybrid">Hybrid Lash Extensions</option>
                    <option value="lift-tint">Lash Lift & Tint</option>
                    <option value="brows">Brow Services</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-colors duration-200 bg-white/50 resize-none"
                  placeholder="Tell us about your desired look or any questions you have..."
                />
              </div>

              {statusMessage && (
                <div className={`p-4 rounded-2xl ${
                  status === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {statusMessage}
                </div>
              )}
              
              <button
                type="submit"
                disabled={!recaptchaReady || status === 'loading'}
                className={`w-full btn-primary ${
                  !recaptchaReady || status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-soft-black mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                    }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-black mb-1">Address</h4>
                    <p className="text-gray-600">
                      1937 St. Margarets Bay Road<br />
                      Timberlea, NS<br />
                      B3T 1C3
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                    }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-black mb-1">Phone</h4>
                    <p className="text-gray-600">Contact for booking</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                    }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-black mb-1">Email</h4>
                    <p className="text-gray-600">contact@ivybeautylashnpmu.ca</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-soft-black mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-medium text-soft-black">9:00 AM - 6:30 PM</span>
                </div>

              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-soft-black mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ivybeauty.hfx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-colors duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                  }}
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-colors duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                  }}
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center text-white hover:from-rose-500 hover:to-rose-600 transition-colors duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #951e38 0%, #b22a47 100%)'
                  }}
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
