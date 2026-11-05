// Generates every site icon / logo derivative from the official logo.
// Source (never edited): src/assets/brand/mrc-tasks-logo.webp
// Run: node scripts/generate-brand-assets.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SOURCE = 'src/assets/brand/mrc-tasks-logo.webp';
const OUT = 'public/brand';
const BG = '#060911'; // the logo's own corner colour, so the logo edge is seamless

await mkdir(OUT, { recursive: true });

const square = (size) => sharp(SOURCE).resize(size, size, { kernel: 'lanczos3' });

// Header logo: 36px display box, 1x/2x/3x (mobile shows it at 30px).
for (const px of [36, 72, 108]) {
  await square(px).webp({ quality: 90 }).toFile(`${OUT}/logo-${px}.webp`);
}

// Favicons / touch icon.
await square(32).png().toFile(`${OUT}/favicon-32.png`);
await square(192).png().toFile(`${OUT}/icon-192.png`);
await square(180).png().toFile(`${OUT}/apple-touch-icon.png`);

// Social preview (1200x630): the logo as-is, centred on the site background.
const LOGO_PX = 560;
const logo = await square(LOGO_PX).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: BG } })
  .composite([{ input: logo, left: (1200 - LOGO_PX) / 2, top: (630 - LOGO_PX) / 2 }])
  .png()
  .toFile('public/og-default.png');

console.log('Wrote public/brand/* and public/og-default.png');
