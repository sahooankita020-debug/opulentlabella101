import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  // Track if gallery modal is open
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Disable page scrolling when gallery is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isGalleryOpen]);

  return (
   

      <div className="pt-20">
        <Hero />

        {/* Pass state setter to Services */}
        <Services setGalleryOpen={setIsGalleryOpen} />

        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    
  );
}

export default App;
