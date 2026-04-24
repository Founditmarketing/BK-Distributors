import { motion } from 'motion/react';

const ITEMS = [
  // Professional DSC ring & trophy shots — the money shots
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0634-scaled.jpg", cat: "Championship Rings", span: "row-span-2" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0641-scaled.jpg", cat: "Gold Rings", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0646-scaled.jpg", cat: "Diamond Rings", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0556-scaled.jpg", cat: "Trophies", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0562-scaled.jpg", cat: "Trophy Display", span: "col-span-2" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0564-scaled.jpg", cat: "Custom Plaques", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0659-scaled.jpg", cat: "Medals", span: "row-span-2" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0675-scaled.jpg", cat: "Awards", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0681-scaled.jpg", cat: "Engraving", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0693-scaled.jpg", cat: "Custom Rings", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/IMG_2507-scaled.jpeg", cat: "Vehicle Wraps", span: "col-span-2" },
  { img: "https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0704-scaled.jpg", cat: "Trophies & Awards", span: "" },
];

export function WorkGallery() {
  return (
    <section id="gallery" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="mono-label gold-accent">Our Work</span>
            <h2 className="serif-heavy text-4xl md:text-6xl text-cream">Some of What We've Made</h2>
          </div>
          <button className="text-gold font-sans tracking-widest uppercase text-sm hover:translate-x-2 transition-transform h-fit pb-2 border-b border-gold/30">
            View Full Gallery →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-surface border border-gold/10 ${item.span}`}
            >
              <img 
                src={item.img} 
                alt={item.cat} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1"
                >
                  Featured Project
                </motion.span>
                <h4 className="font-display text-2xl text-cream">{item.cat}</h4>
              </div>
              <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-gold transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
