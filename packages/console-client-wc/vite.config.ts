import { defineConfig } from 'vite'
import { resolve } from 'path'

import settings from './settings.json'

export default defineConfig(() => ({
  base: './',
  build: {
    chunkSizeWarningLimit: 3000,
    cssCodeSplit: false,
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      input: resolve(__dirname, 'src/index.ts'),
      output: {
        entryFileNames: (chunk) => `${chunk.name}.esm.js`,
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
  },
  esbuild: {
    charset: 'utf8',
    legalComments: 'none',
    target: settings.target,
  },
}))
