// Generates favicon / touch icon / default OG image into public/.
// Run with: node scripts/make-assets.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const star = (cx, cy, s) =>
  `M${cx} ${cy - s} L${cx + s * 0.22} ${cy - s * 0.22} L${cx + s} ${cy} L${cx + s * 0.22} ${cy + s * 0.22} L${cx} ${cy + s} L${cx - s * 0.22} ${cy + s * 0.22} L${cx - s} ${cy} L${cx - s * 0.22} ${cy - s * 0.22} Z`;

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <defs>
    <radialGradient id="g" cx="50%" cy="40%" r="70%">
      <stop offset="0" stop-color="#1d2a5a"/><stop offset="1" stop-color="#0a0f1f"/>
    </radialGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <circle cx="32" cy="32" r="22" fill="none" stroke="#e9c46a" stroke-opacity=".45" stroke-width="1.2"/>
  <path d="${star(32, 32, 19)}" fill="#e9c46a"/>
  <circle cx="47" cy="17" r="2" fill="#fff" fill-opacity=".8"/>
  <circle cx="17" cy="47" r="1.4" fill="#fff" fill-opacity=".6"/>
</svg>`;

// Deterministic star field for the OG image.
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const dots = Array.from({ length: 140 }, () => {
  const x = (rand() * 1200).toFixed(1);
  const y = (rand() * 630).toFixed(1);
  const r = (0.6 + rand() * 1.6).toFixed(2);
  const o = (0.25 + rand() * 0.6).toFixed(2);
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" fill-opacity="${o}"/>`;
}).join('');
const constellation = [
  [820, 120],
  [905, 190],
  [990, 150],
  [1060, 240],
  [985, 330],
  [1090, 410],
];
const cline = constellation.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
const cstars = constellation.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#e9c46a"/>`).join('');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0f1f"/><stop offset=".6" stop-color="#111a3a"/><stop offset="1" stop-color="#1c1430"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="10%" r="60%">
      <stop offset="0" stop-color="#e9c46a" stop-opacity=".28"/><stop offset="1" stop-color="#e9c46a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="5%" cy="100%" r="50%">
      <stop offset="0" stop-color="#ee5b44" stop-opacity=".22"/><stop offset="1" stop-color="#ee5b44" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  ${dots}
  <path d="${cline}" fill="none" stroke="#e9c46a" stroke-opacity=".7" stroke-width="2"/>
  ${cstars}
  <path d="${star(990, 150, 22)}" fill="#e9c46a"/>
  <circle cx="955" cy="275" r="150" fill="none" stroke="#e9c46a" stroke-opacity=".18" stroke-width="2"/>
  <text x="80" y="200" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="6" fill="#e9c46a">UNOFFICIAL WIKI &amp; GUIDE</text>
  <text x="76" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="128" font-weight="600" fill="#f2f0ea">Astrae Oratio</text>
  <text x="80" y="410" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#c6cbe0">Characters · Release Date · Codes · Guides</text>
  <rect x="80" y="470" width="300" height="2" fill="#e9c46a" fill-opacity=".6"/>
  <text x="80" y="530" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="#e9c46a">astraeoratio.org</text>
</svg>`;

await writeFile('public/favicon.svg', icon(64));
await sharp(Buffer.from(icon(32))).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(icon(180))).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(icon(512))).png().toFile('public/icon-512.png');
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
console.log('assets written');
