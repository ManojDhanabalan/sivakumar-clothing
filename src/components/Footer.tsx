import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Col */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 tracking-tight">WEEKAAS</h3>
            <p className="text-brand-secondary/80 max-w-sm">
              Manufacturers of WEEKAAS Cotton Dhotis, Shirts & Fabrics — Erode, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-brand-secondary/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#products" className="text-brand-secondary/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#why-us" className="text-brand-secondary/80 hover:text-white transition-colors">Why Us</Link></li>
              <li><Link href="#gallery" className="text-brand-secondary/80 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="text-brand-secondary/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-brand-secondary/80">
                <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:9443082462" className="block hover:text-white">9443082462</a>
                  <a href="tel:04242213300" className="block hover:text-white">0424-2213300</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-brand-secondary/80">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:weekaasshirts@gmail.com" className="hover:text-white">weekaasshirts@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-brand-secondary/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Sri Kumarr Cloth Stores<br />
                  20, Madhavakrishna Street,<br />
                  Erode – 638 001,<br />
                  Tamil Nadu, India.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-secondary/20 pt-8 mt-8 text-center text-brand-secondary/60 text-sm">
          <p>© {new Date().getFullYear()} Sri Kumarr Cloth Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
