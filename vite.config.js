import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: '209.97.134.184',
    port: 4174,
  },
  preview: {
    allowedHosts: ['mytrackss.com'],
  },
});
