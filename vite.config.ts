import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kwameglover/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 8080,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
})
