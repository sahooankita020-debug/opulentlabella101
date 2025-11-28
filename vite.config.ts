import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for when deploying to GitHub Pages at
  // https://sahooankita020-debug.github.io/opulentlabella101/
  base: '/opulentlabella101/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
