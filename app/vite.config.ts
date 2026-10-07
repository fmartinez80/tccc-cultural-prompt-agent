import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// `pnpm dev` runs the API (tsx watch src/index.ts) on API_PORT and Vite on
// 5173; Vite forwards the API's paths to it.
const apiPort = process.env['API_PORT'] ?? '3001';

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    proxy: {
      '/trpc': `http://localhost:${apiPort}`,
      '/api': `http://localhost:${apiPort}`,
      '/media': `http://localhost:${apiPort}`,
    },
  },
});
