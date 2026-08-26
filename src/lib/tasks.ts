export interface TaskMetaEntry {
  id: string;
  data: { title: string };
}

export interface SubtaskLike {
  id: string;
}

export function distinctTaskNumbers(entries: SubtaskLike[]): string[] {
  const seen = new Set<string>();
  for (const entry of entries) {
    seen.add(entry.id.split('/')[0]);
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
