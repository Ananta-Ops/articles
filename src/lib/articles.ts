import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedArticles() {
  const all = await getCollection('articles', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function articleSlug(article: CollectionEntry<'articles'>) {
  return article.id.replace(/\.mdx$/, '');
}

export async function getTagCounts() {
  const articles = await getPublishedArticles();
  const counts = new Map<string, number>();
  for (const article of articles) {
    for (const tag of article.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export const dateFmt = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export const MAX_VISIBLE_TAGS = 14;
