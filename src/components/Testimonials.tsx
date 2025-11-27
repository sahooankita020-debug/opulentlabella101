import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Opulentlabella exceeded my expectations! The service was professional and the atmosphere so relaxing. I felt truly pampered.",
    rating: 5,
    service: "Full Beauty Package",
  },
  {
    name: "Jessica L.",
    text: "Best nail experience I've had. The technician was so skilled and the products are high quality. Worth every penny!",
    rating: 5,
    service: "Manicure & Pedicure",
  },
  {
    name: "Amanda K.",
    text: "I appreciate the luxury feel at such an affordable price. The entire team is friendly and attentive to details.",
    rating: 5,
    service: "Hair & Makeup",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-heading-lg mb-4 text-brand-dark">
          Loved by Our Clients
        </h2>
        <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
          Real experiences from real clients who trust Opulentlabella with their beauty needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl p-8 bg-white border border-brand-light shadow-sm hover:shadow-lg hover:shadow-brand-primary/10 transition"
          >
            {/* Soft Gold Glow */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-gold/30 rounded-full blur-xl opacity-70" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="w-7 h-7 text-brand-primary/30 mb-4" />

              {/* Text */}
              <p className="text-brand-dark/80 mb-6 leading-relaxed italic">
                {testimonial.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-brand-light">
                <div>
                  <p className="font-semibold text-brand-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-brand-dark/70">
                    {testimonial.service}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand-primary/30 flex items-center justify-center font-semibold text-brand-dark">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badge */}
      <div className="mt-16 text-center">
        <div className="inline-block rounded-full bg-brand-light/60 px-6 py-3 border border-brand-primary/20">
          <p className="text-sm text-brand-dark/80">
            <span className="font-semibold text-brand-primary">
              Word-of-Mouth Trusted
            </span>
            <span className="ml-2">
              Join our community of satisfied clients.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
