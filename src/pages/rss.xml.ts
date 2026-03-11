import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');

  return rss({
    title: 'Fabric Data Agent',
    description: 'Community-curated content about Microsoft Fabric Data Agents',
    site: context.site!.toString(),
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.summary,
      link: `/articles/${article.id}/`,
      pubDate: article.data.publishDate,
    })),
  });
}
