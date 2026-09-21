export interface TaskMetaEntry {
  id: string;
  data: { title: string };
}

export interface SubtaskLike {
  id: string;
}

/**
 * Union of task numbers derived from subtasks and from taskMeta (task.md) entries, so a task
 * shows up once it has either - not only once its first subtask exists.
 */
export function allTaskNumbers(subtaskEntries: SubtaskLike[], taskMetaEntries: SubtaskLike[]): string[] {
  const seen = new Set<string>();
  for (const entry of subtaskEntries) {
    seen.add(entry.id.split('/')[0]);
  }
  for (const entry of taskMetaEntries) {
    seen.add(entry.id);
  }
  return [...seen].sort((a, b) => Number(a) - Number(b));
}

export function subtasksForTask<T extends SubtaskLike>(entries: T[], taskNumber: string): T[] {
  return entries
    .filter((entry) => entry.id.split('/')[0] === taskNumber)
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function getTaskTitle(taskMeta: TaskMetaEntry[], taskNumber: string): string {
  const match = taskMeta.find((entry) => entry.id === taskNumber);
  return match?.data.title ?? `Task ${taskNumber}`;
}

export function siblingSubtasks<T extends SubtaskLike>(
  sortedTaskSubtasks: T[],
  currentId: string,
): { prev: T | null; next: T | null } {
  const index = sortedTaskSubtasks.findIndex((entry) => entry.id === currentId);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? sortedTaskSubtasks[index - 1] : null,
    next: index < sortedTaskSubtasks.length - 1 ? sortedTaskSubtasks[index + 1] : null,
  };
}
