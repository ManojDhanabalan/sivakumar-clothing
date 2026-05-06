import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-primary text-white relative overflow-hidden">
      {/* Decorative Circles from the reference image */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-brand-accent/40 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-8 left-8 w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-white/20 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-accent/20 rounded-full blur-[100px] translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">
          
          {/* Left Column - Huge Title */}
          <div className="w-full lg:w-5/12 space-y-2">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Contact Us
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-brand-secondary/90 leading-tight">
              Get In Touch
            </h3>
          </div>

          {/* Right Column - Contact List */}
          <div className="w-full lg:w-6/12 space-y-8">
            
            {/* Email Address */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 border border-brand-accent/50 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="space-y-2 border-b border-white/10 pb-8 w-full">
                <h4 className="text-xl md:text-2xl font-bold font-heading text-white">Email Address</h4>
                <a href="mailto:weekaasshirts@gmail.com" className="block text-lg text-brand-secondary/70 hover:text-brand-accent transition-colors">
                  weekaasshirts@gmail.com
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-6 group">
              <a
                href="https://www.google.com/maps/place/20,+Madhava+Krishna+St,+Rkv+Nagar,+Ramanuja+Nagar,+Erode,+Tamil+Nadu+638001/@11.3443123,77.7296342,17z"
                target="_blank"
                rel="noreferrer"
                aria-label="View on Google Maps"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 border border-brand-accent/50 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300"
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <div className="space-y-2 border-b border-white/10 pb-8 w-full">
                <h4 className="text-xl md:text-2xl font-bold font-heading text-white">Office Address</h4>
                <a
                  href="https://www.google.com/maps/place/20,+Madhava+Krishna+St,+Rkv+Nagar,+Ramanuja+Nagar,+Erode,+Tamil+Nadu+638001/@11.3443123,77.7296342,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg text-brand-secondary/70 hover:text-brand-accent transition-colors leading-relaxed"
                >
                  Sri Kumarr Cloth Stores, 20, Madhavakrishna Street,<br />
                  Erode – 638 001, Tamil Nadu, India.
                </a>
              </div>
            </div>

            {/* Contact Number */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 border border-brand-accent/50 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="space-y-2 pb-4 w-full">
                <h4 className="text-xl md:text-2xl font-bold font-heading text-white">Contact Number</h4>
                <a href="tel:9443082462" className="block text-lg text-brand-secondary/70 hover:text-brand-accent transition-colors">
                  +91 94430 82462
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
