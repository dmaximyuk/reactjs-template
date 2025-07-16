import { defineConfig } from "vite";

import defaultConfig from "./default.config";
import { compilerOptions } from "../tsconfig.json";

import type { VITE_EXPORT_PARAMS } from "./types.config";

export default (params: VITE_EXPORT_PARAMS) =>
  defineConfig({
    ...defaultConfig(params),
    base: "/",
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      cssMinify: "lightningcss",
      outDir: compilerOptions.outDir,
      minify: "terser",
      manifest: false,
      terserOptions: {
        maxWorkers: 2,
        compress: {
          drop_debugger: true,
          drop_console: true,
          passes: 3,
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 15_000,
          chunkFileNames: "js/[hash].js",
          entryFileNames: "js/[hash].js",
          assetFileNames: (opt) => {
            const [[, ext]] = Array.from(
              opt!.name!.matchAll(/.([0-9-a-z]+)$/g),
            );
            return `${ext}/[hash].${ext}`;
          },
        },
      },
    },
  });
