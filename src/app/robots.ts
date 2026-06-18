import type { MetadataRoute } from "next";

/**
 * robots.ts — Next.js file convention (App Router)
 * Serves /robots.txt at production time.
 *
 * SEO goal: allow full crawl, declare sitemap, block any internal/admin paths.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block any internal / non-public paths if added later
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Allow Google's AI training bots to cite the content (AEO / GEO)
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://www.weekaasshirts.com/sitemap.xml",
    host: "https://www.weekaasshirts.com",
  };
}
