import { afterEach, describe, expect, it, vi } from 'vitest';
import type { GalleryImage, GlobMap } from './images';
import { buildEntryPageData } from './entry-page';

function image(filename: string): GalleryImage['src'] {
  return filename as unknown as GalleryImage['src'];
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('buildEntryPageData', () => {
  it('warns on a malformed image filename and still sorts it last', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: image('09-14_entry.png') },
      '/src/content/tasks/1/a/screenshot.png': { default: image('screenshot.png') },
    };
    const result = buildEntryPageData(globMap, '/src/content/tasks/1/a', {
      id: '1/a',
      data: {},
    });

    expect(result.captureImages.map((img) => img.parsed.raw)).toEqual(['09-14_entry.png', 'screenshot.png']);
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('Task 1/a: image filename "screenshot.png" doesn\'t match the expected pattern'),
    );
  });

  it('warns on a stale caption that references a missing file', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: image('09-14_entry.png') },
    };
    buildEntryPageData(globMap, '/src/content/tasks/1/a', {
      id: '1/a',
      data: { captions: { 'missing.png': 'Never actually saved this one.' } },
    });

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('Task 1/a: caption references missing file "missing.png"'),
    );
  });

  it('truncates the description through truncateExcerpt rather than a raw slice', () => {
    const globMap: GlobMap = {};
    const mentorPrompt = 'Mark the liquidity zones on EURUSD 15m\nand 1h before London open, then walk it forward.';
    const result = buildEntryPageData(globMap, '/src/content/tasks/1/a', {
      id: '1/a',
      data: { mentorPrompt },
    });

    expect(result.description).not.toContain('\n');
    expect(result.description).toBe(
      'Mark the liquidity zones on EURUSD 15m and 1h before London open, then walk it forward.',
    );
  });

  it('truncates a long description at a word boundary with an ellipsis', () => {
    const globMap: GlobMap = {};
    const mentorPrompt =
      'Mark the liquidity zones on EURUSD fifteen minute chart before the London session opens for trading. ' +
      'Annotate where you expect a sweep, then walk it forward through the session and note where price reacted.';
    const result = buildEntryPageData(globMap, '/src/content/misc/example', {
      id: 'example',
      data: { mentorPrompt },
    });

    expect(result.description.length).toBeLessThanOrEqual(160);
    expect(result.description.endsWith('...')).toBe(true);
  });

  it('reports hasResponse true when the entry body has content', () => {
    const globMap: GlobMap = {};
    const result = buildEntryPageData(globMap, '/src/content/tasks/1/a', {
      id: '1/a',
      data: {},
      body: 'A short written response.',
    });

    expect(result.hasResponse).toBe(true);
  });

  it('reports hasResponse false when the entry body is absent or whitespace-only', () => {
    const globMap: GlobMap = {};
    const absent = buildEntryPageData(globMap, '/src/content/tasks/1/a', { id: '1/a', data: {} });
    const whitespace = buildEntryPageData(globMap, '/src/content/tasks/1/a', {
      id: '1/a',
      data: {},
      body: '   \n  ',
    });

    expect(absent.hasResponse).toBe(false);
    expect(whitespace.hasResponse).toBe(false);
  });

  it('labels warnings for misc entries distinctly from task entries', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const globMap: GlobMap = {
      '/src/content/misc/example/screenshot.png': { default: image('screenshot.png') },
    };
    buildEntryPageData(globMap, '/src/content/misc/example', { id: 'example', data: {} });

    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Misc example: image filename "screenshot.png"'));
  });
});
