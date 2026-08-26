import { filterImagesForEntry, getMentorImages, groupIntoHourBlocks, sortCaptureImages } from './images';
import type { GalleryImage, GlobMap, HourBlock } from './images';
import { truncateExcerpt } from './og';

export interface EntryPageData {
  captureImages: GalleryImage[];
  mentorImages: GalleryImage[];
  blocks: HourBlock[];
  description: string;
  hasResponse: boolean;
}

export interface EntryPageEntry {
  id: string;
  data: {
    mentorPrompt?: string;
    captions?: Record<string, string>;
  };
  body?: string;
}

/** Derives the "Task" / "Misc" label used in console.warn diagnostics from the glob entry path. */
function collectionLabel(entryPath: string): string {
  if (entryPath.includes('/content/tasks/')) return 'Task';
  if (entryPath.includes('/content/misc/')) return 'Misc';
  return 'Entry';
}

/**
 * Builds everything a detail page (tasks/[task]/[subtask].astro, misc/[slug].astro) needs to
 * render its gallery, assignment, and response sections, plus the OG description. Shared here so
 * the two near-identical pages don't independently re-implement (and drift on) the same pipeline.
 *
 * Does NOT touch anything async or Astro-specific (getImage, Astro.site, Astro.url) — the OG image
 * lookup stays a one-liner at the page level.
 */
export function buildEntryPageData(
  globMap: GlobMap,
  entryPath: string,
  entry: EntryPageEntry,
): EntryPageData {
  const label = collectionLabel(entryPath);
  const captions = entry.data.captions ?? {};
  const allImages = filterImagesForEntry(globMap, entryPath, captions);

  for (const filename of Object.keys(captions)) {
    if (!allImages.some((img) => img.parsed.raw === filename)) {
      console.warn(`[mrc-tasks] ${label} ${entry.id}: caption references missing file "${filename}"`);
    }
  }

  for (const img of allImages) {
    if (!img.parsed.valid) {
      console.warn(`[mrc-tasks] ${label} ${entry.id}: image filename "${img.parsed.raw}" doesn't match the expected pattern, sorting it last`);
    }
  }

  const captureImages = sortCaptureImages(allImages);
  const mentorImages = getMentorImages(allImages);
  const blocks = groupIntoHourBlocks(captureImages);
  const description = truncateExcerpt(entry.data.mentorPrompt ?? '', 160);
  const hasResponse = (entry.body ?? '').trim().length > 0;

  return { captureImages, mentorImages, blocks, description, hasResponse };
}
