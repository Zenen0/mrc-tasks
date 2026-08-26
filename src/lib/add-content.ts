export function slugifyLabel(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function sanitizeSlug(input: string): string {
  return slugifyLabel(input);
}

export function sanitizeTaskNumber(input: string): string {
  return input.replace(/[^0-9]/g, '');
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

export interface ImageFilenameInput {
  hour: number;
  minute: number;
  label: string;
  isMentor: boolean;
  extension: string;
}

export function buildImageFilename(input: ImageFilenameInput): string {
  const slug = slugifyLabel(input.label) || 'capture';
  if (input.isMentor) {
    return `mentor_${slug}.${input.extension}`;
  }
  return `${pad2(input.hour)}-${pad2(input.minute)}_${slug}.${input.extension}`;
}

function escapeYamlString(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function indentBlock(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces);
  return text
    .split('\n')
    .map((line) => (line.length > 0 ? `${pad}${line}` : line))
    .join('\n');
}

export interface FrontmatterInput {
  title: string;
  date: string;
  mentorPrompt?: string;
  captions?: Record<string, string>;
}

export function buildFrontmatter(input: FrontmatterInput): string {
  const lines: string[] = ['---'];
  lines.push(`title: "${escapeYamlString(input.title)}"`);
  lines.push(`date: ${input.date}`);

  const mentorPrompt = input.mentorPrompt?.trim();
  if (mentorPrompt) {
    lines.push('mentorPrompt: |');
    lines.push(indentBlock(mentorPrompt, 2));
  }

  const captionEntries = Object.entries(input.captions ?? {});
  if (captionEntries.length > 0) {
    lines.push('captions:');
    for (const [filename, caption] of captionEntries) {
      lines.push(`  ${filename}: "${escapeYamlString(caption)}"`);
    }
  }

  lines.push('---');
  return lines.join('\n');
}
