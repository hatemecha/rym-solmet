import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://hatemecha.github.io";
const base = process.env.BASE_PATH ?? "/rym-solmet";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  base,
  site,
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
