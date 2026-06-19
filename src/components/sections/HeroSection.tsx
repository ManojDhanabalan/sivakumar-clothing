import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center justify-center bg-[#0c0a09] text-white overflow-hidden pt-14 pb-12 lg:py-32">
      {/* Subtle background glow/curves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#3b271d]/30 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-[#4a3424]/20 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column (Content & Bottom Cards) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full min-h-[70vh]">
            
            {/* Top Content */}
            <div className="pt-4 md:pt-12 mb-12 lg:mb-24">
              <div className="flex items-center gap-3 text-[#d4af37] mb-4 lg:mb-6 uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-semibold">
                <span>Finest Cotton</span>
              </div>
              
              <h1 className="font-cursive font-normal text-6xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] leading-[0.9] tracking-normal mb-2 lg:mb-4 text-white drop-shadow-md">
                Sri Kumarr
              </h1>
              <h2 className="font-cursive font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-[#c69c6d] leading-[1] drop-shadow-sm mb-10 lg:mb-14">
                Comfort Clothing
              </h2>

              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <a href="#products" className="inline-flex items-center justify-center rounded-full bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-sm lg:text-base h-12 lg:h-14 px-8 lg:px-10 font-medium tracking-widest uppercase transition-all duration-300">
                  Explore Now
                </a>
              </div>
            </div>

            {/* Bottom Cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-auto">
              {/* Bottom Left Transparent Card */}
              <div className="border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col justify-between min-h-[250px] sm:aspect-square sm:max-h-[320px] backdrop-blur-md shadow-2xl">
                <div>
                  <div className="flex -space-x-3 mb-4 lg:mb-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#0c0a09] overflow-hidden relative"><Image src="/images/hero_banner.png" alt="preview" fill className="object-cover" /></div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#0c0a09] overflow-hidden relative"><Image src="/images/product_dhoti_stripe.png" alt="preview" fill className="object-cover" /></div>
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-heading font-medium leading-tight mb-2 lg:mb-4 drop-shadow-sm">
                    Manufacturers of<br/>Premium Quality<br/>Clothing
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 lg:mb-6">
                    Cotton Dhotis, Shirts & Fabrics with uncompromising quality.
                  </p>
                </div>
                <a href="#about" className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-white flex items-center gap-2 hover:text-[#d4af37] transition-colors w-max mt-auto">
                  LEARN MORE <span className="text-base lg:text-lg">→</span>
                </a>
              </div>

              {/* Bottom Middle Image Card */}
              <div className="relative p-6 md:p-8 flex flex-col justify-end min-h-[250px] sm:aspect-square sm:max-h-[320px] bg-[#221711] overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 z-0">
                  <Image src="/product-images/we-3.png" alt="Wedding Pattu Combos" fill className="object-cover object-center lg:object-[50%_75%] opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/20 to-transparent"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-[#d4af37]/50 flex items-center justify-center mb-12 lg:mb-16 text-[#d4af37] backdrop-blur-sm">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p className="text-[#d4af37] font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base leading-snug drop-shadow-md">
                    WEDDING<br/>PATTU COMBOS
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="lg:col-span-4 flex flex-col h-full gap-4 lg:gap-2 mt-8 lg:mt-0">
            {/* Top Right Card */}
            <div className="bg-[#2a1c12] p-6 lg:p-8 flex flex-col justify-end relative h-[280px] sm:h-[350px] lg:h-[45vh] lg:min-h-[350px] group overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                <Image src="/product-images/we-9.png" alt="Classic Dhoti Sets" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              </div>
              <div className="relative z-10 w-fit mb-4">
                <p className="text-[10px] lg:text-xs text-white/90 uppercase tracking-widest font-semibold mb-1 drop-shadow-md">Premium Quality</p>
                <p className="text-xl lg:text-2xl font-serif text-white drop-shadow-lg">Classic Dhoti Sets</p>
              </div>
              
              {/* Little decorative dots */}
              <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
              </div>
              
              {/* Decorative icon connecting the cards (hidden on mobile since cards stack with gap) */}
              <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1f140d] rotate-45 z-20 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -rotate-45 text-[#d4af37]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9h8l-6.5 5.5L19 22l-7-5-7 5 2.5-7.5L1 9h8z"/></svg>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-[#38271a] p-6 lg:p-8 flex flex-col relative h-[280px] sm:h-[350px] lg:h-[45vh] lg:min-h-[350px] group overflow-hidden shadow-2xl">
              <div className="relative z-20 flex justify-between items-start drop-shadow-xl">
                <div className="pr-4 bg-black/20 p-2 rounded-sm backdrop-blur-[2px] w-fit">
                  <p className="text-lg sm:text-xl md:text-2xl font-serif text-white leading-tight drop-shadow-lg">Color Shirt &<br/>Dhoti Sets</p>
                </div>
                <a href="#products" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-black transition-colors shrink-0 bg-black/20 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 17 9.2-9.2M17 17V7H7"/></svg>
                </a>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-[100%] z-0 transition-transform duration-700 group-hover:scale-105">
                <div className="relative w-full h-full">
                  <Image src="/product-images/we-4.png" alt="Color Shirt and Dhoti Sets" fill className="object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#38271a]/90 via-[#38271a]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
