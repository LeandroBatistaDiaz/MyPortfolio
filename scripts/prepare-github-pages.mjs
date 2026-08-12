import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist/portfolio/browser');
const assetPrefix = '/MyPortfolio/';
const textExtensions = new Set(['.html', '.js', '.css', '.mjs']);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

const files = await walk(root);
for (const file of files) {
  if (!textExtensions.has(path.extname(file))) continue;
  let content = await readFile(file, 'utf8');
  for (const asset of ['images/', 'icons/', 'perfil_pic', 'og.png']) {
    content = content.replaceAll(`"/${asset}`, `"${assetPrefix}${asset}`);
    content = content.replaceAll(`'/${asset}`, `'${assetPrefix}${asset}`);
  }
  await writeFile(file, content);
}

await cp(path.join(root, 'index.html'), path.join(root, '404.html'));
await rm(path.join(root, 'server'), { recursive: true, force: true });
console.log(`GitHub Pages output prepared in ${root}`);
