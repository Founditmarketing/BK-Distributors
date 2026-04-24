import { motion } from 'motion/react';

interface PageHeroProps {
  label: string;
  title: string;
}

export function PageHero({ label, title }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 bg-dark relative overflow-hidden">
      {/* Subtle gold line accent */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-label gold-accent block mb-6"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="serif-heavy text-5xl md:text-7xl text-cream max-w-4xl leading-tight"
        >
          {title}
        </motion.h1>
        {/* Decorative rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 h-[1px] bg-gradient-to-r from-gold/40 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
