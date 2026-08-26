import { describe, expect, it } from 'vitest';
import { distinctTaskNumbers, getTaskTitle, siblingSubtasks, subtasksForTask } from './tasks';

function entry(id: string) {
  return { id, data: { title: `Title for ${id}` } };
}

describe('distinctTaskNumbers', () => {
  it('returns each task number once, sorted numerically', () => {
    const entries = [entry('2/a'), entry('1/b'), entry('1/a'), entry('10/a')];
    expect(distinctTaskNumbers(entries)).toEqual(['1', '2', '10']);
  });

  it('returns an empty array when there are no entries', () => {
    expect(distinctTaskNumbers([])).toEqual([]);
  });
});

describe('subtasksForTask', () => {
  it('returns only the subtasks belonging to the given task, sorted by id', () => {
    const entries = [entry('1/c'), entry('2/a'), entry('1/a'), entry('1/b')];
    const result = subtasksForTask(entries, '1');
    expect(result.map((e) => e.id)).toEqual(['1/a', '1/b', '1/c']);
  });

  it('returns an empty array when the task has no subtasks', () => {
    expect(subtasksForTask([entry('1/a')], '5')).toEqual([]);
  });
});

describe('getTaskTitle', () => {
  it('returns the matching taskMeta entry\'s title', () => {
    const taskMeta = [{ id: '1', data: { title: 'Liquidity Marking' } }];
    expect(getTaskTitle(taskMeta, '1')).toBe('Liquidity Marking');
  });

  it('falls back to "Task N" when there is no taskMeta entry for that task', () => {
    expect(getTaskTitle([], '3')).toBe('Task 3');
  });
});

describe('siblingSubtasks', () => {
  const sorted = [entry('1/a'), entry('1/b'), entry('1/c')];

  it('returns both prev and next for a middle entry', () => {
    const result = siblingSubtasks(sorted, '1/b');
    expect(result.prev?.id).toBe('1/a');
    expect(result.next?.id).toBe('1/c');
  });

  it('returns null prev for the first entry', () => {
    const result = siblingSubtasks(sorted, '1/a');
    expect(result.prev).toBeNull();
    expect(result.next?.id).toBe('1/b');
  });

  it('returns null next for the last entry', () => {
    const result = siblingSubtasks(sorted, '1/c');
    expect(result.next).toBeNull();
    expect(result.prev?.id).toBe('1/b');
  });

  it('returns both null when the current id is not found', () => {
    const result = siblingSubtasks(sorted, '9/z');
    expect(result.prev).toBeNull();
    expect(result.next).toBeNull();
  });
});
