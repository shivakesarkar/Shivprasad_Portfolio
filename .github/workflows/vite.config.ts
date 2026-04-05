import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      'next/link': path.resolve(__dirname, 'lib/next-link-shim.tsx'),
      'next/font/google': path.resolve(__dirname, 'lib/next-font-shim.ts'),
    },
  },
});
