// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pawarbi.github.io',
  base: '/fabric-data-agent-website',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
