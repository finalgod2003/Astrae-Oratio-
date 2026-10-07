// Checks every internal link and #anchor in the built site (dist/). Run after `npm run build`.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const toRoute = (file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
};

const files = await walk(DIST);
const pages = new Map();
for (const f of files) {
  const html = await readFile(f, 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((m) => m[1]);
  pages.set(toRoute(f), { ids, hrefs });
}

const staticFiles = new Set(['/rss.xml', '/sitemap-index.xml', '/favicon.svg', '/favicon-32.png', '/apple-touch-icon.png', '/site.webmanifest']);
let broken = 0;
for (const [route, { hrefs }] of pages) {
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith('//')) continue;
    const [pathPart, hash] = href.split('#');
    const target = pathPart === '' ? route : pathPart;
    if (staticFiles.has(target) || target.startsWith('/_astro/')) continue;
    const page = pages.get(target);
    if (!page) {
      console.log(`✗ ${route} → ${href} (missing page)`);
      broken++;
      continue;
    }
    if (hash && !page.ids.has(decodeURIComponent(hash))) {
      console.log(`✗ ${route} → ${href} (missing #${hash})`);
      broken++;
    }
  }
}
console.log(broken ? `\n${broken} broken link(s) across ${pages.size} pages` : `✓ All internal links OK across ${pages.size} pages`);
process.exit(broken ? 1 : 0);
