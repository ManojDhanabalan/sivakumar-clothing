import { Award, ShieldCheck, Factory, Truck, Users, MapPin } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    { 
      icon: Award, 
      title: "36+ Years of Experience", 
      desc: "A legacy of trust built since 1988 in the heart of Tamil Nadu's textile industry.",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: ShieldCheck, 
      title: "Premium Quality Fabrics", 
      desc: "We use only the finest cotton yarns and fabrics — soft, durable, and comfortable for all-day wear.",
      bgImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: Factory, 
      title: "Direct Manufacturer Pricing", 
      desc: "Wholesale rates with no middlemen. Best pricing for both retail and bulk buyers.",
      bgImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: Truck, 
      title: "Bulk Order Capability", 
      desc: "We handle large-scale orders for corporates, events, temples, and institutions with ease.",
      bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: Users, 
      title: "Trusted by 500+ Clients", 
      desc: "From individual customers to major companies — our client base spans across South India and beyond.",
      bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: MapPin, 
      title: "Pan-India Delivery", 
      desc: "We ship our products reliably across India. Contact us for wholesale and outstation orders.",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-brand-primary text-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-end mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm">Our Excellence</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Why Choose <br className="hidden md:block"/>
              <span className="text-brand-accent">WEEKAAS?</span>
            </h2>
          </div>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl md:pb-4">
            We combine decades of heritage with modern manufacturing to deliver uncompromising quality and value to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative border border-white/10 rounded-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-[340px] md:h-[380px] bg-brand-primary"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              ></div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/70 to-transparent transition-colors duration-500"></div>
              
              {/* Extra Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-brand-accent/40 via-brand-accent/5 to-transparent transition-opacity duration-500 mix-blend-overlay"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:scale-110 group-hover:shadow-[0_0_20px_0_rgba(197,160,89,0.4)]">
                  <feature.icon className="w-7 h-7 text-white group-hover:text-brand-primary transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3 text-white group-hover:text-brand-accent transition-colors duration-300 transform group-hover:-translate-y-1">{feature.title}</h3>
                <p className="text-white/70 font-light leading-relaxed group-hover:text-white/95 transition-all duration-300 transform group-hover:-translate-y-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
