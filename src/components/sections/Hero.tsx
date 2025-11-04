'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

// Custom hook to track scroll position
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

// Background image component with scroll effects
function ScrollingBackgroundImage() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Static values to remove scroll-based animations temporarily
  const scale = 2.2;
  const opacity = 0.4;

  return (
    <div 
      className="background-image-container absolute inset-0 w-full h-screen transition-all duration-300 ease-out"
      style={{
        backgroundImage: 'url(/images/main.png)',
        backgroundSize: isMobile ? 'cover' : 'contain',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        transform: `scale(${Math.min(scale, 1)})`,
        opacity: opacity,
        transformOrigin: 'center top',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    />
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#f4e4e0" />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

// Fixed positions for floating elements to avoid hydration issues
const floatingElements = [
  { id: 1, left: 10, top: 20, delay: 0 },
  { id: 2, left: 80, top: 15, delay: 0.5 }, // reduced from 85 to 80
  { id: 3, left: 25, top: 65, delay: 1 },
  { id: 4, left: 75, top: 80, delay: 1.5 },
  { id: 5, left: 85, top: 45, delay: 2 }, // reduced from 90 to 85
  { id: 6, left: 15, top: 90, delay: 2.5 },
  { id: 7, left: 60, top: 25, delay: 3 },
  { id: 8, left: 40, top: 75, delay: 3.5 },
  { id: 9, left: 88, top: 60, delay: 4 }, // reduced from 95 to 88
  { id: 10, left: 8, top: 40, delay: 4.5 }, // increased from 5 to 8
  { id: 11, left: 70, top: 10, delay: 0.2 },
  { id: 12, left: 30, top: 85, delay: 1.2 },
  { id: 13, left: 80, top: 35, delay: 2.2 },
  { id: 14, left: 20, top: 55, delay: 3.2 },
  { id: 15, left: 55, top: 70, delay: 4.2 },
];

function FloatingElements() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="floating-elements-container absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100],
            x: [0, (element.id % 2 === 0 ? 50 : -50)],
          }}
          transition={{
            duration: 4 + (element.id % 3),
            repeat: Infinity,
            delay: element.delay,
          }}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: 'rgba(149, 30, 56, 0.7)' }} />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section 
      id="home" 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-white via-dusty-pink to-rose-100"
    >
      {/* Background Image with Scroll Effects */}
      <ScrollingBackgroundImage />
      
      {/* Three.js Background */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center section-padding container-custom"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >

        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-soft-black mb-6 leading-tight"
        >
          <span className="block">Ivy Beauty</span>
          <span className="block text-gradient">Lash & SPMU</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Professional eyelash extensions, brow artistry, and semi-permanent makeup 
          in our licensed home studio in Timberlea, Nova Scotia. Established 2021.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="https://dikidi.app/1904636" target="_blank" rel="noopener noreferrer" className="btn-primary group">
            Book Appointment
            <motion.div 
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </a>
          <button className="btn-secondary">
            View Services
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto glass-card"
        >
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#951e38' }}>2000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#951e38' }}>4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#951e38' }}>★ 5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-600 mx-auto mb-2" />
          <span className="text-sm text-gray-600">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
