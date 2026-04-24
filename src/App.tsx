import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

import { HomePage }    from './pages/HomePage';
import { AboutPage }   from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { SchoolsPage } from './pages/SchoolsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[100]" style={{ scaleX }} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative selection:bg-gold selection:text-dark">
        <div className="grain-overlay" />
        <ScrollProgress />
        <Navbar />

        <main>
          <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/about"    element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery"  element={<GalleryPage />} />
            <Route path="/schools"  element={<SchoolsPage />} />
            <Route path="/reviews"  element={<ReviewsPage />} />
            <Route path="/contact"  element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

