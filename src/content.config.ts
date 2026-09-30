import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  mentorPrompt: z.string().optional(),
  captions: z.record(z.string(), z.string()).optional(),
  relatedTask: z.string().optional(),
});

const stripIndexSuffix = ({ entry }: { entry: string }) => entry.replace(/\/index\.md$/, '');
const stripTaskMetaSuffix = ({ entry }: { entry: string }) => entry.replace(/\/task\.md$/, '');

const tasks = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/tasks', generateId: stripIndexSuffix }),
  schema: entrySchema,
});

const misc = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/misc', generateId: stripIndexSuffix }),
  schema: entrySchema.extend({ order: z.number().optional() }),
});

const reference = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/reference', generateId: stripIndexSuffix }),
  schema: entrySchema.extend({ order: z.number().optional() }),
});

const taskMeta = defineCollection({
  loader: glob({ pattern: '*/task.md', base: './src/content/tasks', generateId: stripTaskMetaSuffix }),
  schema: z.object({ title: z.string() }),
});

// Weekly Programme (part of Tasks, routed under /tasks/weeks/). A separate folder so the
// tasks/taskMeta globs above never sweep Week files into the standalone Tasks.
const weekMeta = defineCollection({
  loader: glob({ pattern: '*/week.md', base: './src/content/weeks', generateId: ({ entry }) => entry.replace(/\/week\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    keyQuote: z.string().optional(),
    // "Study first" callout shown above the Task pairs (e.g. the Reference page the Week builds on).
    study: z.object({ label: z.string(), href: z.string(), note: z.string() }).optional(),
  }),
});

const weekTasks = defineCollection({
  loader: glob({ pattern: '*/*/task.md', base: './src/content/weeks', generateId: stripTaskMetaSuffix }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    target: z.number().optional(),
    unit: z.string().optional(),
    mineGuide: z.array(z.string()).optional(),
  }),
});

const weekWork = defineCollection({
  loader: glob({ pattern: '*/*/mine/**/index.md', base: './src/content/weeks', generateId: stripIndexSuffix }),
  schema: entrySchema,
});

export const collections = { tasks, misc, reference, taskMeta, weekMeta, weekTasks, weekWork };
