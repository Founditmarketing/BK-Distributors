import { ServicesGrid } from '../components/ServicesGrid';
import { PageHero } from '../components/PageHero';

export function ServicesPage() {
  return (
    <>
      <PageHero label="What We Do" title="Eleven Ways We Bring Your Vision to Life" />
      <ServicesGrid />
    </>
  );
}
