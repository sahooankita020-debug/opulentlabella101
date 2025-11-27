import { Sparkles } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const phone = '1234567890';
    const message = 'Hi! I would like to book an appointment at Opulentlabella.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Removed bg-brand-cream to stop top navbar-like strip */}
      {/* Removed full inset gradient */}
      {/* Added subtle bottom-only gradient for UI balance */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-[#fdecec] to-[#f8dada] pointer-events-none" />

      {/* Decorative Circles (slightly lowered to avoid top strip) */}
      <div className="absolute top-24 right-10 w-72 h-72 bg-brand-primary/25 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-brand-light mb-8">
          <Sparkles className="w-4 h-4 text-brand-primary" />
          <span className="text-sm font-medium text-brand-dark">Premium Beauty Experience</span>
        </div>

        <h1 className="font-serif text-display-lg lg:text-5xl font-bold text-brand-dark mb-6">
          Affordable Beauty Services with a{' '}
          <span className="text-brand-primary font-extrabold">
            Luxury Experience
          </span>
        </h1>

        <p className="text-lg md:text-xl text-brand-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience luxury beauty services including Gel Nails, Russian Manicure, Makeup,
          Waxing, Lashes, Brows, and complete Hair services such as Wig Selling, Installation,
          Styling, and Wig Treatment — all under one elegant roof.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleWhatsAppClick}
            className="btn-primary"
          >
            Book Your Appointment
          </button>

          <button className="btn-outline">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
