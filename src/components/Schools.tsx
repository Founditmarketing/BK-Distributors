import { motion } from 'motion/react';

export function Schools() {
  return (
    <section id="schools" className="section-padding bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
             <div className="space-y-4">
              <span className="text-label">CENLA Community</span>
              <h2 className="text-4xl md:text-6xl">Your School's Official Custom Shop.</h2>
             </div>
             <p className="text-cream/50 text-lg leading-relaxed font-sans max-w-lg">
                We take special pride in partnering with our local schools. From championship rings to school store apparel, we help students and athletes celebrate their biggest moments with gear that lasts.
             </p>
             <button className="text-gold font-sans font-medium hover:translate-x-2 transition-transform flex items-center">
                Inquire about a partnership <span className="ml-2">→</span>
             </button>
           </div>

           <div className="grid gap-6">
              <SchoolCard 
                title="Pineville Powerlifting" 
                desc="Official custom equipment and apparel supplier for the PHS Powerlifting program."
              />
              <SchoolCard 
                title="Hayden R. Lawrence" 
                desc="Exclusive school store partner providing branded merchandise and spirit wear."
              />
           </div>
        </div>
      </div>
    </section>
  );
}

function SchoolCard({ title, desc }: { title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-surface border border-gold/20 p-8 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 bg-gold/20 rounded-bl-3xl">
         <span className="font-display text-6xl">BK</span>
      </div>
      <h3 className="font-display text-3xl mb-4 text-cream group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-cream/40 text-sm font-sans mb-6 max-w-sm">{desc}</p>
      <a href="#" className="flex items-center text-gold font-mono text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all gap-2">
         Visit Shop <span>→</span>
      </a>
    </motion.div>
  );
}
