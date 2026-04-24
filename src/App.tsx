import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesGrid } from './components/ServicesGrid';
import { About } from './components/About';
import { WorkGallery } from './components/WorkGallery';
import { StatsTestimonials } from './components/StatsTestimonials';
import { Schools } from './components/Schools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-gold selection:text-dark">
      {/* Visual Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Scroll Progress Tube */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <About />
        <WorkGallery />
        <StatsTestimonials />
        <Schools />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
