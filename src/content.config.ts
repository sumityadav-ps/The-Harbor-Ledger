import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    category: z.enum([
      'business',
      'technology',
      'sports',
      'culture',
      'health',
      'politics',
      'science',
      'travel',
    ]),
    author: z.string(),
    pubDate: z.coerce.date(),
    readMinutes: z.number().min(1).max(20),
    featured: z.boolean().default(false),
    heroTone: z.string().default('#2c3e50'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
