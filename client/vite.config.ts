import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../api/public",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api/v1": {
        target: "http://api:3000",
        changeOrigin: true,
      },
    },
  },
});
