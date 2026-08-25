import { describe, expect, it } from 'vitest';
import { parseFilename } from './filename';
import {
  filterImagesForEntry,
  getCoverImage,
  getMentorImages,
  groupIntoHourBlocks,
  sortCaptureImages,
  type GalleryImage,
  type GlobMap,
} from './images';

function image(filename: string): GalleryImage {
  return { src: filename as unknown as GalleryImage['src'], parsed: parseFilename(filename), caption: null };
}

describe('filterImagesForEntry', () => {
  it('returns only images under the given entry path', () => {
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: 'a-entry' as never },
      '/src/content/tasks/1/a/10-02_exit.png': { default: 'a-exit' as never },
      '/src/content/tasks/1/b/09-00_entry.png': { default: 'b-entry' as never },
    };
    const result = filterImagesForEntry(globMap, '/src/content/tasks/1/a', {});
    expect(result.map((img) => img.parsed.raw).sort()).toEqual(['09-14_entry.png', '10-02_exit.png']);
  });

  it('attaches a caption when the filename matches the captions map', () => {
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: 'a-entry' as never },
    };
    const result = filterImagesForEntry(globMap, '/src/content/tasks/1/a', {
      '09-14_entry.png': 'Waiting for the retest.',
    });
    expect(result[0].caption).toBe('Waiting for the retest.');
  });

  it('leaves caption null when there is no match', () => {
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: 'a-entry' as never },
    };
    const result = filterImagesForEntry(globMap, '/src/content/tasks/1/a', {});
    expect(result[0].caption).toBeNull();
  });
});

describe('sortCaptureImages', () => {
  it('sorts valid timestamped images chronologically and excludes mentor images', () => {
    const images = [image('10-02_exit.png'), image('mentor_diagram.png'), image('09-14_entry.png')];
    const result = sortCaptureImages(images);
    expect(result.map((img) => img.parsed.raw)).toEqual(['09-14_entry.png', '10-02_exit.png']);
  });

  it('appends unparseable filenames after valid ones', () => {
    const images = [image('screenshot.png'), image('09-14_entry.png')];
    const result = sortCaptureImages(images);
    expect(result.map((img) => img.parsed.raw)).toEqual(['09-14_entry.png', 'screenshot.png']);
  });
});

describe('getMentorImages', () => {
  it('returns only images flagged as mentor images', () => {
    const images = [image('09-14_entry.png'), image('mentor_diagram.png')];
    expect(getMentorImages(images).map((img) => img.parsed.raw)).toEqual(['mentor_diagram.png']);
  });
});

describe('groupIntoHourBlocks', () => {
  it('groups images into hour-range blocks in chronological order', () => {
    const images = [image('09-14_entry.png'), image('09-45_add.png'), image('10-02_exit.png')];
    const blocks = groupIntoHourBlocks(images);
    expect(blocks.map((b) => b.label)).toEqual(['09:00–10:00', '10:00–11:00']);
    expect(blocks[0].images).toHaveLength(2);
    expect(blocks[1].images).toHaveLength(1);
  });

  it('puts unparseable filenames into a trailing Unsorted block', () => {
    const images = [image('09-14_entry.png'), image('screenshot.png')];
    const blocks = groupIntoHourBlocks(images);
    expect(blocks.at(-1)?.label).toBe('Unsorted');
    expect(blocks.at(-1)?.images).toHaveLength(1);
  });
});

describe('getCoverImage', () => {
  it('returns the chronologically first capture image and total capture count, excluding mentor images', () => {
    const images = [image('mentor_diagram.png'), image('10-02_exit.png'), image('09-14_entry.png')];
    const { cover, count } = getCoverImage(images);
    expect(cover).toBe('09-14_entry.png');
    expect(count).toBe(2);
  });

  it('returns null cover and zero count when there are no capture images yet', () => {
    const { cover, count } = getCoverImage([image('mentor_diagram.png')]);
    expect(cover).toBeNull();
    expect(count).toBe(0);
  });
});
