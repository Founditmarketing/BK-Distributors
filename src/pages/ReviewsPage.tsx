import { StatsTestimonials } from '../components/StatsTestimonials';
import { PageHero } from '../components/PageHero';

export function ReviewsPage() {
  return (
    <>
      <PageHero label="What People Say" title="Reviews from Real Customers" />
      <StatsTestimonials />
    </>
  );
}
