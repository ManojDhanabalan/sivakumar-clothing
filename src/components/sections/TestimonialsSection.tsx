import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto"></div>
        </div>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {[
              { quote: "Excellent quality dhotis at very reasonable prices. Delivered on time for our temple event.", name: "Ramesh K.", location: "Coimbatore" },
              { quote: "We ordered 200 uniform shirts for our company. Perfect stitching and delivery within the promised date.", name: "HR Manager", location: "Erode Textiles" },
              { quote: "Best kasavu combo sets for weddings. All our relatives loved the quality. Will order again!", name: "Lakshmi V.", location: "Chennai" },
              { quote: "Reliable supplier for over 10 years. Sri Kumarr Cloth Stores never disappoints on quality.", name: "Wholesale Buyer", location: "Salem" },
            ].map((testimonial, i) => (
              <CarouselItem key={i}>
                <div className="p-6 md:p-10">
                  <div className="text-brand-accent mb-6">
                    <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  <p className="text-xl md:text-2xl font-serif italic text-foreground/80 mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-brand-primary text-lg">{testimonial.name}</div>
                    <div className="text-foreground/60 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-brand-primary text-brand-primary" />
          <CarouselNext className="hidden md:flex -right-12 border-brand-primary text-brand-primary" />
        </Carousel>
        
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4 font-medium">Join 500+ satisfied clients. Order today.</p>
          <a href="#contact" className="inline-flex items-center justify-center h-10 px-8 rounded-md bg-brand-primary hover:bg-brand-primary/90 text-brand-secondary font-medium transition-colors">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
