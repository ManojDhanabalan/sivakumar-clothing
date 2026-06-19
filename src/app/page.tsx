import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

// Section order as requested:
// 1. Hero  2. Products  3. About Us  4. Why Choose Us  5. Testimonials  6. Contact
// Gallery ("Our Collection") removed as per user request.

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — Our Products */}
      <ProductsSection />

      {/* 3 — About Us */}
      <AboutSection />

      {/* 4 — Why Choose Us */}
      <WhyChooseUsSection />

      {/* 5 — Testimonials */}
      <TestimonialsSection />

      {/* 6 — Contact */}
      <ContactSection />
    </>
  );
}
