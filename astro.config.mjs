import db from "@astrojs/db";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [db()],
  site: "https://isimmons.github.io",
  adapter: node({
    mode: "standalone"
  })
});