import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import favicons from 'favicons';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Source image path (using an existing image from the public directory)
const sourceImage = path.join(rootDir, 'client', 'public', 'images', 'jubied-portrait.png');

// Output directory for favicons
const outputDir = path.join(rootDir, 'client', 'public', 'favicons');

// Configuration
const configuration = {
  path: '/favicons', // Path where the favicons will be hosted
  appName: 'Personal Portfolio',
  appShortName: 'Portfolio',
  appDescription: 'My Personal Portfolio',
  background: '#ffffff',
  theme_color: '#ffffff',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    favicons: true,
    windows: true,
    yandex: false
  }
};

async function ensureDirectoryExists(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
    console.log(`Directory created or already exists: ${dir}`);
  } catch (err) {
    console.error(`Error creating directory ${dir}:`, err);
  }
}

async function generateFavicons() {
  try {
    console.log('Starting favicon generation...');
    
    // Check if source image exists
    try {
      await fs.access(sourceImage);
    } catch (err) {
      console.log('Source image not found. Creating empty favicon directory and skipping generation.');
      await ensureDirectoryExists(outputDir);
      return;
    }
    
    // Ensure output directory exists
    await ensureDirectoryExists(outputDir);
    
    // Generate favicons
    const response = await favicons(sourceImage, configuration);
    
    // Write files
    for (const image of response.images) {
      await fs.writeFile(path.join(outputDir, image.name), image.contents);
    }
    
    for (const file of response.files) {
      await fs.writeFile(path.join(outputDir, file.name), file.contents);
    }
    
    // Write HTML to a file that can be imported
    await fs.writeFile(
      path.join(outputDir, 'favicon-tags.html'),
      response.html.join('\n')
    );
    
    console.log('Favicon generation completed successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    // Create directory anyway but don't fail the build
    await ensureDirectoryExists(outputDir);
  }
}

generateFavicons().catch(err => {
  console.error('An unexpected error occurred:', err);
  process.exit(1);
}); 