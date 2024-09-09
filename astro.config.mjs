import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://profound-halva-e89b28.netlify.app/",
  integrations: [preact()]
});