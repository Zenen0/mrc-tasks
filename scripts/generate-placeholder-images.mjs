import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const outDir = 'src/content/tasks/1/a';
await mkdir(outDir, { recursive: true });

const shots = [
  { file: '09-14_entry.png', label: 'ENTRY: 15m equal highs', bg: '#12151a' },
  { file: '10-02_management.png', label: 'MANAGEMENT: sweep and reclaim', bg: '#151a12' },
  { file: '11-30_exit.png', label: 'EXIT: zone held as resistance', bg: '#1a1512' },
];

for (const shot of shots) {
  const columns = Array.from(
    { length: 12 },
    (_, i) => `<line x1="${i * 107}" y1="0" x2="${i * 107}" y2="720" stroke="#2a2f38" stroke-width="1" />`,
  ).join('');
  const rows = Array.from(
    { length: 7 },
    (_, i) => `<line x1="0" y1="${i * 103}" x2="1280" y2="${i * 103}" stroke="#2a2f38" stroke-width="1" />`,
  ).join('');
  const svg = `
    <svg width="1280" height="720" xmlns="http://www.w3.org/2000/svg">
      <rect width="1280" height="720" fill="${shot.bg}" />
      ${columns}
      ${rows}
      <text x="40" y="60" font-family="monospace" font-size="20" fill="#8b93a1">EURUSD, 15m, placeholder capture</text>
      <text x="40" y="660" font-family="monospace" font-size="28" fill="#d99a3c">${shot.label}</text>
    </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(`${outDir}/${shot.file}`);
  console.log(`Wrote ${outDir}/${shot.file}`);
}
