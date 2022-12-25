import path from "path"

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  base: './',
  build: {
    outDir: './dist',
    assetsDir: './',
    rollupOptions: {
      output: {
        entryFileNames: "sytalk.min.js"
      }
    }
  }
});
