import { motion } from 'motion/react';
import { Trophy, Award, Medal, Monitor, Car, Flag, Scan, UserCheck, Gem, StickyNote, Shirt } from 'lucide-react';

const SERVICES = [
  { icon: <Trophy />, title: 'Trophies', desc: 'Custom engraved for every occasion and sport' },
  { icon: <Award />, title: 'Plaques', desc: 'Wall-mounted recognition and commemorative pieces' },
  { icon: <Medal />, title: 'Medals', desc: 'Die-cast and custom medals for events and schools' },
  { icon: <Monitor />, title: 'Signs', desc: 'Indoor, outdoor, aluminum, coroplast — all types' },
  { icon: <Car />, title: 'Vehicle Wraps', desc: 'Full & partial wraps, fleet graphics, window perf' },
  { icon: <Flag />, title: 'Banners', desc: 'Vinyl banners, retractable stands, event signage' },
  { icon: <Scan />, title: 'Decals', desc: 'Custom-cut vinyl for any surface or substrate' },
  { icon: <UserCheck />, title: 'Political Signs', desc: 'Campaign-ready coroplast signs with fast turnaround' },
  { icon: <Gem />, title: 'Rings', desc: 'Championship and commemorative rings, custom designed' },
  { icon: <StickyNote />, title: 'Stickers', desc: 'Die-cut, sheet, and custom-shaped sticker printing' },
  { icon: <Shirt />, title: 'Apparel', desc: 'Screen printing, embroidery, custom school store items' },
];

export function ServicesGrid() {
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
              className="bg-dark p-10 group hover:bg-surface transition-colors cursor-pointer border-r border-b border-gold/10"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl mb-3 text-cream group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-cream/50 text-sm font-sans font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
