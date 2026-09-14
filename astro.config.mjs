import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://rymsolmet.xyz";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  base,
  site,
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
