import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  mentorPrompt: z.string().optional(),
  captions: z.record(z.string(), z.string()).optional(),
});

const stripIndexSuffix = ({ entry }: { entry: string }) => entry.replace(/\/index\.md$/, '');

const tasks = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/tasks', generateId: stripIndexSuffix }),
  schema: entrySchema,
});

const misc = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/misc', generateId: stripIndexSuffix }),
  schema: entrySchema,
});

export const collections = { tasks, misc };
