import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base: './' keeps asset paths relative so the built site works when served
// from any subpath (e.g. GitHub Pages project sites, or a nested folder).
export default defineConfig({
  base: './',
  plugins: [vue()],
})
