export interface ParsedFilename {
  date: string | null;
  hour: number | null;
  minute: number | null;
  label: string;
  isMentorImage: boolean;
  valid: boolean;
  raw: string;
}

const TIMESTAMPED = /^(?:(\d{4}-\d{2}-\d{2})_)?(\d{2})-(\d{2})_(.+)\.(png|jpe?g|webp)$/i;
const MENTOR_PREFIX = /^mentor_/i;
const EXTENSION = /\.[^.]+$/;

export function prettifyLabel(slug: string): string {
  return slug
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function parseFilename(filename: string): ParsedFilename {
  if (MENTOR_PREFIX.test(filename)) {
    const withoutPrefix = filename.replace(MENTOR_PREFIX, '').replace(EXTENSION, '');
    return {
      date: null,
      hour: null,
      minute: null,
      label: prettifyLabel(withoutPrefix),
      isMentorImage: true,
      valid: true,
      raw: filename,
    };
  }

  const match = TIMESTAMPED.exec(filename);
  if (!match) {
    return {
      date: null,
      hour: null,
      minute: null,
      label: filename,
      isMentorImage: false,
      valid: false,
      raw: filename,
    };
  }

  const [, date, hh, mm, labelSlug] = match;
  return {
    date: date ?? null,
    hour: Number(hh),
    minute: Number(mm),
    label: prettifyLabel(labelSlug),
    isMentorImage: false,
    valid: true,
    raw: filename,
  };
}
