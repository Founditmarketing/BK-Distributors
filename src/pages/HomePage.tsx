import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ServicesGrid } from '../components/ServicesGrid';
import { About } from '../components/About';
import { WorkGallery } from '../components/WorkGallery';
import { StatsTestimonials } from '../components/StatsTestimonials';
import { Schools } from '../components/Schools';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <About />
      <WorkGallery />
      <StatsTestimonials />
      <Schools />
    </>
  );
}
