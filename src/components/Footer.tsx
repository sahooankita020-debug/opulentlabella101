import { Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand Block */}
          <div>
            <h3 className="font-serif text-xl text-brand-cream mb-4">Opulentlabella</h3>
            <p className="text-sm leading-relaxed text-brand-cream/80">
              Luxury beauty services at accessible prices. Your destination for nails, makeup,
              lashes, waxing, and hair styling.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-brand-cream mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-brand-primary transition">Nails</a></li>
              <li><a className="hover:text-brand-primary transition">Makeup</a></li>
              <li><a className="hover:text-brand-primary transition">Hair</a></li>
              <li><a className="hover:text-brand-primary transition">Waxing</a></li>
              <li><a className="hover:text-brand-primary transition">Lashes</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-brand-cream mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-brand-primary transition">About Us</a></li>
              <li><a className="hover:text-brand-primary transition">Booking Policy</a></li>
              <li><a className="hover:text-brand-primary transition">Cancellation Policy</a></li>
              <li><a className="hover:text-brand-primary transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-brand-cream mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary" />
                <a href="tel:+276`4522153" className="hover:text-brand-primary transition">
                  +27 61 452 2153
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-brand-primary" />
                <a href="https://wa.me/27614522153" target="_blank" className="hover:text-brand-primary transition">
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-brand-primary" />
                <a href="https://instagram.com/opulentlabella" target="_blank" className="hover:text-brand-primary transition">
                  @opulentlabella
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* HOURS + LOCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-brand-primary/30">

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-brand-primary mt-1" />
            <div>
              <p className="font-semibold text-brand-cream mb-2">Hours</p>
              <p className="text-sm text-brand-cream/85">Mon - Fri: 09:00 AM - 17:30 PM</p>
              <p className="text-sm text-brand-cream/85">Sat: 09:00 AM - 13:30 PM</p>
              <p className="text-sm text-brand-cream/85">Sunday: Closed</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-brand-primary mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Our Locations</h3>
          <ul className="space-y-4">

            <li>
              <p className="font-semibold text-white">Kimberley (KBY)</p>
              <p>15565 Nobengula Street</p>
              <p>Vergenoeg</p>
              <p>8345, South Africa</p>
            </li>

            <li>
              <p className="font-semibold text-white">Johannesburg (JHB)</p>
              <p>Mykonos</p>
              <p>Hera Lane, Lone Hill</p>
              <p>Sandton, 2062, South Africa</p>
            </li>

            <li>
              <p className="font-semibold text-white">Durban (DBN)</p>
              <p>1 Regal Crescent</p>
              <p>New Germany</p>
              <p>3610, South Africa</p>
            </li>

          </ul>
        </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-brand-primary/30 text-center text-sm text-brand-cream/70">
          © {new Date().getFullYear()} Opulentlabella — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
