import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    // host: '209.97.134.184',
    host: '0.0.0.0',
    port: 4174,
  },
  preview: {
    allowedHosts: ['mytrackss.com'],
  },
});
