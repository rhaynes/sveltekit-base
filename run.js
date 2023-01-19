import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

(async () => {
  // Check for the minimum number of arguments
  if (process.argv.length < 3) {
    console.log('USAGE: node run scriptName');
    process.exit();
  }

  // Create a server just to load all of vite's and sveltekit's config
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  // Use the server-side rendering capabilities of vite to import the module
  // This makes sure all svelte's module paths are reachable
  const res = await vite.ssrLoadModule(path.join(__dirname, 'scripts', `${process.argv[2]}.js`));

  // Execute the main() exported function
  await res.main();
  
  // Exit process
  process.exit();
})();
