import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="section-padding bg-offwhite text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="mono-label text-terracotta">Pineville, Louisiana · Since 2000</span>
              <h2 className="serif-heavy text-4xl md:text-6xl text-dark leading-tight">
                "We've been making things that matter for over two decades."
              </h2>
            </div>
            
            <div className="space-y-6 text-dark/70 sans-ui text-lg leading-relaxed max-w-xl">
              <p>
                BK Distributors has spent 20+ years serving Central Louisiana — from little league banners to championship rings to full fleet vehicle wraps. We're not a big box print company. We're your neighbors, and we treat every project like it's the most important one we've ever done.
              </p>
              <p>
                Whether you need one plaque or a thousand stickers, a political yard sign campaign or a custom trophy line for your school — we give every project our full attention. That's why we still meet new customers every week, even after two decades.
              </p>
            </div>

            <div className="pt-4">
               <a href="/about" className="inline-flex items-center text-dark font-sans font-medium text-lg group">
                Meet the Team 
                <span className="ml-2 group-hover:translate-x-2 transition-transform text-gold duration-300">→</span>
               </a>
            </div>
          </div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-4 translate-y-4"></div>
            <img 
              src="https://bkdistrib.com/wp-content/uploads/2021/09/164213364_3903854986346120_4992345823404423411_n.jpg" 
              alt="BK Shop display" 
              className="w-full aspect-[4/5] object-cover shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
