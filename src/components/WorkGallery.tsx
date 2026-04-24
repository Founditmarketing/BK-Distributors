import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const ITEMS = [
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0634-scaled.jpg", cat: "Championship Rings" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0641-scaled.jpg", cat: "Gold Rings" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0646-scaled.jpg", cat: "Diamond Rings" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0556-scaled.jpg", cat: "Trophies" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0562-scaled.jpg", cat: "Trophy Display" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0564-scaled.jpg", cat: "Custom Plaques" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0659-scaled.jpg", cat: "Medals" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0675-scaled.jpg", cat: "Awards" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0681-scaled.jpg", cat: "Engraving" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0693-scaled.jpg", cat: "Custom Rings" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/IMG_2507-scaled.jpeg", cat: "Vehicle Wraps" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0704-scaled.jpg", cat: "Trophies & Awards" },
];

export function WorkGallery() {
  const navigate = useNavigate();
  return (
    <section id="gallery" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="mono-label gold-accent">Our Work</span>
            <h2 className="serif-heavy text-4xl md:text-6xl text-cream">Some of What We've Made</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden bg-surface border border-gold/10 aspect-square"
            >
              <img
                src={item.img}
                alt={item.cat}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1"
                >
                  Featured Project
                </motion.span>
                <h4 className="font-display text-lg text-cream">{item.cat}</h4>
              </div>
              <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-gold transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate('/gallery')}
            className="border border-gold text-gold px-12 py-4 rounded-full sans-ui text-[13px] tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300"
          >
            View Full Gallery →
          </button>
        </div>
      </div>
    </section>
  );
}
