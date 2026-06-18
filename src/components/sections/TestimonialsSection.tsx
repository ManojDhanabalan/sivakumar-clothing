"use client";

import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "Excellent quality dhotis at very reasonable prices. Delivered on time for our temple event.",
    name: "Ramesh K.",
    location: "Coimbatore",
    rating: 5,
    initial: "R",
  },
  {
    quote: "We ordered 200 uniform shirts for our company. Perfect stitching and delivery within the promised date.",
    name: "HR Manager",
    location: "Erode Textiles",
    rating: 5,
    initial: "E",
  },
  {
    quote: "Best kasavu combo sets for weddings. All our relatives loved the quality. Will order again!",
    name: "Lakshmi V.",
    location: "Chennai",
    rating: 5,
    initial: "L",
  },
  {
    quote: "Reliable supplier for over 10 years. Sri Kumarr Cloth Stores never disappoints on quality.",
    name: "Wholesale Buyer",
    location: "Salem",
    rating: 5,
    initial: "W",
  },
  {
    quote: "Ordered bulk lungies for our event. Superb fabric quality and very competitive pricing. Highly recommend!",
    name: "Suresh M.",
    location: "Tiruppur",
    rating: 5,
    initial: "S",
  },
  {
    quote: "The copper linen shirt and dhoti combo was a hit at our family function. Premium quality at fair prices.",
    name: "Karthik R.",
    location: "Bangalore",
    rating: 5,
    initial: "K",
  },
  {
    quote: "Supplied dhotis and shirts for our panchayat function — 300 pieces delivered on time. Excellent service!",
    name: "Panchayat Secretary",
    location: "Namakkal",
    rating: 5,
    initial: "P",
  },
  {
    quote: "Pan-India delivery works flawlessly. Got my order in Mumbai within 3 days. Top quality cotton fabric.",
    name: "Rajesh S.",
    location: "Mumbai",
    rating: 5,
    initial: "R",
  },
  {
    quote: "Sri Kumarr's kasavu dhoti is the best I've worn in 20 years. Pure cotton, great feel, perfect border.",
    name: "Annamalai T.",
    location: "Madurai",
    rating: 5,
    initial: "A",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-brand-accent" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 backdrop-blur-sm mx-3 select-none">
      <StarRating count={t.rating} />
      <p className="text-white/85 text-sm md:text-base leading-relaxed mb-5 font-light italic">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-brand-accent/30 border border-brand-accent/50 flex items-center justify-center font-bold text-brand-accent text-sm shrink-0">
          {t.initial}
        </div>
        <div>
          <div className="font-bold text-white text-sm">{t.name}</div>
          <div className="text-white/50 text-xs">{t.location}</div>
        </div>
        <div className="ml-auto">
          <svg className="w-7 h-7 text-brand-accent/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  // Infinite marquee — CSS animation via inline keyframes
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-brand-primary overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  35s linear infinite; }
        .marquee-right { animation: marquee-right 30s linear infinite; }
        .marquee-left:hover,
        .marquee-right:hover { animation-play-state: paused; }
      `}</style>

      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-14">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-brand-accent" />
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm">Client Reviews</span>
          <div className="w-12 h-px bg-brand-accent" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
          Trusted by 500+ satisfied clients across India for over 36 years.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-5 overflow-hidden" ref={track1Ref}>
        <div className="flex marquee-left w-max">
          {/* Duplicate the list for seamless loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (opposite direction, offset start) */}
      <div className="overflow-hidden" ref={track2Ref}>
        <div className="flex marquee-right w-max">
          {[...TESTIMONIALS.slice(4), ...TESTIMONIALS, ...TESTIMONIALS.slice(0, 4)].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-14 text-center">
        <p className="text-white/60 mb-5 font-medium">Join 500+ satisfied clients. Place your order today.</p>
        <a
          href="https://wa.me/919443082462?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order.%20Please%20share%20details."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold py-4 px-10 rounded-xl text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/40"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.887.118.592-.086 1.822-.744 2.08-1.464.256-.72.256-1.338.179-1.464z"/>
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}
