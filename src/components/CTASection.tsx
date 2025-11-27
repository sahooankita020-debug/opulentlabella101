import { MessageCircle, Phone } from 'lucide-react';

export default function CTASection() {
  const handleWhatsAppClick = () => {
    const phone = '27604622557'; // business number without +
    const message = 'Hi! I would like to book an appointment at Opulentlabella.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-brand-primary/30 shadow-lg">

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary/90" />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center text-brand-cream">
            <h2 className="font-serif text-heading-lg md:text-4xl mb-6">
              Ready for Your Luxury Experience?
            </h2>

            <p className="text-lg text-brand-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Reserve your appointment today with a small deposit. Limited slots available for our most popular services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-primary font-semibold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </button>

              {/* Call Button */}
              <a
                href="tel:+27604622557"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark/40 hover:bg-brand-dark text-brand-cream font-semibold rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <p className="mt-8 text-sm text-brand-cream/85">
              48-hour cancellation policy • Flexible scheduling • Secure deposit system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
