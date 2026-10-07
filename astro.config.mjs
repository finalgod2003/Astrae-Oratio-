// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import codes from './src/data/codes.json' with { type: 'json' };
import tierList from './src/data/tier-list.json' with { type: 'json' };

const SITE = 'https://astraeoratio.org';

// Pages that stay out of the index until they have real content
// (codes / tier list go live 1-2 months before launch).
const noindexPaths = [
  codes.status !== 'live' && '/codes/',
  tierList.status !== 'live' && '/tier-list/',
].filter(Boolean);

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
    sitemap({
      filter: (page) => !noindexPaths.some((p) => page === `${SITE}${p}`),
    }),
  ],
});
