// @ts-check
import { defineConfig } from 'astro/config';

// GitHub project Pages: https://sumityadav-ps.github.io/The-Harbor-Ledger/
// Trailing slash on base so BASE_URL joins cleanly with paths like "about", "_astro/..."
export default defineConfig({
  site: 'https://sumityadav-ps.github.io',
  base: '/The-Harbor-Ledger/',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
