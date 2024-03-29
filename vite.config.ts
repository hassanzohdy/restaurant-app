import mongezVite from "@mongez/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react"],
          reactDOM: ["react-dom"],
          router: ["@mongez/react-router"],
          crypto: ["crypto-js"],
        },
      },
    },
  },
  plugins: [
    svgr({
      exportAsDefault: false,
    }),
    mongezVite(),
    react(),
  ],
  envPrefix: "APP_",
}));
