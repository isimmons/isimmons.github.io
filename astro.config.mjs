import db from "@astrojs/db";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [db()],
  site: "https://isimmons.github.io",
});
