import type { CollectionEntry } from "astro:content";

export function displayTags(post: CollectionEntry<"posts">): string[] {
  if (!post.data.draft) return post.data.tags;
  return post.data.tags.includes("draft")
    ? post.data.tags
    : ["draft", ...post.data.tags];
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
