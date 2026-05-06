import { Card, CardContent } from "@/components/ui/card";

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Products
          </h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {[
            { 
              name: "Kerala Multi-Stripe Dhoti", 
              desc: "Traditional cotton dhotis with vibrant multi-color stripe borders. Perfect for festive and daily wear.",
              img: "/images/product_dhoti_stripe.png"
            },
            { 
              name: "White Shirt & Kasavu Dhoti", 
              desc: "Classic white formal shirts paired with elegant gold-bordered kasavu dhotis for ceremonies.",
              img: "/images/product_kasavu_combo.png"
            },
            { 
              name: "Copper Linen & Kasavu", 
              desc: "Premium linen shirts with sophisticated copper/gold tone Kasavu dhotis. A perfect blend of tradition.",
              img: "/images/product_copper_linen.png"
            },
            { 
              name: "Premium Color Match", 
              desc: "Curated shirt and dhoti sets in coordinated colors — pink, teal, maroon, olive, and more.",
              img: "/images/product_color_match.png"
            }
          ].map((product, idx) => (
            <Card key={idx} className="overflow-hidden border border-brand-primary/10 hover:border-brand-accent transition-all duration-300 group bg-brand-secondary/10 flex flex-col justify-center">
              <div className="relative h-64 overflow-hidden bg-brand-secondary/30 shrink-0">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Fallback watermark */}
                <div className="hidden absolute inset-0 bg-brand-primary/5 flex items-center justify-center -z-10">
                  <span className="text-brand-primary/20 font-heading font-bold text-xl opacity-50">WEEKAAS</span>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-lg mb-3 text-brand-primary leading-tight">{product.name}</h3>
                <p className="text-foreground/70 text-sm mb-2 flex-grow">
                  {product.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary mb-8">Other Products</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "Cotton Lungies",
              "Cotton Towels",
              "Uniform Shirts",
              "Premium T-Shirts"
            ].map((title, idx) => (
              <div key={idx} className="bg-brand-secondary/20 border border-brand-primary/20 text-brand-primary font-heading font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:bg-brand-secondary/40 transition-all duration-300">
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
