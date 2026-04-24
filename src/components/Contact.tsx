export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name    = (form.elements.namedItem('name')    as HTMLInputElement).value;
    const email   = (form.elements.namedItem('email')   as HTMLInputElement).value;
    const phone   = (form.elements.namedItem('phone')   as HTMLInputElement).value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\n${message}`
    );
    window.location.href = `mailto:scott.bkd@gmail.com?subject=Quote Request from ${encodeURIComponent(name)}&body=${body}&cc=${encodeURIComponent(email)}`;
  }

  return (
     <section id="contact" className="section-padding bg-offwhite text-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="space-y-12">
            <div className="space-y-4">
               <span className="mono-label text-terracotta">Ready to start?</span>
               <h2 className="serif-heavy text-4xl md:text-6xl text-dark">Let's Get to Work</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name" name="name" placeholder="John Doe" required />
                <Input label="Email Address" name="email" placeholder="john@example.com" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Phone Number" name="phone" placeholder="(318) 000-0000" type="tel" />
                <div className="space-y-2">
                   <label className="font-mono text-[10px] uppercase tracking-widest text-terracotta">Service Needed</label>
                   <select name="service" className="w-full bg-white border border-dark/10 p-4 font-sans focus:border-gold outline-none appearance-none">
                     <option>Trophies</option>
                     <option>Plaques</option>
                     <option>Medals</option>
                     <option>Signs</option>
                     <option>Vehicle Wraps</option>
                     <option>Banners</option>
                     <option>Decals</option>
                     <option>Political Signs</option>
                     <option>Rings</option>
                     <option>Stickers</option>
                     <option>Apparel</option>
                     <option>Other</option>
                   </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-terracotta">Tell us about your project</label>
                <textarea name="message" rows={5} className="w-full bg-white border border-dark/10 p-4 font-sans focus:border-gold outline-none" placeholder="Dimensions, quantity, dates..." />
              </div>
              <button type="submit" className="bg-gold text-dark w-full py-5 rounded-full font-sans font-bold text-lg hover:bg-dark hover:text-gold transition-colors flex items-center justify-center space-x-2 group">
                <span>Send Message</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
             <div className="space-y-12">
                <InfoBlock label="Email" value="scott.bkd@gmail.com" />
                <InfoBlock label="Phone" value="(318) 442-2246" />
                <InfoBlock label="Hours" value="Mon–Thurs: 8:30am–5pm / Fri: 8:30am–12pm" />
                <InfoBlock label="Address" value="112 Pelican Drive Suite B, Pineville, LA 71360" />
             </div>

             <div className="mt-12 overflow-hidden border border-dark/10 h-[300px]">
               <iframe
                 title="BK Distributors Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.1!2d-92.4274!3d31.3224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626b4e1b0e1b0e1%3A0x0!2s112+Pelican+Dr+Suite+B%2C+Pineville%2C+LA+71360!5e0!3m2!1sen!2sus!4v1714000000000"
                 width="100%"
                 height="300"
                 style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
               />
             </div>
          </div>
        </div>
      </div>
     </section>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[10px] uppercase tracking-widest text-terracotta">{label}</label>
      <input {...props} className="w-full bg-white border border-dark/10 p-4 font-sans focus:border-gold outline-none" />
    </div>
  );
}

function InfoBlock({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-2">
       <span className="font-mono text-[10px] text-terracotta uppercase tracking-[0.2em]">{label}</span>
       <p className="font-display text-2xl md:text-3xl text-dark leading-snug">{value}</p>
    </div>
  );
}
