import { describe, expect, it } from 'vitest';
import { withBase } from './paths';

describe('withBase', () => {
  it('joins a base with a trailing slash and a path with a leading slash', () => {
    expect(withBase('/tasks/1/a/', '/mrc-tasks/')).toBe('/mrc-tasks/tasks/1/a/');
  });

  it('joins a base without a trailing slash and a path without a leading slash', () => {
    expect(withBase('tasks/1/a/', '/mrc-tasks')).toBe('/mrc-tasks/tasks/1/a/');
  });

  it('handles the root path', () => {
    expect(withBase('/', '/mrc-tasks/')).toBe('/mrc-tasks/');
  });
});
