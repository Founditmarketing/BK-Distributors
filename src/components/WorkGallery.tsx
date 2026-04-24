import { motion } from 'motion/react';

const ITEMS = [
  { img: "https://bkdistrib.com/wp-content/uploads/2021/09/163664640_3903855229679429_7922458393556896521_n.jpg", cat: "Trophies", span: "row-span-2" },
  { img: "https://bkdistrib.com/wp-content/uploads/2021/09/141028441_3739939642737656_8400330519664310153_n.jpg", cat: "Awards", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2021/09/141289756_3739939862737634_1702301494937318150_n.jpg", cat: "Custom Engraving", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2021/09/163525524_3903855203012765_5647694542229209685_n.jpg", cat: "Plaques", span: "" },
  { img: "https://bkdistrib.com/wp-content/uploads/2020/10/IMG_5502.jpeg", cat: "Specialty", span: "col-span-2" },
  { img: "https://bkdistrib.com/wp-content/uploads/2020/09/IMG_2493-scaled.jpeg", cat: "Vehicle Wraps", span: "" },
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
