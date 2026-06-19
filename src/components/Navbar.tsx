"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Products", href: "/#products" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/#about" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-brand-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-brand-secondary/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="WEEKAAS Comfort Clothing" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-heading font-bold text-2xl text-brand-primary tracking-tight">
              WEEKAAS
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden p-2 text-brand-primary hover:bg-brand-primary/10 rounded-md transition-colors">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-brand-secondary">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-2 py-1 text-lg font-medium text-foreground/80 hover:text-brand-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
