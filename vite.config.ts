import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          culprit: ["react-custom-scrollbars-2"],
        },
      },
    },
  },
  plugins: [react()],
});
