import { Heart, Shield, Crown } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Luxury at Accessible Prices',
    description: 'Experience premium beauty services without breaking the bank. We believe luxury should be within reach for everyone.',
  },
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description: 'Built on a foundation of consistency, professionalism, and integrity. Your satisfaction is our priority.',
  },
  {
    icon: Heart,
    title: 'Client-First Comfort',
    description: 'A welcoming, comfortable environment where you can truly relax and enjoy your beauty experience.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">

      {/* SECTION HEADING */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-heading-lg mb-4 text-brand-dark">
          Why Choose Opulentlabella
        </h2>
        <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
          We're not just a beauty studio—we're your partner in self-care and confidence.
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="relative text-center p-8 rounded-2xl bg-white border border-brand-light shadow-sm hover:shadow-brand-primary/20 transition">

              {/* Glow Accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-light/50 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
              bg-brand-light border border-brand-primary shadow-sm mb-6">
                <Icon className="w-8 h-8 text-brand-primary" />
              </div>

              <h3 className="font-serif text-heading-md mb-3 text-brand-dark">
                {feature.title}
              </h3>
              <p className="text-brand-dark/75 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* PROMISE SECTION */}
      <div className="mt-20 bg-brand-light/40 rounded-2xl p-10 md:p-14 border border-brand-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEXT BLOCK */}
          <div>
            <h3 className="font-serif text-heading-md mb-4 text-brand-dark">
              Our Promise to You
            </h3>

            <ul className="space-y-3 text-brand-dark/80">
              {[
                'Professional expertise in every service',
                'Premium products and materials',
                'Personalized attention and care',
                'Consistent quality standards',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 border border-brand-primary flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* VISUAL CARD */}
          <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-light via-brand-primary/20 to-brand-light flex items-center justify-center">
            <Crown className="w-24 h-24 text-brand-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
