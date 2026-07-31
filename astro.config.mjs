// @ts-check
import { defineConfig } from 'astro/config';

// Static site for GitHub Pages.
// For project pages (username.github.io/repo), set base: '/repo-name'.
// For user/org pages, leave base as '/'.
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
