import { defineConfig } from "vite";

import path from "node:path";

import defaultConfig from "./default.config";
import { compilerOptions } from "../tsconfig.json";

export default () => {
  const isCompressMode = process.env.BUILD_COMPRESS === "true";

  return defineConfig({
    ...defaultConfig(),
    base: "/",
    build: {
      sourcemap: false,
      cssCodeSplit: false,
      cssMinify: "lightningcss",
      outDir: compilerOptions.outDir,
      minify: "terser",
      manifest: false,
      reportCompressedSize: true,
      terserOptions: {
        maxWorkers: isCompressMode ? 4 : 2,
        compress: {
          drop_debugger: true,
          drop_console: true,
          passes: isCompressMode ? 5 : 3,
          pure_funcs: isCompressMode ? ["console.log", "console.info", "console.debug"] : [],
          unsafe: isCompressMode,
          unsafe_comps: isCompressMode,
          unsafe_math: isCompressMode,
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        treeshake: true,
        output: {
          inlineDynamicImports: false,
          entryFileNames: "js/[name].[hash].js",
          chunkFileNames: "js/[name].[hash].js",
          assetFileNames: (opt) => {
            const ext = path.extname(opt?.name || "").slice(1);
            return ext ? `${ext}/[name].[hash].${ext}` : "assets/[name].[hash]";
          },
        },
      },
    },
  });
};