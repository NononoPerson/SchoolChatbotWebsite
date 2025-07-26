// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',             // root is current folder
  publicDir: 'public',   // ensure Vite knows where index.html is
  build: {
    outDir: 'dist',
  },
});
