import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://grantfoster.dev";
  const lastModified = new Date();

  const paths = [
    "/",
    "/about",
    "/projects",
    "/profile.json",
    "/projects.json",
  ];

  return paths.map((path, index) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      index === 0 ? 1 : path.endsWith(".json") ? 0.5 : 0.8,
  }));
}
