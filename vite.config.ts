import mongezVite from "@mongez/vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
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
    visualizer({
      template: "treemap", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      sourcemap: true,
      filename: "bundle.analyze.html",
    }),
    visualizer({
      template: "sunburst", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      sourcemap: true,
      filename: "bundle.stats.html",
    }),
    visualizer({
      template: "list", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      sourcemap: true,
      filename: "bundle.list.html",
    }),
  ],
  envPrefix: "APP_",
}));
