// @ts-check
import { defineConfig } from "astro/config";
import { rehypeBaseUrl } from "./src/plugins/rehype-base-url.mjs";

const base = "/blog2";

// https://astro.build/config
export default defineConfig({
  base,
  output: "static",
  markdown: {
    rehypePlugins: [[rehypeBaseUrl, { base }]],
  },
});
