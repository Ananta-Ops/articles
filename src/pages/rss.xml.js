import rss from '@astrojs/rss';
import { getPublishedArticles, articleSlug } from '../lib/articles';

export async function GET(context) {
  const articles = await getPublishedArticles();
  return rss({
    title: 'AnantaOps Articles',
    description: 'Engineering, security, and ops-intelligence articles from the AnantaOps team.',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      author: article.data.author,
      categories: article.data.tags,
      link: `/${articleSlug(article)}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
