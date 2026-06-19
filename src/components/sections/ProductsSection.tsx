 "use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "919443082462";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

// All 13 real product images mapped to correct names based on textile products
const ALL_PRODUCTS = [
  {
    name: "MENS FORMAL SHIRTS",
    desc: "Premium cotton formal shirts available in a wide spectrum of rich colors for everyday office wear.",
    img: "/product-images/we-1.png",
    tag: "Corporate",
    wa: WHATSAPP_BASE,
  },
  {
    name: "KERALA KASAVU DHOTI COMBO",
    desc: "Matching pure cotton white shirt and kasavu dhoti for men. Perfect for weddings and auspicious occasions.",
    img: "/product-images/we-2.png",
    tag: "Best Seller",
    wa: WHATSAPP_BASE,
  },
  {
    name: "WEDDING PATTU DHOTI SET",
    desc: "Elegant traditional wear designed for special ceremonies. Premium quality weave with golden zari border.",
    img: "/product-images/we-3.png",
    tag: "Premium",
    wa: WHATSAPP_BASE,
  },
  {
    name: "COLOR SHIRT & DHOTI SET",
    desc: "Curated collection of rich colored shirts paired with coordinating border dhotis. Over 12 shades available.",
    img: "/product-images/we-4.png",
    tag: "Popular",
    wa: WHATSAPP_BASE,
  },
  {
    name: "FANCY BORDER DHOTI",
    desc: "Classic white cotton dhoti with elegant colored border stripes. Soft, breathable and perfect for temple visits.",
    img: "/product-images/we-5.png",
    tag: "Traditional",
    wa: WHATSAPP_BASE,
  },
  {
    name: "COLOR DHOTI",
    desc: "Make a statement with our deep solid colored dhotis in rich red, emerald green, and royal blue.",
    img: "/product-images/we-6.png",
    tag: "New",
    wa: WHATSAPP_BASE,
  },
  {
    name: "BOYS DHOTI SHIRT SET",
    desc: "Comfortable and authentic traditional wear for children. Specially woven soft cotton for kids' sensitive skin.",
    img: "/product-images/we-7.png",
    tag: "Kids",
    wa: WHATSAPP_BASE,
  },
  {
    name: "CREAM SHIRT DHOTI COMBO",
    desc: "Top-tier cream color shirts paired with grand kasavu dhotis. Unmatched quality for your most important days.",
    img: "/product-images/we-8.png",
    tag: "Exclusive",
    wa: WHATSAPP_BASE,
  },
  {
    name: "DHOTI FABRICS",
    desc: "Premium unstitched fabric in elegant pastel shades. Perfect for custom tailoring and boutique orders.",
    img: "/product-images/we-10.png",
    tag: "Fabric",
    wa: WHATSAPP_BASE,
  },
  {
    name: "PASTEL SHIRT & DHOTI SET",
    desc: "Light, airy pastel shirts paired with classic dhotis. A modern take on traditional festive wear.",
    img: "/product-images/we-11.png",
    tag: "Modern",
    wa: WHATSAPP_BASE,
  },
  {
    name: "MENS COLOR BORDER DHOTI",
    desc: "Coordinated outfits for the groom squad. Available in various colors for bulk wedding party orders.",
    img: "/product-images/we-12.png",
    tag: "Bulk",
    wa: WHATSAPP_BASE,
  },
  {
    name: "PASTEL SHIRT & MATCHING DHOTI",
    desc: "Contemporary pastel shirts with color-coordinated dhoti borders. Blending comfort with modern aesthetics.",
    img: "/product-images/we-13.png",
    tag: "Trendy",
    wa: WHATSAPP_BASE,
  },
];

// WhatsApp SVG icon
function WAIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.887.118.592-.086 1.822-.744 2.08-1.464.256-.72.256-1.338.179-1.464z"/>
    </svg>
  );
}

export function ProductsSection() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    window.history.pushState({ lightbox: true }, "");
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
    if (typeof window !== "undefined" && window.history.state?.lightbox) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setLightboxIdx(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  const prevImg = () => setLightboxIdx((i) => (i === null ? null : (i - 1 + ALL_PRODUCTS.length) % ALL_PRODUCTS.length));
  const nextImg = () => setLightboxIdx((i) => (i === null ? null : (i + 1) % ALL_PRODUCTS.length));

  const current = lightboxIdx !== null ? ALL_PRODUCTS[lightboxIdx] : null;

  return (
    <section id="products" className="py-20 md:py-28 bg-[#faf9f7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-accent/10 text-brand-accent font-bold tracking-widest uppercase text-xs mb-4">Our Products</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            Our Collection
          </h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Premium quality cotton clothing manufactured in Erode. Click any product to view full size or order directly via WhatsApp.
          </p>
        </div>

        {/* Products Grid — Minimal 3-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {ALL_PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col"
            >
              {/* Image — click to open lightbox */}
              <div
                className="relative aspect-square sm:aspect-[3/4] w-full overflow-hidden cursor-zoom-in bg-brand-secondary/10"
                onClick={() => openLightbox(idx)}
                role="button"
                aria-label={`View ${product.name} full size`}
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="pt-4 pb-2 flex items-center justify-between gap-3 bg-transparent">
                {/* Left: Title */}
                <h3 className="font-heading font-medium tracking-[0.05em] text-xs md:text-sm text-foreground/80 uppercase leading-tight flex-grow line-clamp-1">
                  {product.name}
                </h3>

                {/* Right: Actions */}
                <div className="flex items-center gap-3 shrink-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Full View */}
                  <button
                    onClick={() => openLightbox(idx)}
                    className="text-foreground/40 hover:text-brand-primary transition-colors duration-300"
                    aria-label={`View ${product.name} full size`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>

                  {/* WhatsApp */}
                  <a
                    href={product.wa}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#25D366]/80 hover:text-[#25D366] hover:scale-110 transition-all duration-300"
                    aria-label={`Order ${product.name} on WhatsApp`}
                  >
                    <WAIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom WhatsApp CTA banner */}
        <div className="mt-20 bg-brand-primary rounded-none p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">Need a Bulk Order?</h3>
            <p className="text-white/80 text-base font-light">We supply wholesale quantities pan-India for corporates, temples & institutions.</p>
          </div>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-none text-base transition-all duration-300 shadow-lg whitespace-nowrap shrink-0 uppercase tracking-wider text-sm"
          >
            <WAIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ── Lightbox / Max View Modal ─────────────────────────────────────────── */}
      {lightboxIdx !== null && current && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 md:top-6 right-4 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-[95vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.img}
              alt={current.name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* WhatsApp Floating Button */}
          <a
            href={current.wa}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-20 inline-flex items-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
            aria-label={`Order ${current.name} on WhatsApp`}
          >
            <WAIcon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline">Order Now</span>
          </a>
        </div>
      )}
    </section>
  );
}
