import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const news = (await getCollection('news')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Astrae Oratio Wiki — News',
    description: 'Astrae Oratio announcements, trailers, CBT and release updates from an unofficial fan wiki.',
    site: context.site,
    items: news.map((n) => ({
      title: n.data.title,
      description: n.data.description,
      pubDate: n.data.date,
      link: `/news/${n.id}/`,
      categories: n.data.tags,
    })),
    customData: '<language>en</language>',
  });
}
