import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // GitHub Pages project site:
  // https://san9com.github.io/STMPD-POC/
  site: "https://san9com.github.io",
  base: "/STMPD-POC",
  integrations: [tailwind()],
});

