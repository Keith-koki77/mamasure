import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const BASE_URL = "https://www.mamasure.com";

export const revalidate = 3600;

type SitemapPost = { slug: string; updatedAt: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/how-it-works",
    "/plans",
    "/about",
    "/faq",
    "/contact",
    "/blog",
    "/partners",
    "/privacy-policy",
    "/terms",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  let postPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<SitemapPost[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
        "slug": slug.current,
        "updatedAt": coalesce(_updatedAt, publishedAt)
      }`
    );

    postPages = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap: Sanity fetch failed", error);
  }

  return [...staticPages, ...postPages];
}