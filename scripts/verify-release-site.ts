import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { MOVA_ACCOUNT_DELETION_COPY } from '../src/constants/account-deletion';

const rootDirectory = process.cwd();
const outputDirectory = path.join(rootDirectory, 'dist');
const requiredPages = [
  { file: 'index.html', canonical: 'https://staysinmotion.com/' },
  { file: 'privacy/index.html', canonical: 'https://staysinmotion.com/privacy/' },
  { file: 'terms/index.html', canonical: 'https://staysinmotion.com/terms/' },
] as const;
const retiredSupportPatterns = [
  /forms\.gle/i,
  /docs\.google\.com\/forms/i,
  /Fitness Playlist Sync Feedback/i,
  /linked support form/i,
];
const obsoleteDeletionInstructions = [
  /Contact support for a data deletion request/i,
  /Mova does not promise a fixed deletion period/i,
];

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
    if (file.includes(`${path.sep}__tests__${path.sep}`) || /\.test\.[jt]sx?$/.test(file)) continue;
    const contents = readFileSync(file, 'utf8');
    for (const pattern of [...retiredSupportPatterns, ...obsoleteDeletionInstructions]) {
      if (pattern.test(contents)) {
        errors.push(`${path.relative(rootDirectory, file)} contains obsolete release copy matching ${pattern}`);
      }
    }
  }
}

const builtJavaScript = collectFiles(outputDirectory)
  .filter((file) => file.endsWith('.js'))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');
for (const copy of Object.values(MOVA_ACCOUNT_DELETION_COPY)) {
  if (!builtJavaScript.includes(copy)) {
    errors.push(`Built site is missing deletion copy: ${copy}`);
  }
}

if (errors.length > 0) {
  throw new Error(`Release-site verification failed:\n- ${errors.join('\n- ')}`);
}

console.log(
  'Release site verified: direct routes, canonical URLs, current deletion copy, and no retired instructions.',
);
