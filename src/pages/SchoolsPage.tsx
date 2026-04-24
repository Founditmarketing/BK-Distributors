import { Schools } from '../components/Schools';
import { PageHero } from '../components/PageHero';

export function SchoolsPage() {
  return (
    <>
      <PageHero label="CENLA Community" title="Your School's Official Custom Shop" />
      <Schools />
    </>
  );
}
