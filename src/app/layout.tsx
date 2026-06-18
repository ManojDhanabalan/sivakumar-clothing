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

  // ── Title (≤ 60 chars) ────────────────────────────────────────────────────
  title: {
    default: "WEEKAAS – Cotton Dhoti & Shirt Manufacturer in Erode",
    template: "%s | WEEKAAS Erode",
  },

  // ── Description (150-160 chars, answer-first, local + entity signals) ─────
  description:
    "Sri Kumarr Cloth Stores (WEEKAAS), Erode's #1 cotton dhoti & shirt manufacturer since 1988. Wholesale & bulk orders pan-India. Call +91 94430 82462.",

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

  // ── Canonical + alternate languages ───────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
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

  // ── Favicon — Next.js file convention handles src/app/icon.svg auto ───────
  // (favicon.ico removed; Next.js auto-serves icon.svg with cache-busting QS)

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
    url: `${SITE_URL}/icon.svg`,
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
  brand: { "@id": `${SITE_URL}/#organization` },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
  category: "Traditional Clothing / Dhoti",
  material: "100% Cotton",
  countryOfOrigin: "IN",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    price: "150.00",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      minPrice: "150",
      maxPrice: "800",
    },
    seller: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    eligibleQuantity: {
      "@type": "QuantitativeValue",
      minValue: 50,
      unitText: "pieces",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
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
      lang="en"
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
          {children}
        </div>
      </body>
    </html>
  );
}
