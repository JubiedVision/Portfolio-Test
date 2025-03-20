import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sourceDir = path.join(rootDir, 'client', 'public');
const destDir = path.join(rootDir, 'dist', 'public');

// Files to copy
const filesToCopy = [
  '_redirects',
  '_headers',
  '404.html'
];

async function ensureDirectoryExists(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
    console.log(`Directory created or already exists: ${dir}`);
  } catch (err) {
    console.error(`Error creating directory ${dir}:`, err);
  }
}

async function copyFile(source, destination) {
  try {
    await fs.copyFile(source, destination);
    console.log(`Copied: ${source} → ${destination}`);
  } catch (err) {
    // If file doesn't exist, create a default one for redirects
    if (err.code === 'ENOENT' && path.basename(source) === '_redirects') {
      try {
        await fs.writeFile(destination, `/* /index.html 200`);
        console.log(`Created default _redirects file at ${destination}`);
      } catch (writeErr) {
        console.error(`Error creating default _redirects:`, writeErr);
      }
    } else {
      console.error(`Error copying ${source}:`, err);
    }
  }
}

async function main() {
  console.log('Starting to copy Netlify files...');
  
  // Ensure the destination directory exists
  await ensureDirectoryExists(destDir);
  
  // Copy each file
  for (const file of filesToCopy) {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    await copyFile(sourcePath, destPath);
  }
  
  console.log('Finished copying Netlify files!');
}

main().catch(err => {
  console.error('An error occurred:', err);
  process.exit(1);
}); 