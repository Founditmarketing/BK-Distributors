import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/PageHero';

// Only real-world & professional studio shots — no white-background ecommerce catalog images
const ALL_IMAGES = [
  // Rings — DSC professional only
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0634-scaled.jpg',  cat: 'Rings',         label: 'Championship Ring' },

  // Trophies & Awards — DSC professional series
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0556-scaled.jpg',  cat: 'Trophies',      label: 'Trophy Display' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0562-scaled.jpg',  cat: 'Trophies',      label: 'Trophy Display' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0704-scaled.jpg',  cat: 'Trophies',      label: 'Trophies & Awards' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0705-scaled.jpg',  cat: 'Trophies',      label: 'Award Display' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0710-scaled.jpg',  cat: 'Trophies',      label: 'Custom Trophy' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0720-scaled.jpg',  cat: 'Trophies',      label: 'Custom Trophy' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0722-scaled.jpg',  cat: 'Trophies',      label: 'Custom Trophy' },

  // Medals — DSC professional series
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0641-scaled.jpg',  cat: 'Medals',        label: 'Championship Medals' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0646-scaled.jpg',  cat: 'Medals',        label: 'Custom Medals' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0659-scaled.jpg',  cat: 'Medals',        label: 'Medal Display' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0675-scaled.jpg',  cat: 'Medals',        label: 'Award Medals' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0681-scaled.jpg',  cat: 'Medals',        label: 'Engraved Medals' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0693-scaled.jpg',  cat: 'Medals',        label: 'Custom Medals' },

  // Plaques — real photos from plaque page
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5469.jpeg',        cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5470-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5471.jpeg',        cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5472.jpeg',        cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5473.jpeg',        cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5474-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5475.jpeg',        cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5476-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5477-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5478-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5479-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5480-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5481-rotated.jpeg',cat: 'Plaques',       label: 'Custom Plaque' },

  // Vehicle Wraps — real on-location shots
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_2493-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Vehicle Wrap' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_2974-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Vehicle Wrap' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_5885-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Vehicle Wrap' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_6636-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Fleet Graphics' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_7849-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Vehicle Wrap' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_7971-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Truck Wrap' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_8115-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Vehicle Graphics' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_8295-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Van Wrap' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/IMG_2507-scaled.jpeg', cat: 'Vehicle Wraps', label: 'Full Vehicle Wrap' },

  // Banners
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_0142-scaled.jpeg', cat: 'Banners',       label: 'Custom Banner' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_3210-scaled.jpeg', cat: 'Banners',       label: 'Event Banner' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5488.jpeg',        cat: 'Banners',       label: 'Vinyl Banner' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5492.jpeg',        cat: 'Banners',       label: 'Custom Banner' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5493.jpeg',        cat: 'Banners',       label: 'Sports Banner' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5502.jpeg',        cat: 'Banners',       label: 'Banner Display' },

  // Decals
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_4029-scaled.jpeg', cat: 'Decals',        label: 'Custom Decals' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_4908-scaled.jpeg', cat: 'Decals',        label: 'Vinyl Decal' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_7854-scaled.jpeg', cat: 'Decals',        label: 'Custom Cut Decal' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_8477-scaled.jpeg', cat: 'Decals',        label: 'Decal Application' },
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_9618-scaled.jpeg', cat: 'Decals',        label: 'Vinyl Decals' },

  // Signs
  { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/68613572_2467339723330994_2127178730546659328_n.jpg', cat: 'Signs', label: 'Political Signs' },
];

const CATEGORIES = ['All', ...Array.from(new Set(ALL_IMAGES.map(i => i.cat)))];

export function GalleryPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ALL_IMAGES : ALL_IMAGES.filter(i => i.cat === active);

  return (
    <>
      <PageHero label="Our Work" title="The Full Gallery" />

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-6">

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`sans-ui text-[12px] tracking-widest uppercase px-6 py-2.5 rounded-full border transition-all duration-200 ${
                  active === cat
                    ? 'bg-gold text-dark border-gold'
                    : 'border-gold/30 text-cream/60 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  className="group relative overflow-hidden bg-surface border border-gold/10 aspect-square"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="mono-label gold-accent mb-1">{item.cat}</span>
                    <h4 className="font-display text-base text-cream">{item.label}</h4>
                  </div>
                  <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-gold transition-all duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="text-center mono-label text-cream/30 mt-12">{filtered.length} photos</p>
        </div>
      </section>
    </>
  );
}
