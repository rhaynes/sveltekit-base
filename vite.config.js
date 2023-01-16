import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: { allow: ['./lib'] }
  },
  resolve: {
    alias: {
      lib: path.resolve('./lib')
    }
  }
};

export default config;
