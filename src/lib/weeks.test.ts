import { describe, expect, it } from 'vitest';
import {
  parseWeekTaskId,
  partProgress,
  tasksForWeek,
  weekNumbers,
  weekTaskLabel,
  weekTaskNumber,
  workForWeekTask,
  workProgress,
} from './weeks';

const e = (id: string) => ({ id });

describe('weekTaskNumber', () => {
  it('strips the task- prefix', () => {
    expect(weekTaskNumber('task-3')).toBe('3');
    expect(weekTaskNumber('3')).toBe('3');
  });
});

describe('weekNumbers', () => {
  it('sorts weeks numerically', () => {
    expect(weekNumbers([e('10'), e('2'), e('1')])).toEqual(['1', '2', '10']);
  });
});

describe('parseWeekTaskId', () => {
  it('splits week, slug and number', () => {
    expect(parseWeekTaskId('1/task-2')).toEqual({ week: '1', slug: 'task-2', number: '2' });
  });
});

describe('tasksForWeek', () => {
  it('returns only that week, sorted by task number', () => {
    const tasks = [e('1/task-10'), e('2/task-1'), e('1/task-2'), e('1/task-1')];
    expect(tasksForWeek(tasks, '1').map((t) => t.id)).toEqual(['1/task-1', '1/task-2', '1/task-10']);
  });
});

describe('workForWeekTask', () => {
  it('returns direct entries of that task only, sorted', () => {
    const work = [e('1/task-2/mine/s02'), e('1/task-2/mine/s01'), e('1/task-1/mine/s01'), e('1/task-2/mine/s01/extra')];
    expect(workForWeekTask(work, '1', 'task-2').map((w) => w.id)).toEqual(['1/task-2/mine/s01', '1/task-2/mine/s02']);
  });

  it('is empty when nothing has been added', () => {
    expect(workForWeekTask([], '1', 'task-1')).toEqual([]);
  });
});

describe('workProgress', () => {
  it('shows count against a target', () => {
    expect(workProgress(0, 10, 'sessions')).toBe('0 / 10 sessions');
  });

  it('falls back to an entry count without a target', () => {
    expect(workProgress(0)).toBe('Not started');
    expect(workProgress(1)).toBe('1 entry');
    expect(workProgress(3)).toBe('3 entries');
  });
});

describe('weekTaskLabel', () => {
  it('defaults to "Task M"', () => {
    expect(weekTaskLabel('task-2')).toBe('Task 2');
  });

  it('uses the frontmatter label when set', () => {
    expect(weekTaskLabel('task-1', 'Assignment')).toBe('Assignment');
  });
});

describe('partProgress', () => {
  const parts = [
    { key: 'A', label: 'Part A · Sessions', target: 30, unit: 'sessions' },
    { key: 'B', label: 'Part B · LTF price points', target: 10, unit: 'price points' },
  ];

  it('shows zero for every part with no work', () => {
    expect(partProgress([], parts).map((p) => p.text)).toEqual(['0 / 30 sessions', '0 / 10 price points']);
  });

  it('counts entries by their part; untagged entries count toward none', () => {
    const work = [{ data: { part: 'A' } }, { data: { part: 'A' } }, { data: { part: 'B' } }, { data: {} }];
    expect(partProgress(work, parts)).toEqual([
      { key: 'A', label: 'Part A · Sessions', text: '2 / 30 sessions' },
      { key: 'B', label: 'Part B · LTF price points', text: '1 / 10 price points' },
    ]);
  });

  it('shows an uncounted part (no target) as a status line, never a number to reach', () => {
    const mixed = [
      { key: 'flow', label: '1) Follow premium flow (minimum)', target: 30, unit: 'days' },
      { key: 'ts', label: '2) TS build reading' },
    ];
    expect(partProgress([], mixed).map((p) => p.text)).toEqual(['0 / 30 days', 'No set count · Not started']);
    expect(partProgress([{ data: { part: 'ts' } }], mixed)[1].text).toBe('1 entry · no set count');
    expect(partProgress([{ data: { part: 'ts' } }, { data: { part: 'ts' } }], mixed)[1].text).toBe('2 entries · no set count');
  });
});
