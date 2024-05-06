import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "node",
    setupFiles: './__tests__/setup.ts',
  },
  resolve: {
    alias: {
      '@/src': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
});
