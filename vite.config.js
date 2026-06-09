import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@babel/plugin-syntax-import-meta"],
      },
    }),
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("framer-motion")) return "animation-vendor";
            if (id.includes("lucide-react") || id.includes("react-icons"))
              return "icons-vendor";

            return "vendor";
          }
        },
      },
    },

    chunkSizeWarningLimit: 1000,

    minify: "terser",

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
});