import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fm-veranstaltungstechnik.de',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.8,
      serialize: (page) => {
        const path = new URL(page.url).pathname;
        if (path == '/') page.priority = 1;
        return page;
      }
    }),
    robotsTxt()
  ]
});
