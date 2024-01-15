import path from "node:path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { compilerOptions } from "./tsconfig.json";

export default defineConfig({
  publicDir: "public",
  build: {
    outDir: path.join(compilerOptions.outDir),
    minify: "terser",
    rollupOptions: {
      output: {
        chunkFileNames: "js/[hash].js",
        entryFileNames: "js/[hash].js",
        assetFileNames: (opt) => {
          // @ts-ignore
          const [[, ext]] = Array.from(opt.name.matchAll(/.([0-9-a-z]+)$/g));
          return `${ext}/[hash].${ext}`;
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  plugins: [tsconfigPaths(), react()],
});
