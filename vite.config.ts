import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kwameglover/', // Must match your repo name exactly
  build: {
    outDir: 'dist'
  }
})
