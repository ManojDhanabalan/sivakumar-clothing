import Image from "next/image";

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            Our Collection
          </h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto mb-6"></div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-auto md:h-[800px] flex flex-col md:block gap-6 py-4">
          
          {/* Mobile View: Masonry/Grid */}
          <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4">
            <div className="col-span-2 relative aspect-[4/3] overflow-hidden shadow-md bg-white border-[6px] border-white">
              <div className="relative w-full h-full"><Image src="/images/w-1.jpeg" alt="Center Collection" fill className="object-cover" /></div>
            </div>
            <div className="relative aspect-square overflow-hidden shadow-sm bg-white border-4 border-white">
               <div className="relative w-full h-full"><Image src="/images/product_dhoti_stripe.png" alt="Gallery" fill className="object-cover" /></div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden shadow-sm bg-white border-4 border-white">
               <div className="relative w-full h-full"><Image src="/images/product_color_match.png" alt="Gallery" fill className="object-cover" /></div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden shadow-sm bg-white border-4 border-white">
               <div className="relative w-full h-full"><Image src="/images/product_copper_linen.png" alt="Gallery" fill className="object-cover" /></div>
            </div>
            <div className="relative aspect-square overflow-hidden shadow-sm bg-white border-4 border-white">
               <div className="relative w-full h-full"><Image src="/images/product_kasavu_combo.png" alt="Gallery" fill className="object-cover" /></div>
            </div>
          </div>

          {/* Desktop View: Scattered Collage */}
          <div className="hidden md:block absolute inset-0">
            {/* Center Large Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white border-[12px] border-white shadow-2xl z-30 hover:scale-105 transition-transform duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/w-1.jpeg" alt="Main Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Top Left */}
            <div className="absolute top-[8%] left-[15%] w-[200px] h-[250px] bg-white border-[8px] border-white shadow-lg z-10 -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/product_dhoti_stripe.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Top Center-Right */}
            <div className="absolute top-[2%] right-[30%] w-[180px] h-[220px] bg-white border-[8px] border-white shadow-lg z-20 rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/product_copper_linen.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Middle Left (Far) */}
            <div className="absolute top-[40%] left-[2%] w-[220px] h-[220px] bg-white border-[8px] border-white shadow-lg z-20 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/product_color_match.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Middle Right */}
            <div className="absolute top-[35%] right-[5%] w-[260px] h-[180px] bg-white border-[8px] border-white shadow-lg z-10 rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/product_kasavu_combo.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[5%] left-[20%] w-[240px] h-[180px] bg-white border-[8px] border-white shadow-lg z-20 rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/about_pattern.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[10%] right-[22%] w-[180px] h-[240px] bg-white border-[8px] border-white shadow-lg z-20 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/product_dhoti_stripe.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            
            {/* Extra Small accent image 1 */}
            <div className="absolute top-[25%] right-[10%] w-[100px] h-[100px] bg-white border-[4px] border-white shadow-md z-30 rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/product_copper_linen.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Extra Small accent image 2 */}
            <div className="absolute bottom-[20%] left-[8%] w-[120px] h-[100px] bg-white border-[4px] border-white shadow-md z-30 -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 hover:z-50 cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/product_kasavu_combo.png" alt="Collection" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
