import { MessageCircle, CreditCard, Sparkles, Gift } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Book Your Appointment',
    description: 'Contact us via WhatsApp or phone to choose your preferred service and time slot.',
  },
  {
    icon: CreditCard,
    title: 'Confirm with a Deposit',
    description: 'Secure your appointment with a small deposit to ensure your booking.',
  },
  {
    icon: Sparkles,
    title: 'Enjoy Your Service',
    description: 'Relax and indulge in a luxurious beauty experience with our professionals.',
  },
  {
    icon: Gift,
    title: 'Rebook with Incentives',
    description: 'Enjoy exclusive loyalty rewards and special offers for returning clients.',
  },
];

export default function HowItWorks() {
  return (
    <section className="pt-32 pb-section px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">

      <div className="text-center mb-20">
        <h2 className="font-serif text-heading-lg mb-4 text-brand-dark">
          How It Works
        </h2>
        <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
          Four simple steps to your next beauty appointment.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative text-center">

              {/* Number Circle */}
              <div className="mx-auto w-20 h-20 rounded-full 
              bg-brand-primary text-white text-2xl font-bold 
              flex items-center justify-center shadow-md">
                {idx + 1}
              </div>

              {/* Icon Below Number */}
              <div className="mx-auto mt-4 w-12 h-12 rounded-full 
              bg-brand-light border border-brand-primary 
              flex items-center justify-center shadow-sm">
                <Icon className="w-6 h-6 text-brand-primary" />
              </div>

              {/* Title */}
              <h3 className="mt-6 font-serif text-heading-md text-brand-dark">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-brand-dark/75 leading-relaxed px-4">
                {step.description}
              </p>

            </div>
          );
        })}
      </div>

      {/* Highlights */}
      <div className="mt-20 bg-brand-light/40 rounded-2xl p-10 md:p-12 border border-brand-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">48 hrs</div>
            <p className="text-brand-dark/75">Cancellation policy allows changes within 48 hours.</p>
          </div>

          <div className="border-l border-r border-brand-primary/25 px-8">
            <div className="text-3xl font-bold text-brand-primary mb-2">Flexible</div>
            <p className="text-brand-dark/75">Easy rescheduling and flexible booking times.</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">Secure</div>
            <p className="text-brand-dark/75">Your booking is secured with a deposit system.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
