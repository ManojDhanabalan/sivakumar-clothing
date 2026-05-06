import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone } from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Location Button */}
        <a 
          href="https://www.google.com/maps/place/20,+Madhava+Krishna+St,+Rkv+Nagar,+Ramanuja+Nagar,+Erode,+Tamil+Nadu+638001/@11.3443123,77.7296342,17z"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-brand-primary/50 flex items-center justify-center group"
          aria-label="View on Google Maps"
        >
          <MapPin className="w-6 h-6" />
        </a>

        {/* Phone Button */}
        <a 
          href="tel:9443082462" 
          className="w-14 h-14 bg-white text-brand-primary border border-brand-primary/20 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-brand-primary/20 flex items-center justify-center group"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919443082462" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-[#25D366]/50 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.887.118.592-.086 1.822-.744 2.08-1.464.256-.72.256-1.338.179-1.464z"/></svg>
        </a>
      </div>
    </div>
  );
}
