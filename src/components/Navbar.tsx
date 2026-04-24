import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const SERVICES = [
  'Trophies', 'Plaques', 'Medals', 'Signs', 'Vehicle Wraps', 'Banners', 
  'Decals', 'Political Signs', 'Rings', 'Stickers', 'Apparel'
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-16 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-xl border-b border-white/5 py-6' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="serif-heavy text-2xl tracking-tighter text-cream">BK DISTRIBUTORS</span>
          <span className="mono-label gold-accent">Est. 2000 · Pineville, LA</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          <NavLink href="#home">Home</NavLink>
          <div className="relative group">
            <button className="flex items-center gap-2 sans-ui text-[13px] tracking-widest uppercase opacity-80 hover:opacity-100 hover:text-gold transition-all">
              <span>Services</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[480px] bg-surface border border-gold/10 p-8 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all grid grid-cols-2 gap-x-8 gap-y-3 shadow-2xl">
              {SERVICES.map(service => (
                <a key={service} href={`#${service.toLowerCase().replace(' ', '-')}`} className="text-cream/50 hover:text-gold text-[13px] sans-ui tracking-wider uppercase transition-colors">
                  {service}
                </a>
              ))}
            </div>
          </div>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="border border-gold px-8 py-2.5 rounded-full sans-ui text-[12px] tracking-widest uppercase text-cream hover:bg-gold hover:text-dark transition-all duration-300">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-dark z-50 lg:hidden flex flex-col items-center justify-center space-y-8"
      >
        <button className="absolute top-8 right-6 text-cream" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <div className="flex flex-col items-center space-y-6">
          {['Home', 'About', 'Services', 'Gallery', 'Schools', 'Reviews', 'Contact'].map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="font-display text-4xl hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="mt-8 bg-gold text-dark px-10 py-4 rounded-full font-sans font-bold text-lg">
            Get a Quote
          </button>
        </div>
      </motion.div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="font-sans text-[13px] tracking-widest uppercase hover:text-gold transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
    </a>
  );
}
