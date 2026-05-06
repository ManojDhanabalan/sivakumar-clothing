import Image from "next/image";
import { Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white to-brand-secondary/30 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image with elegant frame */}
          <div className="w-full lg:w-5/12 relative mt-10 lg:mt-0">
            {/* Colorful offset frame */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-brand-accent/80 to-brand-accent/40 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50 blur-sm"></div>
            <div className="absolute -inset-4 md:-inset-6 bg-brand-primary rounded-[2.5rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
            
            <div className="relative h-[500px] md:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-white p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-brand-secondary">
                <Image
                  src="/images/founder.jpg"
                  alt="V. Shivakumar - Founder of WEEKAAS"
                  fill
                  className="object-cover object-top md:object-[center_15%] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-brand-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent">
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-heading text-brand-primary">36+</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-foreground/60">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Typography & Content */}
          <div className="w-full lg:w-7/12 space-y-10 mt-12 lg:mt-0">
            <div className="space-y-4">
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-accent/10 text-brand-accent font-bold tracking-widest uppercase text-xs">Our Heritage</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-[1.1]">
                A Legacy of Quality & <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#8b6508]">Craftsmanship</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
              <p>
                Established in <span className="font-semibold text-brand-primary">1988</span>, Sri Kumarr Cloth Stores — trading under the prestigious brand <strong>WEEKAAS</strong> — has been a trusted cornerstone in the Indian textile industry.
              </p>
              <p>
                Rooted in Erode, Tamil Nadu, we meticulously manufacture and supply premium Cotton Dhotis, Shirts, Lungies, Towels, and Uniforms. Founded by V. Shivakumar, our journey is defined by uncompromising quality, honest business practices, and enduring relationships with our clients worldwide.
              </p>
            </div>

            {/* Elegant Stats Row */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-brand-primary/10">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-primary font-heading mb-2">500<span className="text-brand-accent">+</span></div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-primary font-heading mb-2">100<span className="text-brand-accent">%</span></div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50">Quality Cotton</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-primary font-heading mb-2 flex items-center h-[40px] md:h-[48px]">Bulk</div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50">Orders Welcome</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
