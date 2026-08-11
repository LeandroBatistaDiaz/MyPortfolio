import { cp, mkdir, readdir, rename, rm } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = resolve(projectRoot, 'dist');
const browserOutput = resolve(distRoot, 'portfolio', 'browser');
const temporaryStage = resolve(projectRoot, 'dist-sites-stage');
const workerSource = resolve(projectRoot, 'worker', 'index.js');

for (const candidate of [distRoot, browserOutput, temporaryStage, workerSource]) {
  if (relative(projectRoot, candidate).startsWith('..')) {
    throw new Error(`Refusing to stage a path outside the project: ${candidate}`);
  }
}

await rm(temporaryStage, { recursive: true, force: true });
await cp(browserOutput, temporaryStage, { recursive: true });
await rm(distRoot, { recursive: true, force: true });
await rename(temporaryStage, distRoot);
await mkdir(join(distRoot, 'server'), { recursive: true });
await cp(workerSource, join(distRoot, 'server', 'index.js'));

const entries = await readdir(distRoot);
if (!entries.includes('index.html') || !entries.includes('server')) {
  throw new Error('Static staging did not produce the expected site output.');
}

console.log('Angular static output staged for Sites.');
