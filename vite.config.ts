import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // CRITICAL: Base path must match your GitHub repository name
  base: '/kwameglover/',
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Ensure all assets use relative paths
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 8080,
    host: true,
    open: true
  },
  
  // Preview server configuration (for npm run preview)
  preview: {
    port: 4173,
    host: true
  },
  
  // Path resolution for @ imports (if you're using them)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // Ensure proper asset handling
  publicDir: 'public',
  
  // CSS configuration
  css: {
    devSourcemap: true
  }
})
