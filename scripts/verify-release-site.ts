import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const rootDirectory = process.cwd();
const outputDirectory = path.join(rootDirectory, 'dist');
const requiredPages = [
  { file: 'index.html', canonical: 'https://staysinmotion.com/' },
  { file: 'privacy/index.html', canonical: 'https://staysinmotion.com/privacy/' },
  { file: 'terms/index.html', canonical: 'https://staysinmotion.com/terms/' },
] as const;
const retiredSupportPatterns = [/forms\.gle/i, /docs\.google\.com\/forms/i, /Fitness Playlist Sync Feedback/i];

function collectFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(entryPath) : [entryPath];
  });
}

const errors: string[] = [];

for (const page of requiredPages) {
  const pagePath = path.join(outputDirectory, page.file);
  if (!existsSync(pagePath)) {
    errors.push(`Missing direct-load page: dist/${page.file}`);
    continue;
  }

  const html = readFileSync(pagePath, 'utf8');
  if (!html.includes(`<link rel="canonical" href="${page.canonical}"`)) {
    errors.push(`dist/${page.file} does not declare canonical URL ${page.canonical}`);
  }
}

for (const directory of [path.join(rootDirectory, 'src'), outputDirectory]) {
  for (const file of collectFiles(directory)) {
    const contents = readFileSync(file, 'utf8');
    for (const pattern of retiredSupportPatterns) {
      if (pattern.test(contents)) {
        errors.push(`${path.relative(rootDirectory, file)} contains retired support-form content matching ${pattern}`);
      }
    }
  }
}

if (errors.length > 0) {
  throw new Error(`Release-site verification failed:\n- ${errors.join('\n- ')}`);
}

console.log('Release site verified: direct /, /privacy/, and /terms/ artifacts with no retired support form.');
