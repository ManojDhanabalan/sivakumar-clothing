import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-cursive",
  subsets: ["latin"],
});

const SITE_URL = "https://www.weekaasshirts.com";
const BUSINESS_NAME = "WEEKAAS | Sri Kumarr Cloth Stores";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WEEKAAS | Best Cotton Dhotis, Shirts & Fabrics in Erode | Sri Kumarr Cloth Stores",
    template: "%s | WEEKAAS – Erode Cloth Store",
  },
  description:
    "Sri Kumarr Cloth Stores (WEEKAAS) is Erode's leading manufacturer of premium Cotton Dhotis, Shirts, Kasavu Combos and Fabrics since 1988. Wholesale & bulk orders across India. Call +91 94430 82462.",
  keywords: [
    // Hyperlocal Erode keywords
    "cloth stores in erode",
    "clothing manufacturer erode",
    "cotton dhoti manufacturer erode",
    "wholesale cloth erode",
    "bulk order shirts erode",
    "kasavu combo erode",
    "textile manufacturer erode tamil nadu",
    "erode fabric manufacturer",
    "cotton shirt manufacturer erode",
    "shirt manufacturer erode",
    "dhoti manufacturer tamil nadu",
    // Brand keywords
    "WEEKAAS",
    "Sri Kumarr Cloth Stores",
    "weekaasshirts",
    // Product keywords
    "cotton dhoti wholesale",
    "premium cotton shirts",
    "kasavu dhoti combo",
    "bulk clothing order india",
    "institutional uniform supplier",
    "temple event clothing",
    "corporate dhoti supplier",
    // Long-tail local keywords
    "best cloth store erode",
    "cotton fabric manufacturer erode",
    "wholesale dhoti supplier south india",
    "pan india cloth delivery",
    "36 years experience textile erode",
  ],
  authors: [{ name: "Sri Kumarr Cloth Stores", url: SITE_URL }],
  creator: "Sri Kumarr Cloth Stores",
  publisher: "WEEKAAS",
  category: "Clothing & Textile Manufacturing",
  // ── Canonical & Robots ────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: "WEEKAAS | Best Cotton Dhotis & Shirts Manufacturer in Erode",
    description:
      "Erode's trusted clothing manufacturer since 1988. Premium Cotton Dhotis, Shirts, Kasavu Combos. Bulk & wholesale orders across India. Call +91 94430 82462.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WEEKAAS Sri Kumarr Cloth Stores – Cotton Dhotis and Shirts Manufacturer in Erode",
      },
    ],
  },
  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "WEEKAAS | Cotton Dhotis & Shirts Manufacturer in Erode",
    description:
      "Premium Cotton Dhotis, Shirts & Fabrics from Erode since 1988. Bulk orders welcome. Call +91 94430 82462.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  // ── Favicon ────────────────────────────────────────────────────────────────
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  // ── Verification ──────────────────────────────────────────────────────────
  verification: {
    google: "google0fc21f7e43697f4e",
  },
};

// ── Local Business JSON-LD Schema ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "@id": `${SITE_URL}/#clothing-store`,
  name: "Sri Kumarr Cloth Stores (WEEKAAS)",
  alternateName: ["WEEKAAS", "Sri Kumarr Cloth Stores", "Weekaas Shirts"],
  description:
    "Erode's premier cotton dhoti, shirt and fabric manufacturer since 1988. Wholesale and bulk orders across India.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/images/og-image.jpg`,
  foundingDate: "1988",
  telephone: "+919443082462",
  email: "weekaasshirts@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20, Madhavakrishna Street, RKV Nagar, Ramanuja Nagar",
    addressLocality: "Erode",
    addressRegion: "Tamil Nadu",
    postalCode: "638001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.3443123,
    longitude: 77.7322091,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasMap: "https://maps.app.goo.gl/mZD4Gy1TTHQ9yqAY7",
  sameAs: [
    "https://wa.me/919443082462",
    `${SITE_URL}`,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    offerCount: "10+",
    description: "Cotton Dhotis, Shirts, Kasavu Combos, Bulk Fabric Orders",
  },
};

// ── Breadcrumb Schema ──────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

// ── WebSite Schema (enables Sitelinks Search Box) ─────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: BUSINESS_NAME,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth antialiased bg-[#f4f4f5]`}
    >
      <head>
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Erode, Tamil Nadu, India" />
        <meta name="geo.position" content="11.3443123;77.7322091" />
        <meta name="ICBM" content="11.3443123, 77.7322091" />
        {/* JSON-LD Structured Data */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <div className="max-w-[1600px] mx-auto w-full min-h-screen bg-white relative shadow-2xl flex flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
