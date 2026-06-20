import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// Deployed to GitHub Pages under /portfolio-website/.
// Use '/' in dev so local URLs stay clean.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio-website/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
