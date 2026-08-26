import sharp from 'sharp';

const svg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0a0c0f" />
    <rect x="0" y="0" width="1200" height="630" fill="none" stroke="#23272e" stroke-width="2" />
    <text x="60" y="330" font-family="monospace" font-size="64" fill="#e6e8eb">MrC Tasks</text>
    <text x="60" y="390" font-family="monospace" font-size="28" fill="#d99a3c">Backtesting task review</text>
  </svg>
`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('Wrote public/og-default.png');
