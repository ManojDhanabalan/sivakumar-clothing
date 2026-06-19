"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryClientProps {
  images: string[];
}

export function GalleryClient({ images }: GalleryClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Handle browser back button to close lightbox instead of navigating away
  useEffect(() => {
    if (selectedIndex !== null) {
      window.history.pushState({ lightboxOpen: true }, "");
      const handlePopState = () => {
        closeLightbox(false); // Don't go back in history, just close
      };
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [selectedIndex]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeLightbox = (goBack = true) => {
    setSelectedIndex(null);
    document.body.style.overflow = ""; // Restore scrolling
    if (goBack && window.history.state?.lightboxOpen) {
      window.history.back(); // Clean up the pushed state
    }
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  if (images.length === 0) {
    return (
      <div className="text-center text-foreground/60 py-20">
        <p>No images found in the gallery.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={`/gallery-images/${img}`}
              alt={`Gallery image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay with Zoom Icon */}
            <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white text-brand-primary p-3 rounded-full shadow-xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => closeLightbox()}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/50 hover:bg-white text-white/70 hover:text-black p-3 rounded-full z-50 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button 
            className="absolute left-2 md:left-8 bg-black/50 hover:bg-white text-white/70 hover:text-black p-3 rounded-full z-50 transition-all duration-300"
            onClick={showPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 md:mx-24 flex items-center justify-center p-4">
            <Image
              src={`/gallery-images/${images[selectedIndex]}`}
              alt={`Gallery zoomed image ${selectedIndex + 1}`}
              fill
              className="object-contain animate-in zoom-in-95 duration-300"
              sizes="100vw"
              priority
            />
          </div>

          {/* Navigation Next */}
          <button 
            className="absolute right-2 md:right-8 bg-black/50 hover:bg-white text-white/70 hover:text-black p-3 rounded-full z-50 transition-all duration-300"
            onClick={showNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest bg-black/50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
