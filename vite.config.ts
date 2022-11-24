import { defineConfig } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue2';
import { fileURLToPath, URL } from 'node:url';
import checker from 'vite-plugin-checker';

export default defineConfig(() => ({
  plugins: [
    createVuePlugin(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}"',
      },
      overlay: true,
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
