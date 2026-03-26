import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://grantfoster.dev/sitemap.xml",
    host: "grantfoster.dev",
  };
}
