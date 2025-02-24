import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 8100, // Ionic's default port
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});