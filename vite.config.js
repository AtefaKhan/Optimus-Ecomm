import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Optimus-Ecomm/',

  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-syntax-import-meta'],
      },
    }),
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons', 'lucide-react'],
        },
      },
    },

    chunkSizeWarningLimit: 1000,

    minify: 'terser',

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables";`,
      },
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    middlewareMode: false,
  },
})