import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // No-cache for favicon and all icon routes — prevents browsers & CDN
        // from serving a stale icon after deployments.
        source: "/:path(favicon\\.ico|icon.*|apple-icon.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
