/**
 * Helpers for the Weekly Programme (part of the Tasks system, routed under /tasks/weeks/).
 *
 * Content ids, all relative to src/content/weeks/:
 * - weekMeta:  "1"                  (1/week.md)
 * - weekTasks: "1/task-2"           (1/task-2/task.md)
 * - weekWork:  "1/task-2/mine/s01"  (1/task-2/mine/s01/index.md)
 *
 * Week Task M is never standalone Task M (/tasks/M/, src/content/tasks/M/).
 */

export interface IdLike {
  id: string;
}

/** "task-2" -> "2". Returns the input unchanged if it has no "task-" prefix. */
export function weekTaskNumber(taskSlug: string): string {
  return taskSlug.replace(/^task-/, '');
}

/** Week numbers from weekMeta ids, sorted numerically. */
export function weekNumbers(weekMeta: IdLike[]): string[] {
  return weekMeta.map((entry) => entry.id).sort((a, b) => Number(a) - Number(b));
}

/** Splits a weekTasks id "1/task-2" into { week: "1", slug: "task-2", number: "2" }. */
export function parseWeekTaskId(id: string): { week: string; slug: string; number: string } {
  const [week, slug] = id.split('/');
  return { week, slug, number: weekTaskNumber(slug) };
}

/** The Tasks of one Week, sorted by task number (task-2 before task-10). */
export function tasksForWeek<T extends IdLike>(weekTasks: T[], week: string): T[] {
  return weekTasks
    .filter((entry) => entry.id.split('/')[0] === week)
    .sort((a, b) => Number(parseWeekTaskId(a.id).number) - Number(parseWeekTaskId(b.id).number));
}

/** My Work entries for one Week Task ("<week>/<slug>/mine/<entry>"), sorted by id. */
export function workForWeekTask<T extends IdLike>(weekWork: T[], week: string, taskSlug: string): T[] {
  const prefix = `${week}/${taskSlug}/mine/`;
  return weekWork
    .filter((entry) => entry.id.startsWith(prefix) && !entry.id.slice(prefix.length).includes('/'))
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** Progress text for a My Work card: "0 / 10 sessions" with a target, otherwise an entry count. */
export function workProgress(count: number, target?: number, unit = 'entries'): string {
  if (target) return `${count} / ${target} ${unit}`;
  if (count === 0) return 'Not started';
  return `${count} ${count === 1 ? 'entry' : 'entries'}`;
}
