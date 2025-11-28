import { useState } from "react";
import { Scissors, Sparkles, Brush, Flower, Eye } from "lucide-react";
import GalleryModal from "./GalleryModal";

type ServicesProps = {
  setGalleryOpen: (value: boolean) => void;
};

const services = [
  {
    icon: Flower,
    title: "Nails",
    description:
      "Manicures and pedicures with premium care for healthy, beautiful nails.",
  },
  {
    icon: Brush,
    title: "Makeup",
    description:
      "Expert makeup application for any occasion, from everyday to special events.",
  },
  {
    icon: Scissors,
    title: "Hair",
    description:
      "Professional Wig Installation, Wig Treatment, Wig Sales, Hair Treatment, and Braids — premium care for beautiful, long-lasting results.",
  },
  {
    icon: Sparkles,
    title: "Waxing",
    description:
      "Gentle, professional waxing services for smooth, long-lasting results.",
  },
  {
    icon: Eye,
    title: "Lashes",
    description:
      "Premium lash extensions, lash lifts, tinting, and brow shape-ups for a flawless look.",
  },
];

const serviceImages: Record<string, string[]> = {
  Nails: [
    "/services/nails/nails1.jpg",
    "/services/nails/nails2.jpg",
    "/services/nails/nails3.jpg",
    "/services/nails/nails4.jpg",
    "/services/nails/nails5.jpg",
    "/services/nails/nails6.jpg",
    "/services/nails/nails7.jpg",
    "/services/nails/nails8.jpg",
    "/services/nails/nails9.jpg",
    "/services/nails/nails10.jpg",
    "/services/nails/nails11.jpg",
    "/services/nails/nails12.jpg",
    "/services/nails/nails13.jpg",
    "/services/nails/nails14.jpg",
    "/services/nails/nails15.jpg",
    
  ],
  Makeup: [
    "/services/makeup/makeup1.jpg",
    "/services/makeup/makeup2.webp",
    "/services/makeup/makeup3.webp",
    "/services/makeup/makeup4.webp",
    "/services/makeup/makeup5.webp",
    "/services/makeup/makeup6.jpg",
  ],
  Hair: [
    "/services/hair/hair1.jpg",
  ],
  Waxing: [
    "/services/waxing/wax1.jpg",
    "/services/waxing/wax2.jpg",
    "/services/waxing/wax3.jpg",
    "/services/waxing/wax4.jpg",
    "/services/waxing/wax5.jpg",
    "/services/waxing/wax6.jpg",  
    "/services/waxing/wax7.jpg",
    "/services/waxing/wax8.jpg",
    "/services/waxing/wax9.jpg",
    "/services/waxing/wax10.jpg",
    
  ],
  Lashes: [
    "/services/lashes/lash1.jpg",
    "/services/lashes/lash2.jpg",
    "/services/lashes/lash3.jpg",
    "/services/lashes/lash4.jpg",
    "/services/lashes/lash5.jpg",
    "/services/lashes/lash6.jpg",
  
  ],
};

export default function Services({ setGalleryOpen }: ServicesProps) {
  const [openGallery, setOpenGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const handleExplore = (serviceTitle: string) => {
    const imgs = serviceImages[serviceTitle] || [];
    setGalleryImages(imgs);
    setOpenGallery(true);
    setGalleryOpen(true); // IMPORTANT
  };

  return (
    <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="font-serif text-heading-lg mb-4 text-brand-dark">
          Our Services
        </h2>
        <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
          Everything you need for a complete beauty experience, all under one roof.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-2xl p-8 bg-white border border-brand-light
              hover:border-brand-primary hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
                bg-gradient-to-br from-brand-light to-brand-primary/25 mb-6">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>

                <h3 className="font-serif text-heading-md mb-3 text-brand-dark">
                  {service.title}
                </h3>

                <p className="text-brand-dark/75 leading-relaxed">
                  {service.description}
                </p>

                <div
                  onClick={() => handleExplore(service.title)}
                  className="mt-6 flex items-center text-brand-primary font-semibold cursor-pointer"
                >
                  <span>Explore</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULLSCREEN GALLERY */}
      <GalleryModal
        images={galleryImages}
        open={openGallery}
        onClose={() => {
          setOpenGallery(false);
          setGalleryOpen(false); // IMPORTANT
        }}
      />
    </section>
  );
}
