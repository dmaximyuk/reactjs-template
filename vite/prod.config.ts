import { defineConfig } from "vite";
import path from "node:path";
import browserslistToEsbuild from "browserslist-to-esbuild";

import defaultConfig from "./default.config";
import { compilerOptions } from "../tsconfig.json";

export default () => {
  return defineConfig({
    ...defaultConfig(),
    base: "/",
    build: {
      target: browserslistToEsbuild(),
      sourcemap: false,
      cssCodeSplit: false,
      cssMinify: "lightningcss",
      outDir: compilerOptions.outDir,
      minify: "terser",
      manifest: false,
      reportCompressedSize: true,
      terserOptions: {
        maxWorkers: 4,
        compress: {
          drop_debugger: true,
          drop_console: true,
          passes: 5,
          pure_funcs: ["console.log", "console.info", "console.debug"],
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
