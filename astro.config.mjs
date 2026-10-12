// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

const SITE = 'https://astraeoratio.org';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    // `## Heading {#custom-id}` keeps anchor links stable when heading text changes.
    processor: satteri({ features: { headingAttributes: true } }),
  },
  integrations: [
    // Pre-launch guides are indexable too; content status only controls their display.
    sitemap(),
  ],
});
