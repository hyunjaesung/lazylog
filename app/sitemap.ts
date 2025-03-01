import { allPosts } from "@/.contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://stevy.dev/${post.slugAsParams}`,
    lastModified: post.date,
  }));

  const routes = ["", "/tech", "/essay", "/about"].map((route) => ({
    url: `https://stevy.dev${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
