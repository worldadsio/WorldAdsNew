

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Allow all bots
        allow: "/", // Allow all routes
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL || "https://worldads.io"}/sitemap.xml`, // Dynamic sitemap URL
    host: process.env.NEXT_PUBLIC_BASE_URL || "https://worldads.io", // Allow for host and subdomain crawling
  };
}
