import type { MetadataRoute } from "next";

const SITE_URL = "https://www.weekaasshirts.com";

/**
 * sitemap.ts — Next.js file convention (App Router)
 * Serves /sitemap.xml at production time.
 *
 * SEO goals:
 * • Provides canonical URL + last-modified date for every indexable page
 * • priority and changeFrequency guide crawler budget allocation
 * • Add new page entries here whenever a new route is added to the app
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Add sub-pages below as the site grows:
    // {
    //   url: `${SITE_URL}/products`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    // {
    //   url: `${SITE_URL}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/contact`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
  ];
}
