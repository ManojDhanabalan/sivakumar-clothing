import fs from 'fs';
import path from 'path';
import { GalleryClient } from '@/components/GalleryClient';

export const metadata = {
  title: "Gallery | WEEKAAS",
  description: "Explore our collection of premium comfort clothing.",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery-images');
  
  let images: string[] = [];
  try {
    const files = fs.readdirSync(galleryDir);
    images = files.filter(file => file.match(/\.(jpe?g|png|gif|webp)$/i));
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  return (
    <main className="min-h-screen bg-brand-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover the elegance and comfort of WEEKAAS clothing through our curated collection.
          </p>
        </div>

        <GalleryClient images={images} />
      </div>
    </main>
  );
}
