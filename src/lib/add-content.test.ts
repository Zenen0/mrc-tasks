import { describe, expect, it } from 'vitest';
import { parseFilename } from './filename';
import { buildFrontmatter, buildImageFilename, sanitizeSlug, sanitizeTaskNumber, slugifyLabel } from './add-content';

describe('slugifyLabel', () => {
  it('lowercases and hyphenates', () => {
    expect(slugifyLabel('Liquidity Marking!')).toBe('liquidity-marking');
  });

  it('collapses repeated separators and trims edges', () => {
    expect(slugifyLabel('  --Resistance   Test--  ')).toBe('resistance-test');
  });
});

describe('sanitizeSlug', () => {
  it('produces the same result as slugifyLabel', () => {
    expect(sanitizeSlug('EURUSD Liquidity Sweep')).toBe('eurusd-liquidity-sweep');
  });
});

describe('sanitizeTaskNumber', () => {
  it('strips everything but digits', () => {
    expect(sanitizeTaskNumber('Task 12')).toBe('12');
  });

  it('returns an empty string when there are no digits', () => {
    expect(sanitizeTaskNumber('abc')).toBe('');
  });
});

describe('buildImageFilename', () => {
  it('builds a capture filename from hour, minute, and label', () => {
    expect(
      buildImageFilename({ hour: 9, minute: 14, label: 'Entry', isMentor: false, extension: 'png' }),
    ).toBe('09-14_entry.png');
  });

  it('slugifies a multi-word label', () => {
    expect(
      buildImageFilename({
        hour: 10,
        minute: 2,
        label: 'Resistance Test Zone',
        isMentor: false,
        extension: 'png',
      }),
    ).toBe('10-02_resistance-test-zone.png');
  });

  it('builds a mentor filename without a timestamp prefix', () => {
    expect(
      buildImageFilename({ hour: 0, minute: 0, label: 'Zone Diagram', isMentor: true, extension: 'png' }),
    ).toBe('mentor_zone-diagram.png');
  });

  it('falls back to "capture" when the label is empty after slugifying', () => {
    expect(buildImageFilename({ hour: 9, minute: 0, label: '!!!', isMentor: false, extension: 'png' })).toBe(
      '09-00_capture.png',
    );
  });

  it('produces a filename that parseFilename interprets correctly', () => {
    const filename = buildImageFilename({
      hour: 9,
      minute: 14,
      label: 'Resistance Test',
      isMentor: false,
      extension: 'png',
    });
    const parsed = parseFilename(filename);
    expect(parsed).toMatchObject({ valid: true, hour: 9, minute: 14, label: 'Resistance Test' });
  });

  it('produces a mentor filename that parseFilename flags correctly', () => {
    const filename = buildImageFilename({
      hour: 0,
      minute: 0,
      label: 'Zone Diagram',
      isMentor: true,
      extension: 'png',
    });
    const parsed = parseFilename(filename);
    expect(parsed).toMatchObject({ valid: true, isMentorImage: true, label: 'Zone Diagram' });
  });
});

describe('buildFrontmatter', () => {
  it('builds minimal frontmatter with just title and date', () => {
    const result = buildFrontmatter({ title: 'Test title', date: '2026-08-26' });
    expect(result).toBe('---\ntitle: "Test title"\ndate: 2026-08-26\n---');
  });

  it('adds a mentorPrompt block scalar when present', () => {
    const result = buildFrontmatter({
      title: 'T',
      date: '2026-08-26',
      mentorPrompt: 'Line one.\nLine two.',
    });
    expect(result).toBe('---\ntitle: "T"\ndate: 2026-08-26\nmentorPrompt: |\n  Line one.\n  Line two.\n---');
  });

  it('omits mentorPrompt entirely when blank', () => {
    const result = buildFrontmatter({ title: 'T', date: '2026-08-26', mentorPrompt: '   ' });
    expect(result).toBe('---\ntitle: "T"\ndate: 2026-08-26\n---');
  });

  it('adds a captions map when present, escaping embedded quotes', () => {
    const result = buildFrontmatter({
      title: 'T',
      date: '2026-08-26',
      captions: { '09-14_entry.png': 'Said "go" here.' },
    });
    expect(result).toBe(
      '---\ntitle: "T"\ndate: 2026-08-26\ncaptions:\n  09-14_entry.png: "Said \\"go\\" here."\n---',
    );
  });

  it('escapes an embedded quote in the title', () => {
    const result = buildFrontmatter({ title: 'Say "hi"', date: '2026-08-26' });
    expect(result).toBe('---\ntitle: "Say \\"hi\\""\ndate: 2026-08-26\n---');
  });
});
