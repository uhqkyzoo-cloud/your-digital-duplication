import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true,
      },
      mangle: {
        properties: {
          regex: /^_/, // Obfusquer les propriétés privées
        },
      },
      format: {
        comments: false, // Supprimer les commentaires
      },
    },
    sourcemap: false, // Pas de source maps en production
    reportCompressedSize: false,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
}));
