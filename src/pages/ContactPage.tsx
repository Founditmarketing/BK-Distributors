import { Contact } from '../components/Contact';
import { PageHero } from '../components/PageHero';

export function ContactPage() {
  return (
    <>
      <PageHero label="Get in Touch" title="Let's Get to Work" />
      <Contact />
    </>
  );
}
