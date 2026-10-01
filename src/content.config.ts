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

// A separately counted component of an assignment (Week Task or Segment). Without `target` it is an
// uncounted requirement: My Work shows "No set count" plus an entry count instead of "0 / N".
const partSchema = z.object({
  key: z.string(),
  label: z.string(),
  target: z.number().optional(),
  unit: z.string().optional(),
});

const weekTasks = defineCollection({
  loader: glob({ pattern: '*/*/task.md', base: './src/content/weeks', generateId: stripTaskMetaSuffix }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    // Optional display label replacing "Task M" (e.g. "Assignment" when the mentor did not number the Week's Tasks).
    label: z.string().optional(),
    target: z.number().optional(),
    unit: z.string().optional(),
    // Optional separately counted components; My Work then shows one progress line per part.
    parts: z.array(partSchema).optional(),
    mineGuide: z.array(z.string()).optional(),
  }),
});

const weekWork = defineCollection({
  loader: glob({ pattern: '*/*/mine/**/index.md', base: './src/content/weeks', generateId: stripIndexSuffix }),
  // `part` = the key of the Week Task part this entry counts toward (see weekTasks `parts`).
  schema: entrySchema.extend({ part: z.string().optional() }),
});

// Segments (part of Tasks, routed under /tasks/segments/): Mr Casino's three-part top-down programme, given
// after the Weekly Programme. One Assignment + My Work pair per Segment, so no task-M level.
const segmentMeta = defineCollection({
  loader: glob({ pattern: '*/segment.md', base: './src/content/segments', generateId: ({ entry }) => entry.replace(/\/segment\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // His own one-line purpose for the Segment (shown on the Segments index and home cards' page).
    purpose: z.string(),
    keyQuote: z.string().optional(),
    study: z.object({ label: z.string(), href: z.string(), note: z.string() }).optional(),
  }),
});

const segmentAssignments = defineCollection({
  loader: glob({ pattern: '*/assignment.md', base: './src/content/segments', generateId: ({ entry }) => entry.replace(/\/assignment\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    parts: z.array(partSchema),
    mineGuide: z.array(z.string()).optional(),
  }),
});

const segmentWork = defineCollection({
  loader: glob({ pattern: '*/mine/**/index.md', base: './src/content/segments', generateId: stripIndexSuffix }),
  // `part` = the key of the Segment assignment part this entry counts toward.
  schema: entrySchema.extend({ part: z.string().optional() }),
});

export const collections = {
  tasks,
  misc,
  reference,
  taskMeta,
  weekMeta,
  weekTasks,
  weekWork,
  segmentMeta,
  segmentAssignments,
  segmentWork,
};
