import { describe, expect, it } from 'vitest';
import { adjacentSegments, segmentNumbers, workForSegment } from './segments';

const e = (id: string) => ({ id });

describe('segmentNumbers', () => {
  it('sorts segments numerically', () => {
    expect(segmentNumbers([e('3'), e('10'), e('1')])).toEqual(['1', '3', '10']);
  });
});

describe('workForSegment', () => {
  it('returns direct entries of that segment only, sorted', () => {
    const work = [e('1/mine/s02'), e('1/mine/s01'), e('2/mine/s01'), e('1/mine/s01/extra')];
    expect(workForSegment(work, '1').map((w) => w.id)).toEqual(['1/mine/s01', '1/mine/s02']);
  });

  it('is empty when nothing has been added', () => {
    expect(workForSegment([], '1')).toEqual([]);
  });
});

describe('adjacentSegments', () => {
  it('finds neighbours and stops at the ends', () => {
    expect(adjacentSegments(['1', '2', '3'], '1')).toEqual({ prev: null, next: '2' });
    expect(adjacentSegments(['1', '2', '3'], '2')).toEqual({ prev: '1', next: '3' });
    expect(adjacentSegments(['1', '2', '3'], '3')).toEqual({ prev: '2', next: null });
    expect(adjacentSegments(['1'], '4')).toEqual({ prev: null, next: null });
  });
});
