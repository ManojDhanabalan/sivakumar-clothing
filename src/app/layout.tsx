import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone } from "lucide-react";

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

// ─────────────────────────────────────────────────────────────────────────────
// METADATA  (SEO + AEO + GEO)
// • Title   → under 60 chars; brand + primary keyword + location
// • Description → 150-160 chars; natural language; answers "what / where / why"
//   Google rewrites descriptions ~63% of the time, but a well-written one
//   anchors the AI Overview snippet and increases CTR.
// • Keywords → used by Bing; also seeds on-page topic signals for LLMs.
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Title — includes top missing keywords: quality, sri kumarr, dhotis ────
  title: {
    default: "Sri Kumarr Cloth Stores – Quality Cotton Dhotis & Shirts, Erode",
    template: "%s | Sri Kumarr Cloth Stores Erode",
  },

  // ── Description (150-160 chars) — includes 'years', 'quality', 'dhotis' ──
  description:
    "Sri Kumarr Cloth Stores (WEEKAAS) — 38 years of quality cotton dhotis & shirts manufacturing in Erode. Wholesale & bulk orders pan-India. Call +91 94430 82462.",

  // ── Extended keyword bank (hyperlocal × product × intent) ─────────────────
  keywords: [
    // Hyperlocal — Erode city + region
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
    "textile shop erode",
    "erode textile market",
    "erode cotton market",
    "RKV nagar cloth store",
    "Ramanuja Nagar textile erode",
    // Brand
    "WEEKAAS",
    "Sri Kumarr Cloth Stores",
    "weekaasshirts",
    "weekaas shirts erode",
    // Product × intent
    "cotton dhoti wholesale india",
    "premium cotton shirts bulk",
    "kasavu dhoti combo wholesale",
    "bulk clothing order india",
    "institutional uniform supplier tamil nadu",
    "temple event clothing supplier",
    "corporate dhoti supplier india",
    "traditional dhoti manufacturer",
    "festival clothing manufacturer erode",
    // AEO — question-form keywords (feed FAQ schema)
    "best cloth store in erode",
    "where to buy cotton dhoti in erode",
    "cotton dhoti manufacturer near me",
    "wholesale dhoti supplier south india",
    "pan india cloth delivery",
    "38 years experience textile erode",
  ],

  authors: [{ name: "Sri Kumarr Cloth Stores", url: SITE_URL }],
  creator: "Sri Kumarr Cloth Stores",
  publisher: "WEEKAAS",
  category: "Clothing & Textile Manufacturing",

  // ── Canonical + alternate languages (GEO signal for en-IN targeting) ──────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "en":    SITE_URL,
    },
  },

  // ── Robots — allow everything; unlimited snippet + image preview ───────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,     // -1 = no limit → longer rich snippets in SERP
    },
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn share preview) ───────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: "WEEKAAS – Cotton Dhoti & Shirt Manufacturer in Erode Since 1988",
    description:
      "Erode's trusted wholesale clothing manufacturer. Premium Cotton Dhotis, Kasavu Combos, Shirts & Fabrics. Bulk & institutional orders across India. ☎ +91 94430 82462.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WEEKAAS Sri Kumarr Cloth Stores – Cotton Dhotis & Shirts Manufacturer, Erode",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "WEEKAAS | Cotton Dhoti & Shirt Manufacturer – Erode",
    description:
      "Premium Cotton Dhotis, Shirts & Fabrics from Erode since 1988. Wholesale & bulk orders pan-India. Call +91 94430 82462.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },

  // ── Favicon / App Icons ───────────────────────────────────────────────────
  // Google Search reads the <link rel="icon"> tag; it prefers PNG over SVG.
  // Next.js serves icon.png (from src/app/) as the canonical favicon PNG.
  // apple-icon.png is served for iOS home-screen / Safari tab icons.
  icons: {
    shortcut: "/favicon.png",            // legacy <link rel="shortcut icon">
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png",    type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },

  // ── Google Search Console verification ───────────────────────────────────
  verification: {
    google: "google0fc21f7e43697f4e",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMA GRAPH
// Strategy: emit a single @graph with all entity types.
// This builds a knowledge-graph node Google / AI Overviews can consume as one
// cohesive entity rather than multiple disconnected blobs.
// ─────────────────────────────────────────────────────────────────────────────

// ── 1. Organization (GEO entity anchor — makes brand citable by LLMs) ───────
const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Sri Kumarr Cloth Stores",
  alternateName: ["WEEKAAS", "Weekaas Shirts", "Sri Kumarr Cloth Stores Erode"],
  description:
    "Sri Kumarr Cloth Stores, operating under the brand WEEKAAS, is a 38-year-old cotton textile manufacturer and wholesaler based in Erode, Tamil Nadu, India. The company specialises in Cotton Dhotis, Kasavu Combos, Dress Shirts, and bulk fabric orders for institutions, temples, and corporate clients across India.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.png`,   // PNG preferred by Google Knowledge Panel
    width: 512,
    height: 512,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  foundingDate: "1988",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "10+" },
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
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "City", name: "Erode" },
  ],
  knowsAbout: [
    "Cotton Dhoti Manufacturing",
    "Kasavu Fabric Weaving",
    "Wholesale Textile Trade",
    "Erode Textile Market",
    "Bulk Clothing Supply",
    "Institutional Uniform Supply",
  ],
  sameAs: [
    "https://wa.me/919443082462",
    "https://maps.app.goo.gl/mZD4Gy1TTHQ9yqAY7",
    SITE_URL,
  ],
};

// ── 2. LocalBusiness / ClothingStore (Maps + Local Pack ranking) ─────────────
const localBusinessSchema = {
  "@type": "ClothingStore",
  "@id": `${SITE_URL}/#clothing-store`,
  name: "Sri Kumarr Cloth Stores (WEEKAAS)",
  alternateName: ["WEEKAAS", "Sri Kumarr Cloth Stores"],
  description:
    "Erode's premier wholesale cotton dhoti and shirt manufacturer since 1988. Premium quality fabrics, Kasavu combos, bulk institutional and corporate clothing orders across India.",
  url: SITE_URL,
  telephone: "+919443082462",
  email: "weekaasshirts@gmail.com",
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
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
  paymentAccepted: "Cash, UPI, NEFT, Bank Transfer",
  hasMap: "https://maps.app.goo.gl/mZD4Gy1TTHQ9yqAY7",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  // Product catalogue as ItemList — feeds Google Shopping & AI product cards
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "WEEKAAS Product Catalogue",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Cotton Dhotis",
        description: "Premium white and coloured cotton dhotis in 2, 4 and 8-yard varieties. Available for wholesale and bulk institutional orders.",
      },
      {
        "@type": "OfferCatalog",
        name: "Kasavu Combos",
        description: "Traditional Kerala-style kasavu dhoti and shirt combos, hand-finished with gold zari border. Bulk orders for temples and events.",
      },
      {
        "@type": "OfferCatalog",
        name: "Dress Shirts & Fabrics",
        description: "Premium cotton dress shirts and raw fabric rolls. Ideal for corporate uniform suppliers and institutional buyers.",
      },
    ],
  },
};

// ── 3. WebSite (enables Google Sitelinks Search Box) ─────────────────────────
const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ── 4. BreadcrumbList ─────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

// ── 5. FAQPage (AEO — triggers FAQ rich result + feeds AI Overviews) ──────────
//   Each Q&A answers a real search query. Keep answers ≤ 300 chars each so
//   Google can surface them as featured-snippet paragraphs.
const faqSchema = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the best cotton dhoti manufacturer in Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sri Kumarr Cloth Stores (WEEKAAS), located in RKV Nagar, Ramanuja Nagar, Erode, Tamil Nadu (PIN 638001) is Erode's leading wholesale cotton dhoti manufacturer since 1988. Call +91 94430 82462 for bulk orders.",
      },
    },
    {
      "@type": "Question",
      name: "Does WEEKAAS offer wholesale and bulk clothing orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WEEKAAS accepts wholesale and bulk orders for Cotton Dhotis, Kasavu Combos, Dress Shirts and Fabrics. Orders are fulfilled pan-India via courier and transport. Minimum order quantities apply. Contact +91 94430 82462.",
      },
    },
    {
      "@type": "Question",
      name: "What products does Sri Kumarr Cloth Stores manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sri Kumarr Cloth Stores manufactures premium Cotton Dhotis (2, 4 and 8-yard), Kasavu Dhoti-Shirt Combos, Dress Shirts, and raw Cotton Fabrics. Suitable for temples, institutions, corporate gifting and retail resellers.",
      },
    },
    {
      "@type": "Question",
      name: "How many years of experience does WEEKAAS have in textile manufacturing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WEEKAAS (Sri Kumarr Cloth Stores) was founded in 1988, giving it over 38 years of experience in cotton textile manufacturing and wholesale trading in Erode, Tamil Nadu.",
      },
    },
    {
      "@type": "Question",
      name: "Does WEEKAAS supply clothing for temples and corporate events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WEEKAAS is a trusted supplier of bulk traditional clothing — Dhotis and Kasavu Combos — for temple festivals, religious events, corporate gifting, and institutional programs across Tamil Nadu and pan-India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the address and contact number of Sri Kumarr Cloth Stores in Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Address: 20, Madhavakrishna Street, RKV Nagar, Ramanuja Nagar, Erode, Tamil Nadu 638001. Phone: +91 94430 82462. Email: weekaasshirts@gmail.com. Open Monday–Saturday, 9 AM – 8 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Is Erode a major textile hub in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Erode, Tamil Nadu is known as the 'Turmeric City' and is one of South India's largest textile and fabric markets. The city is a major hub for cotton cloth, ready-made garments, and power-loom fabric production.",
      },
    },
  ],
};

// ── 6. Product Schema (feeds Google Shopping panel & AI product knowledge) ────
// Critical fix: brand/manufacturer must use @type+name (not @id refs).
// Offer must have `url` + `priceValidUntil`. Remove non-standard Offer props.
const productSchema = {
  "@type": "Product",
  "@id": `${SITE_URL}/#product-cotton-dhoti`,
  name: "Premium Cotton Dhoti – Wholesale",
  image: [
    `${SITE_URL}/product-images/we-3.png`,
    `${SITE_URL}/product-images/we-4.png`
  ],
  description:
    "Handcrafted premium cotton dhotis in white and off-white, available in 2-yard, 4-yard and 8-yard lengths. Soft texture, durable weave. Minimum wholesale order 50 pieces.",
  sku: "WK-DHOTI-001",
  brand: {
    "@type": "Brand",
    name: "WEEKAAS",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Sri Kumarr Cloth Stores",
    url: SITE_URL,
  },
  category: "Traditional Clothing / Dhoti",
  material: "100% Cotton",
  countryOfOrigin: "IN",
  offers: {
    "@type": "Offer",
    url: SITE_URL,
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    price: "150.00",
    priceValidUntil: "2027-12-31",
    seller: {
      "@type": "Organization",
      name: "Sri Kumarr Cloth Stores",
      url: SITE_URL,
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── 7. Consolidated @graph (best practice — single script block) ──────────────
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema,
    faqSchema,
    productSchema,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth antialiased bg-[#f4f4f5]`}
    >
      <head>
        {/*
          ── Geo / Location meta tags ────────────────────────────────────────
          Used by Bing, Yahoo, and geolocation-aware crawlers.
          Reinforces Erode, Tamil Nadu as the authoritative location entity.
        */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Erode, Tamil Nadu, India" />
        <meta name="geo.position" content="11.3443123;77.7322091" />
        <meta name="ICBM" content="11.3443123, 77.7322091" />

        {/*
          ── Business / contact meta (AEO entity signals) ───────────────────
          Helps AI engines resolve the "who / where / what" of the business
          without needing to parse page copy.
        */}
        <meta name="business:contact_data:locality" content="Erode" />
        <meta name="business:contact_data:region" content="Tamil Nadu" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+91-94430-82462" />

        {/*
          ── Classification meta (Bing + legacy crawlers) ───────────────────
        */}
        <meta name="classification" content="Clothing, Textile Manufacturing" />
        <meta name="category" content="Cotton Dhoti Manufacturer, Shirt Manufacturer, Wholesale Fabric Supplier" />
        <meta name="coverage" content="India" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />

        {/*
          ── Single consolidated JSON-LD @graph ─────────────────────────────
          All schema types in one block = cleaner entity relationship graph.
          Covers: Organization, ClothingStore, WebSite, BreadcrumbList,
                  FAQPage, Product — powering rich results + AI Overviews.
        */}
        <Script
          id="schema-graph"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <div className="max-w-[1600px] mx-auto w-full min-h-screen bg-white relative shadow-2xl flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />

          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* Location Button */}
            <a 
              href="https://www.google.com/maps/place/SRI+KUMARR+CLOTH+STORES/@11.3434052,77.7316259,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96f44fcb59051:0xebb1104fe9c45e28!8m2!3d11.3434052!4d77.7316259!16s%2Fg%2F11b7vz9kzm?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-brand-primary/50 flex items-center justify-center group"
              aria-label="View on Google Maps"
            >
              <MapPin className="w-6 h-6" />
            </a>

            {/* Phone Button */}
            <a 
              href="tel:9443082462" 
              className="w-14 h-14 bg-white text-brand-primary border border-brand-primary/20 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-brand-primary/20 flex items-center justify-center group"
              aria-label="Call Us"
            >
              <Phone className="w-6 h-6" />
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919443082462" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-[#25D366]/50 flex items-center justify-center group"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.887.118.592-.086 1.822-.744 2.08-1.464.256-.72.256-1.338.179-1.464z"/></svg>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
