import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 🔑 Required for GitHub/Vercel paths
  build: {
    outDir: 'dist',
  },
});
