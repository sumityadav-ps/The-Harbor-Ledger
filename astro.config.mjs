// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub project Pages: https://sumityadav-ps.github.io/The-Harbor-Ledger/
export default defineConfig({
  site: 'https://sumityadav-ps.github.io',
  base: '/The-Harbor-Ledger/',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Include project base in sitemap URLs
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
