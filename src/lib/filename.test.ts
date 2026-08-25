import { describe, expect, it } from 'vitest';
import { parseFilename, prettifyLabel } from './filename';

describe('parseFilename', () => {
  it('parses a bare HH-MM_label filename', () => {
    const result = parseFilename('09-14_entry.png');
    expect(result).toEqual({
      date: null,
      hour: 9,
      minute: 14,
      label: 'Entry',
      isMentorImage: false,
      valid: true,
      raw: '09-14_entry.png',
    });
  });

  it('parses a date-prefixed filename', () => {
    const result = parseFilename('2026-08-20_10-02_management-tight.png');
    expect(result.date).toBe('2026-08-20');
    expect(result.hour).toBe(10);
    expect(result.minute).toBe(2);
    expect(result.label).toBe('Management Tight');
  });

  it('flags mentor images without requiring a timestamp', () => {
    const result = parseFilename('mentor_zone-diagram.png');
    expect(result).toMatchObject({ isMentorImage: true, valid: true, label: 'Zone Diagram' });
  });

  it('marks an unparseable filename as invalid without throwing', () => {
    const result = parseFilename('screenshot.png');
    expect(result.valid).toBe(false);
    expect(result.raw).toBe('screenshot.png');
  });
});

describe('prettifyLabel', () => {
  it('replaces separators with spaces and title-cases each word', () => {
    expect(prettifyLabel('resistance-test_zone')).toBe('Resistance Test Zone');
  });
});
