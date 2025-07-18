import { InlineConfig } from "vite";

import { fileURLToPath } from "node:url";

import core from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tsPaths from "vite-tsconfig-paths";
import { compression } from "vite-plugin-compression2";
import { analyzer } from "vite-bundle-analyzer";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { viteSingleFile } from "vite-plugin-singlefile";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import type { VITE_EXPORT_PARAMS } from "./types.config";

export default (params: VITE_EXPORT_PARAMS): InlineConfig => ({
  appType: "spa",
  publicDir: "public",
  plugins: [
    tsPaths(),
    core(),
    svgr(),
    ViteImageOptimizer(),
    (params.mode === "insertcss" || params.mode === "insertcss-compress") &&
      viteSingleFile({
        inlinePattern: ["**/*.css"],
      }),
    (params.mode === "compress" || params.mode === "insertcss-compress") &&
      compression({
        algorithms: ["gzip", "brotliCompress"],
        deleteOriginalAssets: false,
        include: /\.(xml|css|json|js|ts|mjs|svg|yaml|yml|toml)$/,
      }),
    params.mode === "analyzer" && analyzer(),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("../src/shared/styles", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer(), cssnano()],
    },
  },
});
