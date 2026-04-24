import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'Sarah M.', text: 'Best trophies in CENLA. They handled our basketball tournament with zero stress and amazing quality.', rating: 5 },
  { name: 'Jason R.', text: 'Expert vehicle wraps. My fleet looks premium and the turnaround was faster than expected.', rating: 5 },
  { name: 'Dr. Emily L.', text: 'Custom plaques for our donor wall were stunning. Detailed, precise, and perfectly installed.', rating: 5 },
];

export function StatsTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-offwhite text-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <Counter value={stat.value} />
              <p className="font-mono text-[11px] text-terracotta uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="h-48 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="flex justify-center space-x-1 text-gold">
                   {[...Array(REVIEWS[index].rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-heading italic text-2xl md:text-3xl leading-relaxed text-dark max-w-2xl mx-auto">
                  "{REVIEWS[index].text}"
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracotta">
                  — {REVIEWS[index].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
             <a href="/reviews" className="text-[13px] tracking-widest uppercase border-b border-dark/20 pb-1 hover:border-gold transition-colors">Read All Reviews</a>
             <a href="https://g.page/r/CerKdDTQ99d_EAg/review" target="_blank" rel="noopener noreferrer" className="text-[13px] tracking-widest uppercase border-b border-dark/20 pb-1 hover:border-gold transition-colors">Leave a Review</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: 20, label: "years serving CENLA" },
  { value: 500, label: "happy clients" },
  { value: 12, label: "new customers weekly" },
  { value: 1500, label: "projects yearly" },
];

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-display text-5xl md:text-7xl font-bold text-dark tabular-nums">
      {count}{value === 20 ? '+' : ''}
    </span>
  );
}
