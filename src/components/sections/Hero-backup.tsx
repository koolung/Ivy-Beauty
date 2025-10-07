'use client';

import { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Star } from 'lucide-react';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#e8b4a0"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#f4e4e0" />
      <AnimatedSphere />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

// Fixed positions for floating elements to avoid hydration issues
const floatingElements = [
  { id: 1, left: 10, top: 20, delay: 0 },
  { id: 2, left: 85, top: 15, delay: 0.5 },
  { id: 3, left: 25, top: 65, delay: 1 },
  { id: 4, left: 75, top: 80, delay: 1.5 },
  { id: 5, left: 90, top: 45, delay: 2 },
  { id: 6, left: 15, top: 90, delay: 2.5 },
  { id: 7, left: 60, top: 25, delay: 3 },
  { id: 8, left: 40, top: 75, delay: 3.5 },
  { id: 9, left: 95, top: 60, delay: 4 },
  { id: 10, left: 5, top: 40, delay: 4.5 },
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          <Sparkles className="w-4 h-4 text-rose-300" />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-white via-dusty-pink to-rose-100">
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
          className="mb-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">
              Award-Winning Beauty Salon
            </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-soft-black mb-6 leading-tight"
        >
          <span className="block">Transform</span>
          <span className="block text-gradient">Your Beauty</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Discover the art of stunning eyelash extensions and premium beauty services 
          that enhance your natural radiance with expert precision and care.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="btn-primary group">
            Book Consultation
            <motion.div 
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </button>
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
            <div className="text-3xl font-bold text-rose-600 mb-2">5000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">★ 4.9</div>
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
