import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify"; // Import the Netlify adapter

export default defineConfig({
  output: "server",
  adapter: netlify(), // Use the adapter correctly
});
