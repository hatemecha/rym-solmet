import { defineConfig } from "astro/config";

const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  output: "static",
  base,
  devToolbar: { enabled: false },
  ...(site ? { site } : {}),
});
