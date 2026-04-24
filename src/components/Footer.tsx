import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

const SERVICE_LINKS = [
  { label: 'Trophies',        slug: 'trophies' },
  { label: 'Plaques',         slug: 'plaques' },
  { label: 'Medals',          slug: 'medals' },
  { label: 'Signs',           slug: 'signs' },
  { label: 'Vehicle Wraps',   slug: 'vehicle-wraps' },
  { label: 'Banners',         slug: 'banners' },
  { label: 'Decals',          slug: 'decals' },
  { label: 'Stickers',        slug: 'stickers' },
  { label: 'Apparel',         slug: 'apparel' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-24 pb-12 bg-dark border-t border-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1 space-y-6">
             <h3 className="font-display text-2xl font-bold text-cream">BK DISTRIBUTORS</h3>
             <p className="text-cream/50 text-sm font-sans leading-relaxed">
               Custom awards, signs &amp; more — crafted with pride in Pineville, Louisiana since 2000.
             </p>
             <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/bkdistributors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all"
                >
                  <Facebook size={18} />
                </a>
             </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] text-gold uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-cream/50 hover:text-gold text-sm font-sans transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h4 className="mono-label text-gold uppercase tracking-widest">Connect</h4>
            <div className="space-y-4 text-cream/50 sans-ui text-sm">
               <p><a href="tel:3184422246" className="hover:text-gold transition-colors">(318) 442-2246</a></p>
               <p><a href="mailto:scott.bkd@gmail.com" className="hover:text-gold transition-colors">scott.bkd@gmail.com</a></p>
               <p>112 Pelican Drive Suite B<br />Pineville, LA 71360</p>
            </div>
            <a
              href="tel:3184422246"
              className="border border-gold text-gold w-full py-4 rounded-full sans-ui text-[12px] uppercase tracking-widest hover:bg-gold hover:text-dark transition-all block text-center"
            >
              Call Us Now
            </a>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] text-gold uppercase tracking-widest">Business Hours</h4>
            <div className="text-cream/50 text-sm font-sans space-y-4">
               <p>Mon–Thurs: 8:30am – 5:00pm</p>
               <p>Friday: 8:30am – 12:00pm</p>
               <p>Saturday &amp; Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-surface flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="font-mono text-[11px] text-cream/30 uppercase tracking-widest">
             © {currentYear} BK Distributors. Pineville, Louisiana.
           </p>
           <div className="flex space-x-8 text-cream/30 font-mono text-[11px] uppercase tracking-widest">
              <Link to="/about" className="hover:text-gold transition-colors">About</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <a href="https://www.facebook.com/bkdistributors/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
