import { describe, expect, it } from 'vitest';
import { truncateExcerpt } from './og';

describe('truncateExcerpt', () => {
  it('returns short text unchanged', () => {
    expect(truncateExcerpt('Mark the liquidity zones.', 160)).toBe('Mark the liquidity zones.');
  });

  it('collapses internal whitespace and trims', () => {
    expect(truncateExcerpt('  Mark   the   zones.  ', 160)).toBe('Mark the zones.');
  });

  it('truncates long text at a word boundary and appends an ellipsis', () => {
    const text = 'Mark the liquidity zones on EURUSD fifteen minute chart';
    expect(truncateExcerpt(text, 20)).toBe('Mark the liquidity...');
  });
});
