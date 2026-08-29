import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { sites } from "@openai/sites-vite-plugin";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function staticSitesWorker() {
  return {
    name: "static-sites-worker",
    apply: "build",
    closeBundle() {
      const serverDirectory = resolve("dist/server");
      mkdirSync(serverDirectory, { recursive: true });
      writeFileSync(
        resolve(serverDirectory, "index.js"),
        "export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n",
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sites(), staticSitesWorker()],
  base: "./",
  server: {
    port: 5173,
    open: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/framer-motion/")) return "motion";
          if (id.includes("/gsap/") || id.includes("/lenis/")) return "animation";
          if (id.includes("/lucide-react/")) return "icons";
          if (id.includes("/react/") || id.includes("/react-dom/")) return "react";
          return undefined;
        },
      },
    },
  },
});
