/**
 * Helpers for the Segments (part of the Tasks system, routed under /tasks/segments/). Progress lines reuse
 * `partProgress()` from ./weeks.
 *
 * Content ids, all relative to src/content/segments/:
 * - segmentMeta:        "1"           (1/segment.md)
 * - segmentAssignments: "1"           (1/assignment.md)
 * - segmentWork:        "1/mine/s01"  (1/mine/s01/index.md)
 *
 * Segment 1's "Task 1-3" are the mentor's own labels inside that Segment, never standalone Task 1-3.
 */
import type { IdLike } from './weeks';

/** Segment numbers from segmentMeta ids, sorted numerically. */
export function segmentNumbers(segmentMeta: IdLike[]): string[] {
  return segmentMeta.map((entry) => entry.id).sort((a, b) => Number(a) - Number(b));
}

/** My Work entries for one Segment ("<segment>/mine/<entry>"), sorted by id. */
export function workForSegment<T extends IdLike>(segmentWork: T[], segment: string): T[] {
  const prefix = `${segment}/mine/`;
  return segmentWork
    .filter((entry) => entry.id.startsWith(prefix) && !entry.id.slice(prefix.length).includes('/'))
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** Previous and next Segment numbers around `segment`, or null at either end. */
export function adjacentSegments(numbers: string[], segment: string): { prev: string | null; next: string | null } {
  const index = numbers.indexOf(segment);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? numbers[index - 1] : null,
    next: index < numbers.length - 1 ? numbers[index + 1] : null,
  };
}
