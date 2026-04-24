import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-16 pt-20 overflow-hidden bg-dark">
      {/* Watermarks */}
      <div className="watermark w-[600px] h-[600px]"></div>
      <div className="watermark w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <span className="mono-label gold-accent">Est. 2000 · Pineville, LA</span>
          </motion.div>

          <h1 className="space-y-[-10px]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="block serif-heavy text-[72px] md:text-[92px] leading-none"
            >
              We Make
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="block serif-heavy text-[72px] md:text-[92px] leading-none italic gold-accent"
            >
              the Things
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="block serif-heavy text-[72px] md:text-[92px] leading-none text-[#F5F0E6]"
            >
              That Honor People.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="sans-ui text-lg md:text-xl text-cream opacity-60 max-w-lg leading-relaxed"
          >
            Custom trophies, awards, signs, vehicle wraps, apparel & more — crafted in Pineville, Louisiana for 20+ years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gold-bg text-dark px-10 py-5 rounded-full sans-ui text-[14px] flex items-center gap-3 group hover:opacity-90 transition-opacity shadow-lg shadow-gold/10"
            >
              Get a Quote <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-cream text-cream px-10 py-5 rounded-full sans-ui text-[14px] hover:bg-cream hover:text-dark transition-colors"
            >
              See Our Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 mono-label gold-accent flex items-center gap-4"
          >
             <a href="tel:3184422246" className="hover:underline">(318) 442-2246</a>
             <span className="opacity-30 text-white">|</span>
             <span className="opacity-60 text-cream lowercase">Mon–Thurs 8:30am–5pm · Fri 8:30am–12pm</span>
          </motion.div>
        </div>

        {/* Image Collage Emulation */}
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Top Photo — gold ring close-up */}
            <motion.div 
              className="absolute -top-20 right-0 w-64 h-80 bg-surface border border-gold/30 shadow-2xl overflow-hidden -rotate-2"
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <img 
                src="https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0634-scaled.jpg" 
                alt="Championship ring detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Middle Photo — trophy display */}
            <motion.div 
              className="relative w-80 h-[450px] bg-surface border border-gold/30 shadow-2xl z-10 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0556-scaled.jpg" 
                alt="Trophy display case" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Bottom Photo — vehicle wrap */}
            <motion.div 
              className="absolute -bottom-12 -left-20 w-72 h-48 bg-surface border border-gold/30 shadow-2xl z-20 overflow-hidden rotate-1"
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <img 
                src="https://bkdistrib.com/wp-content/uploads/2022/06/IMG_2507-scaled.jpeg" 
                alt="Custom vehicle wrap" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-gold/30 relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-gold animate-scroll-dot rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
