import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('AnantaOps Team'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
    originalSource: z.object({ label: z.string(), url: z.string().url() }).optional(),
  }),
});

export const collections = { articles };
