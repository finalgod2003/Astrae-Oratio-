import { SITE_NAME, SITE_URL } from '../data/site';

export type QA = { q: string; a: string };

const abs = (path: string) => new URL(path, SITE_URL).href;

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ['Astrae Oratio Wiki', 'Asora Wiki', 'astraeoratio.org'],
  url: `${SITE_URL}/`,
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#org` },
});

export const orgSchema = () => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#org`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: abs('/apple-touch-icon.png'),
  description: 'Unofficial fan-made wiki and guide for Astrae Oratio.',
});

export const gameSchema = () => ({
  '@type': 'VideoGame',
  '@id': `${SITE_URL}/#game`,
  name: 'Astrae Oratio',
  alternateName: ['アストラエ・オラティオ', 'Asora'],
  genre: ['Role-playing game', 'Gacha', 'Urban fantasy'],
  gamePlatform: ['iOS', 'Android', 'PC'],
  author: { '@type': 'Organization', name: 'Dynamis One' },
  publisher: { '@type': 'Organization', name: 'NC Corporation' },
  url: 'https://astraeoratio.plaync.com/en-us/index',
  inLanguage: ['en', 'ja', 'ko', 'zh-Hant'],
});

export const faqSchema = (items: QA[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a.replace(/<[^>]+>/g, '') },
  })),
});

export const articleSchema = (o: {
  type?: 'Article' | 'NewsArticle';
  headline: string;
  description: string;
  path: string;
  published: Date;
  modified?: Date;
}) => ({
  '@type': o.type ?? 'Article',
  headline: o.headline,
  description: o.description,
  mainEntityOfPage: abs(o.path),
  datePublished: o.published.toISOString(),
  dateModified: (o.modified ?? o.published).toISOString(),
  inLanguage: 'en',
  image: abs('/og-default.png'),
  author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
  publisher: { '@id': `${SITE_URL}/#org` },
  about: { '@id': `${SITE_URL}/#game` },
});

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
