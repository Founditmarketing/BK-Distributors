import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Award, Medal, Monitor, Car, Flag, Scan, UserCheck, Gem, StickyNote, Shirt } from 'lucide-react';

const SERVICES = [
  {
    icon: <Trophy />,
    title: 'Trophies',
    slug: 'trophies',
    desc: 'Custom engraved for every occasion and sport',
    img: 'https://bkdistrib.com/wp-content/uploads/2020/09/BCR103.jpg',
  },
  {
    icon: <Award />,
    title: 'Plaques',
    slug: 'plaques',
    desc: 'Wall-mounted recognition and commemorative pieces',
    img: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5471.jpeg',
  },
  {
    icon: <Medal />,
    title: 'Medals',
    slug: 'medals',
    desc: 'Die-cast and custom medals for events and schools',
    img: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0641-scaled.jpg',
  },
  {
    icon: <Monitor />,
    title: 'Signs',
    slug: 'signs',
    desc: 'Indoor, outdoor, aluminum, coroplast — all types',
    img: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0556-scaled.jpg',
  },
  {
    icon: <Car />,
    title: 'Vehicle Wraps',
    slug: 'vehicle-wraps',
    desc: 'Full & partial wraps, fleet graphics, window perf',
    img: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_2974-scaled.jpeg',
  },
  {
    icon: <Flag />,
    title: 'Banners',
    slug: 'banners',
    desc: 'Vinyl banners, retractable stands, event signage',
    img: 'https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5488.jpeg',
  },
  {
    icon: <Scan />,
    title: 'Decals',
    slug: 'decals',
    desc: 'Custom-cut vinyl for any surface or substrate',
    img: 'https://bkdistrib.com/wp-content/uploads/2020/09/IMG_4908-scaled.jpeg',
  },
  {
    icon: <UserCheck />,
    title: 'Political Signs',
    slug: 'political-signs',
    desc: 'Campaign-ready coroplast signs with fast turnaround',
    img: 'https://bkdistrib.com/wp-content/uploads/2020/09/68613572_2467339723330994_2127178730546659328_n.jpg',
  },
  {
    icon: <Gem />,
    title: 'Rings',
    slug: 'rings',
    desc: 'Championship and commemorative rings, custom designed',
    img: 'https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0634-scaled.jpg',
  },
  {
    icon: <StickyNote />,
    title: 'Stickers',
    slug: 'stickers',
    desc: 'Die-cut, sheet, and custom-shaped sticker printing',
    img: 'https://bkdistrib.com/wp-content/uploads/2022/06/11.png',
  },
  {
    icon: <Shirt />,
    title: 'Apparel',
    slug: 'apparel',
    desc: 'Screen printing, embroidery, custom school store items',
    img: null, // no photos on OG site
  },
];

export function ServicesGrid() {
  const navigate = useNavigate();

  return (
    <section id="services" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="mono-label gold-accent">Craftsmanship Capabilities</span>
          <h2 className="serif-heavy text-4xl md:text-6xl max-w-2xl leading-tight">
            Eleven Ways We Bring Your Vision to Life.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="bg-dark group hover:bg-surface transition-colors cursor-pointer border-r border-b border-gold/10 flex flex-col"
            >
              {/* Image — show if available */}
              {service.img ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  />
                </div>
              ) : (
                <div className="h-48 bg-surface flex items-center justify-center border-b border-gold/10">
                  <div className="text-gold opacity-30 scale-150">{service.icon}</div>
                </div>
              )}

              {/* Text */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl mb-2 text-cream group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-cream/50 text-sm font-sans font-light leading-relaxed flex-1">
                  {service.desc}
                </p>
                <span className="mt-4 mono-label gold-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  View Service →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
