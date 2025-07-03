import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // Ahora TypeScript lo reconocerá

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Usamos path.resolve con la URL del módulo actual en lugar de __dirname
      "@": path.resolve(new URL(import.meta.url).pathname, "..", "./src"),
    },
  },
});
