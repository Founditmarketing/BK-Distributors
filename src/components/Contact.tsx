export function Contact() {
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

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Email Address" placeholder="john@example.com" type="email" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Phone Number" placeholder="(318) 000-0000" type="tel" />
                <div className="space-y-2">
                   <label className="font-mono text-[10px] uppercase tracking-widest text-terracotta">Service Needed</label>
                   <select className="w-full bg-white border border-dark/10 p-4 font-sans focus:border-gold outline-none appearance-none">
                     <option>Trophies</option>
                     <option>Signs</option>
                     <option>Vehicle Wraps</option>
                     <option>Other</option>
                   </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-terracotta">Tell us about your project</label>
                <textarea rows={5} className="w-full bg-white border border-dark/10 p-4 font-sans focus:border-gold outline-none" placeholder="Dimensions, quantity, dates..." />
              </div>
              <button className="bg-gold text-dark w-full py-5 rounded-full font-sans font-bold text-lg hover:bg-dark hover:text-gold transition-colors flex items-center justify-center space-x-2 group">
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

             <div className="mt-12 group cursor-pointer overflow-hidden border border-dark/10 grayscale hover:grayscale-0 transition-all duration-700 h-[300px] flex items-center justify-center bg-gray-100">
                {/* Mock Map for demo stability, instructions mentioned iframe but grayscale filter can be applied to div */}
                <div className="text-center space-y-2">
                  <span className="font-mono text-[10px] uppercase text-dark/30">Google Maps Embed</span>
                  <p className="font-display italic text-lg text-dark/50">112 Pelican Dr, Pineville</p>
                </div>
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
