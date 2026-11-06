import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  FALLBACK_GROUP_ID,
  groupEntries,
  miscGroups,
  readingNumber,
  referenceGroups,
  relationshipCue,
  type IndexGroup,
} from './index-groups';

const entry = (id: string, order?: number, date = '2026-01-01') => ({
  id,
  data: { title: id.toUpperCase(), date: new Date(date), order },
});

const groups: IndexGroup[] = [
  { id: 'g1', title: 'One', intro: 'first', items: [{ slug: 'a', short: 'A', summary: 's' }] },
  {
    id: 'g2',
    title: 'Two',
    intro: 'second',
    items: [
      { slug: 'missing', summary: 's' },
      { slug: 'c', summary: 's', buildsOn: ['a'] },
      { slug: 'b', summary: 's', buildsOn: ['a', 'c'] },
    ],
  },
  { id: 'g3', title: 'Empty', intro: '', items: [{ slug: 'gone', summary: 's' }] },
];

describe('groupEntries', () => {
  it('places configured entries in configured order with continuous reading positions', () => {
    const resolved = groupEntries([entry('b'), entry('a'), entry('c')], groups, 'More');
    expect(resolved.map((g) => g.id)).toEqual(['g1', 'g2']);
    expect(resolved[1].items.map((i) => [i.entry.id, i.position])).toEqual([
      ['c', 2],
      ['b', 3],
    ]);
  });

  it('puts unconfigured entries in a final fallback group sorted by order, date, title', () => {
    const resolved = groupEntries([entry('a'), entry('z', 2), entry('y', 1), entry('x')], groups, 'More');
    const last = resolved[resolved.length - 1];
    expect(last.id).toBe(FALLBACK_GROUP_ID);
    expect(last.title).toBe('More');
    expect(last.items.map((i) => i.entry.id)).toEqual(['y', 'z', 'x']);
    expect(last.items.every((i) => i.position === null)).toBe(true);
  });

  it('never drops or duplicates an entry', () => {
    const input = [entry('a'), entry('b'), entry('c'), entry('d')];
    const ids = groupEntries(input, groups, 'More').flatMap((g) => g.items.map((i) => i.entry.id));
    expect(ids.sort()).toEqual(['a', 'b', 'c', 'd']);
  });
});

describe('relationshipCue', () => {
  it('names earlier items by reading number and short name', () => {
    const resolved = groupEntries([entry('a'), entry('b'), entry('c')], groups, 'More');
    const b = resolved[1].items[1];
    expect(relationshipCue(resolved, b.item)).toBe('Builds on 01 A · 02 C');
  });

  it('prefers free-text cues and returns null without one', () => {
    const resolved = groupEntries([entry('a')], groups, 'More');
    expect(relationshipCue(resolved, { slug: 'a', summary: 's', cue: 'Start here' })).toBe('Start here');
    expect(relationshipCue(resolved, { slug: 'a', summary: 's' })).toBeNull();
    expect(relationshipCue(resolved, null)).toBeNull();
  });
});

describe('readingNumber', () => {
  it('pads to two digits', () => {
    expect(readingNumber(1)).toBe('01');
    expect(readingNumber(12)).toBe('12');
  });
});

// The live config must cover every content folder exactly once, and name no folder that does not exist.
const contentSlugs = (collection: string) =>
  readdirSync(join(process.cwd(), 'src', 'content', collection), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

describe.each([
  ['reference', referenceGroups],
  ['misc', miscGroups],
] as const)('%s index config', (collection, config) => {
  const configured = config.flatMap((g) => g.items.map((i) => i.slug));

  it('lists each content entry exactly once', () => {
    expect(new Set(configured).size).toBe(configured.length);
    expect([...configured].sort()).toEqual(contentSlugs(collection));
  });

  it('only builds on items that come earlier', () => {
    configured.forEach((slug, index) => {
      const item = config.flatMap((g) => g.items).find((i) => i.slug === slug)!;
      for (const dep of item.buildsOn ?? []) {
        expect(configured.indexOf(dep), `${slug} -> ${dep}`).toBeGreaterThanOrEqual(0);
        expect(configured.indexOf(dep), `${slug} -> ${dep}`).toBeLessThan(index);
      }
    });
  });
});
