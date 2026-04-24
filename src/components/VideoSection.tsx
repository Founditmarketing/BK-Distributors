export function VideoSection() {
  return (
    <section className="bg-dark py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden border border-gold/10">
          <video
            controls
            playsInline
            preload="metadata"
            poster="https://bkdistrib.com/wp-content/uploads/2022/06/DSC_0634-scaled.jpg"
            className="w-full max-h-[70vh] object-cover"
          >
            <source src="https://bkdistrib.com/wp-content/uploads/2024/10/BK-Distributors-2024-10-07-v3.mp4" type="video/mp4" />
          </video>

          {/* Bottom label */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6 pointer-events-none">
            <span className="mono-label gold-accent">BK Distributors · 2024 Showcase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
