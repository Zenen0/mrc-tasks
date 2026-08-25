import type { ImageMetadata } from 'astro';
import { parseFilename, type ParsedFilename } from './filename';

export interface GlobModule {
  default: ImageMetadata;
}

export type GlobMap = Record<string, GlobModule>;

export interface GalleryImage {
  src: ImageMetadata;
  parsed: ParsedFilename;
  caption: string | null;
}

export interface HourBlock {
  label: string;
  images: GalleryImage[];
}

export function filterImagesForEntry(
  globMap: GlobMap,
  entryPath: string,
  captions: Record<string, string> = {},
): GalleryImage[] {
  const prefix = entryPath.endsWith('/') ? entryPath : `${entryPath}/`;
  return Object.entries(globMap)
    .filter(([path]) => path.startsWith(prefix))
    .map(([path, mod]) => {
      const filename = path.slice(prefix.length);
      return {
        src: mod.default,
        parsed: parseFilename(filename),
        caption: captions[filename] ?? null,
      };
    });
}

export function sortCaptureImages(images: GalleryImage[]): GalleryImage[] {
  const captures = images.filter((img) => !img.parsed.isMentorImage);
  const valid = captures
    .filter((img) => img.parsed.valid)
    .sort((a, b) => a.parsed.raw.localeCompare(b.parsed.raw));
  const invalid = captures
    .filter((img) => !img.parsed.valid)
    .sort((a, b) => a.parsed.raw.localeCompare(b.parsed.raw));
  return [...valid, ...invalid];
}

export function getMentorImages(images: GalleryImage[]): GalleryImage[] {
  return images.filter((img) => img.parsed.isMentorImage);
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function groupIntoHourBlocks(images: GalleryImage[]): HourBlock[] {
  const captures = sortCaptureImages(images);
  const valid = captures.filter((img) => img.parsed.valid && img.parsed.hour !== null);
  const invalid = captures.filter((img) => !img.parsed.valid || img.parsed.hour === null);

  const order: string[] = [];
  const blocks = new Map<string, GalleryImage[]>();
  for (const img of valid) {
    const hour = img.parsed.hour as number;
    const label = `${pad(hour)}:00–${pad((hour + 1) % 24)}:00`;
    if (!blocks.has(label)) {
      blocks.set(label, []);
      order.push(label);
    }
    blocks.get(label)!.push(img);
  }

  const result: HourBlock[] = order.map((label) => ({ label, images: blocks.get(label)! }));
  if (invalid.length > 0) {
    result.push({ label: 'Unsorted', images: invalid });
  }
  return result;
}

export function getCoverImage(images: GalleryImage[]): { cover: ImageMetadata | null; count: number } {
  const captures = sortCaptureImages(images);
  return { cover: captures[0]?.src ?? null, count: captures.length };
}
