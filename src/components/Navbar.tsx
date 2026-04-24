import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SERVICES = [
  { label: 'Trophies',        slug: 'trophies' },
  { label: 'Plaques',         slug: 'plaques' },
  { label: 'Medals',          slug: 'medals' },
  { label: 'Signs',           slug: 'signs' },
  { label: 'Vehicle Wraps',   slug: 'vehicle-wraps' },
  { label: 'Banners',         slug: 'banners' },
  { label: 'Decals',          slug: 'decals' },
  { label: 'Political Signs', slug: 'political-signs' },
  { label: 'Rings',           slug: 'rings' },
  { label: 'Stickers',        slug: 'stickers' },
  { label: 'Apparel',         slug: 'apparel' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  function goToContact() {
    if (location.pathname !== '/') {
      navigate('/contact');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 lg:px-16 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-xl border-b border-white/5 py-6' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="serif-heavy text-2xl tracking-tighter text-cream">BK DISTRIBUTORS</span>
          <span className="mono-label gold-accent">Est. 2000 · Pineville, LA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <ServicesDropdown />
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/schools">Schools</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={goToContact}
            className="bg-gold text-dark border border-gold px-8 py-2.5 rounded-full sans-ui text-[12px] tracking-widest uppercase font-bold hover:bg-transparent hover:text-gold transition-all duration-300"
          >
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
        className="fixed inset-0 bg-dark z-50 lg:hidden flex flex-col items-center justify-center overflow-y-auto"
      >
        <button className="absolute top-8 right-6 text-cream" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <div className="flex flex-col items-center space-y-6 py-20 w-full px-8">
          {[
            { to: '/',        label: 'Home' },
            { to: '/about',   label: 'About' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/schools', label: 'Schools' },
            { to: '/reviews', label: 'Reviews' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-display text-4xl hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* Mobile Services accordion */}
          <MobileServicesAccordion />

          <button
            onClick={() => { setIsOpen(false); setTimeout(() => navigate('/contact'), 300); }}
            className="mt-8 bg-gold text-dark px-10 py-4 rounded-full font-sans font-bold text-lg"
          >
            Get a Quote
          </button>
        </div>
      </motion.div>
    </nav>
  );
}

/* ── Desktop: click-to-toggle dropdown ───────────────────── */
function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-services-dropdown]')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [isOpen]);

  return (
    <div className="relative" data-services-dropdown="">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-2 sans-ui text-[13px] tracking-widest uppercase opacity-80 hover:opacity-100 hover:text-gold transition-all"
      >
        <span>Services</span>
        <ChevronDown
          size={14}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
        />
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[480px] bg-surface border border-gold/10 p-8 shadow-2xl grid grid-cols-2 gap-x-8 gap-y-3 transition-all duration-200 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        {SERVICES.map(service => (
          <button
            key={service.slug}
            onClick={() => { setIsOpen(false); navigate(`/services/${service.slug}`); }}
            className="text-cream/50 hover:text-gold text-[13px] sans-ui tracking-wider uppercase transition-colors text-left"
          >
            {service.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Mobile: inline accordion ───────────────────────────── */
function MobileServicesAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full text-center">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="font-display text-4xl hover:text-gold transition-colors flex items-center justify-center gap-3 w-full"
      >
        Services
        <ChevronDown
          size={24}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
        />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] mt-4' : 'max-h-0'}`}>
        <div className="grid grid-cols-2 gap-3 px-4">
          {SERVICES.map(service => (
            <button
              key={service.slug}
              onClick={() => { setIsOpen(false); navigate(`/services/${service.slug}`); }}
              className="text-cream/60 hover:text-gold text-[13px] sans-ui tracking-wider uppercase transition-colors py-2 text-left"
            >
              {service.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-sans text-[13px] tracking-widest uppercase transition-colors relative group ${
        isActive ? 'text-gold' : 'hover:text-gold'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </Link>
  );
}
