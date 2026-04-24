import { WorkGallery } from '../components/WorkGallery';
import { PageHero } from '../components/PageHero';

export function GalleryPage() {
  return (
    <>
      <PageHero label="Our Work" title="Some of What We've Made" />
      <WorkGallery />
    </>
  );
}
