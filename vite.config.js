import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const basePath = process.env.VITE_BASE_PATH || "/";

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [vue()],
  server: {
    fs: {
      allow: ["../"],
    },
  },
  build: {
    rollupOptions: {
      external: [
        /gui/
      ]
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  define: {
    "process.env.VITE_CALDERA_API_URL": JSON.stringify(
      process.env.VITE_CALDERA_API_URL || "/"
    ),
  },
});
