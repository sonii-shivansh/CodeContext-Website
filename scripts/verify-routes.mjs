import { existsSync } from 'node:fs';
import { join } from 'node:path';

const requiredRoutes = [
  '',
  'capabilities',
  'architecture',
  'demo',
  'docs',
  'releases',
  'security'
];

const missing = requiredRoutes.flatMap((route) => {
  const directory = join('dist', route);
  const candidates = route === ''
    ? [join('dist', 'index.html')]
    : [join(directory, 'index.html'), join('dist', `${route}.html`)];

  return candidates.some(existsSync) ? [] : [route || '/'];
});

if (!existsSync(join('dist', '404.html'))) missing.push('404');

if (missing.length > 0) {
  console.error(`Missing production route artifacts: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`Verified ${requiredRoutes.length} application routes plus 404.`);
