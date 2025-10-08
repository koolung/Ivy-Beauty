'use client';

import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { MotionConfig } from 'framer-motion';

export default function Home() {
  return (
    <SmoothScroll>
      <MotionConfig reducedMotion="always">
        <main className="min-h-screen">
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </MotionConfig>
    </SmoothScroll>
  );
}
