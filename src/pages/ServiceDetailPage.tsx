import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';

interface ServiceData {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  images: { src: string; alt: string }[];
}

const SERVICES: Record<string, ServiceData> = {
  trophies: {
    title: 'Trophies',
    slug: 'trophies',
    tagline: 'Custom engraved for every occasion and sport',
    description: 'From little league to championship tournaments, we carry a full line of trophies for every budget and occasion. Every piece is engraved in-house for a personal touch that mass-produced awards simply can\'t match.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/BCR103.jpg', alt: 'Trophy award' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/BCR107.jpg', alt: 'Trophy award' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/BCR108.jpg', alt: 'Trophy award' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/VSR101.jpg', alt: 'Victory sculpture trophy' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/VSR102.jpg', alt: 'Victory sculpture trophy' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/VSR103.jpg', alt: 'Victory sculpture trophy' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/VSR105.jpg', alt: 'Victory sculpture trophy' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/BCR201.jpg', alt: 'Award trophy' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/BCR202.jpg', alt: 'Award trophy' },
    ],
  },
  plaques: {
    title: 'Plaques',
    slug: 'plaques',
    tagline: 'Wall-mounted recognition and commemorative pieces',
    description: 'Our custom plaques are crafted from premium materials and engraved with precision. Perfect for donor walls, retirement gifts, employee recognition, and milestone celebrations.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5469.jpeg', alt: 'Custom plaque' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5470-rotated.jpeg', alt: 'Custom plaque' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5471.jpeg', alt: 'Custom plaque' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5472.jpeg', alt: 'Custom plaque' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5473.jpeg', alt: 'Custom plaque' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5474-rotated.jpeg', alt: 'Custom plaque' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5475.jpeg', alt: 'Custom plaque' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5476-rotated.jpeg', alt: 'Custom plaque' },
    ],
  },
  medals: {
    title: 'Medals',
    slug: 'medals',
    tagline: 'Die-cast and custom medals for events and schools',
    description: 'Custom medals for sports tournaments, academic achievement, and special events. Available in gold, silver, and bronze with custom ribbon colors and full engraving.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0641-scaled.jpg', alt: 'Championship medals' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0646-scaled.jpg', alt: 'Custom medals' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0704-scaled.jpg', alt: 'Award medals display' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0705-scaled.jpg', alt: 'Award medals' },
    ],
  },
  signs: {
    title: 'Signs',
    slug: 'signs',
    tagline: 'Indoor, outdoor, aluminum, coroplast — all types',
    description: 'From interior lobby signs to large outdoor displays, we produce high-quality signage for businesses, schools, and events. Aluminum, acrylic, coroplast, and more.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0556-scaled.jpg', alt: 'Custom signage display' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0562-scaled.jpg', alt: 'Business signage' },
    ],
  },
  'vehicle-wraps': {
    title: 'Vehicle Wraps',
    slug: 'vehicle-wraps',
    tagline: 'Full & partial wraps, fleet graphics, window perf',
    description: 'Turn your vehicle into a moving billboard. We handle full wraps, partial wraps, fleet lettering, and window perforations for cars, trucks, vans, and trailers throughout Central Louisiana.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_2493-scaled.jpeg', alt: 'Vehicle wrap' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_2974-scaled.jpeg', alt: 'Vehicle wrap' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_5885-scaled.jpeg', alt: 'Vehicle wrap' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_6636-scaled.jpeg', alt: 'Fleet graphics' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_7849-scaled.jpeg', alt: 'Vehicle wrap' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_7971-scaled.jpeg', alt: 'Truck wrap' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_8115-scaled.jpeg', alt: 'Vehicle graphics' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_8295-scaled.jpeg', alt: 'Van wrap' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/IMG_2507-scaled.jpeg', alt: 'Full vehicle wrap' },
    ],
  },
  banners: {
    title: 'Banners',
    slug: 'banners',
    tagline: 'Vinyl banners, retractable stands, event signage',
    description: 'Whether you need a 2-foot table banner or a 10-foot event backdrop, we print full-color vinyl banners with grommets and finishing options for indoor and outdoor use.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_0142-scaled.jpeg', alt: 'Custom banner' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_3210-scaled.jpeg', alt: 'Event banner' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5488.jpeg', alt: 'Vinyl banner' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5492.jpeg', alt: 'Custom banner' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5493.jpeg', alt: 'Sports banner' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5502.jpeg', alt: 'Banner display' },
    ],
  },
  decals: {
    title: 'Decals',
    slug: 'decals',
    tagline: 'Custom-cut vinyl for any surface or substrate',
    description: 'Die-cut vinyl decals for vehicles, windows, helmets, equipment, and more. We cut any shape or design with precision and offer single-color through full-color options.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_4029-scaled.jpeg', alt: 'Custom decals' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_4908-scaled.jpeg', alt: 'Vinyl decal' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_7854-scaled.jpeg', alt: 'Custom cut decal' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_8477-scaled.jpeg', alt: 'Decal application' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_9618-scaled.jpeg', alt: 'Vinyl decals' },
    ],
  },
  'political-signs': {
    title: 'Political Signs',
    slug: 'political-signs',
    tagline: 'Campaign-ready coroplast signs with fast turnaround',
    description: 'Get your name in front of voters fast. We print full-color political yard signs on durable coroplast with wire H-stakes. Fast turnaround, bulk pricing available.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/68613572_2467339723330994_2127178730546659328_n.jpg', alt: 'Political campaign signs' },
    ],
  },
  rings: {
    title: 'Rings',
    slug: 'rings',
    tagline: 'Championship and commemorative rings, custom designed',
    description: 'No matter the sport or the season, championship rings are the ultimate way to honor achievement. We offer a wide range of styles in gold and silver finishes — all fully customizable with your logo, name, and year.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0634-scaled.jpg', alt: 'Championship ring close-up' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/CZC601G.jpg', alt: 'Gold championship ring' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/CZC601S.jpg', alt: 'Silver championship ring' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/CZC603G.jpg', alt: 'Gold ring style' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/CZC605G.jpg', alt: 'Gold ring style' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/CZC607G.jpg', alt: 'Gold ring style' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/CZC609G.jpg', alt: 'Gold ring style' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/10/CZC610G.jpg', alt: 'Gold ring style' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/BCR201.jpg', alt: 'Custom ring' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2020/09/VSR201.jpg', alt: 'Custom ring' },
    ],
  },
  stickers: {
    title: 'Stickers',
    slug: 'stickers',
    tagline: 'Die-cut, sheet, and custom-shaped sticker printing',
    description: 'Custom stickers in any shape, size, or quantity. Weatherproof vinyl, matte or gloss finish, perfect for branding, promotions, school stores, and events.',
    images: [
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/11.png',   alt: 'Custom stickers' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2022/06/11-1.png', alt: 'Custom sticker samples' },
    ],
  },
  apparel: {
    title: 'Apparel',
    slug: 'apparel',
    tagline: 'Screen printing, embroidery, custom school store items',
    description: 'We handle screen printing and embroidery for t-shirts, polos, hoodies, hats, and more. Perfect for teams, schools, businesses, and events. Visit us or call to discuss your order.',
    images: [
      { src: "https://bkdistrib.com/wp-content/uploads/2022/12/Screenshot-2024-01-12-at-12.35.57 PM-300x300.png", alt: 'Custom apparel' },
      { src: "https://bkdistrib.com/wp-content/uploads/2022/12/Screenshot-2024-01-12-at-12.36.02 PM-300x300.png", alt: 'Custom apparel' },
      { src: "https://bkdistrib.com/wp-content/uploads/2022/12/Screenshot-2024-01-12-at-12.36.31 PM-300x300.png", alt: 'Custom apparel' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2025/10/20-300x300.png', alt: 'Custom shirt design' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2025/10/25-300x300.png', alt: 'Custom shirt design' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2025/10/26-300x300.png', alt: 'Custom shirt design' },
      { src: 'https://bkdistrib.com/wp-content/uploads/2026/03/CVMA-Shirt-Front-300x300.png', alt: 'Custom shirt' },
    ],
  },
};

export function ServiceDetailPage() {
  const { service } = useParams<{ service: string }>();
  const navigate = useNavigate();
  const data = service ? SERVICES[service] : null;

  if (!data) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero label={data.tagline} title={data.title} />

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          {/* Description */}
          <div className="max-w-3xl mb-20">
            <p className="sans-ui text-xl text-cream/70 leading-relaxed">{data.description}</p>
            <button
              onClick={() => navigate('/contact')}
              className="mt-10 gold-bg text-dark px-10 py-4 rounded-full sans-ui text-[13px] tracking-widest uppercase font-bold hover:opacity-90 transition-opacity"
            >
              Get a Quote →
            </button>
          </div>

          {/* Image grid — only rendered if images exist */}
          {data.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
              {data.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`group relative overflow-hidden bg-surface border border-gold/10 ${
                    i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="mono-label gold-accent">{img.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No-image fallback */}
          {data.images.length === 0 && (
            <div className="border border-gold/10 p-16 text-center">
              <p className="mono-label gold-accent mb-4">Samples Available In-Store</p>
              <p className="sans-ui text-cream/50 max-w-lg mx-auto">
                We don't have photos online for this service yet — call or stop in and we'll show you exactly what we can do.
              </p>
              <a href="tel:3184422246" className="inline-block mt-8 mono-label gold-accent hover:opacity-70 transition-opacity">
                (318) 442-2246
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
