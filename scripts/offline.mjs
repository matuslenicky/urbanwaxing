// Builds urbanwaxing.html: the same page with fonts and images inlined,
// so it can be sent as a single file and opened without internet.
// Usage: node scripts/offline.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
const dataUri = rel => {
  const file = path.join(root, rel);
  return `data:${types[path.extname(file)]};base64,${fs.readFileSync(file).toString('base64')}`;
};

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

// Preloads are useless once fonts are inline.
html = html.replace(/<link rel="preload"[^>]*>\n/g, '');
html = html.replace(/url\((fonts\/[^)]+)\)/g, (_, rel) => `url(${dataUri(rel)})`);
// Without a preload the inline font is decoded only after the first paint; the wider display face
// then resizes the desktop hero columns (CLS ~0.14). Start decoding both subsets right after the CSS.
html = html.replace('</style>', '</style>\n<script>document.fonts&&["Ab","čž"].forEach(t=>document.fonts.load("800 1em Archivo",t))</script>');

// For each responsive image keep only the 800 px file (or the single src) inline.
html = html.replace(/<img\b[^>]*>/g, tag => {
  tag = tag.replace(/\s(srcset|sizes)="[^"]*"/g, '');
  return tag.replace(/\ssrc="(img\/[^"]+)"/, (_, rel) => ` src="${dataUri(rel)}"`);
});
html = html.replace(/href="(img\/(?:favicon|apple-touch-icon)\.png)"/g, (_, rel) => `href="${dataUri(rel)}"`);

const out = path.join(root, 'urbanwaxing.html');
fs.writeFileSync(out, html);
console.log(out, (fs.statSync(out).size / 1024).toFixed(0) + ' KB');
