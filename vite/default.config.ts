import { fileURLToPath } from "node:url";
import { InlineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tsPaths from "vite-tsconfig-paths";
import { compression } from "vite-plugin-compression2";
import { analyzer } from "vite-bundle-analyzer";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default (): InlineConfig => {
  const isCompress = process.env.BUILD_COMPRESS === "true";
  const isAnalyze = process.env.BUILD_ANALYZE === "true";

  const plugins = [
    tsPaths(),
    react(),
    svgr(),
    imagetools({
      defaultDirectives: (url) => {
        if (/\.(png|jpe?g)$/i.test(url.pathname.toLowerCase())) {
          return new URLSearchParams({
            format: "webp",
            quality: "80",
          });
        }

        return new URLSearchParams();
      },
    }),
    ViteImageOptimizer(),
    ViteMinifyPlugin(),
    isCompress &&
      compression({
        algorithms: ["gzip", "brotliCompress"],
        deleteOriginalAssets: false,
        include: /\.(xml|css|json|js|ts|mjs|svg|yaml|yml|toml|html|txt|woff|woff2|ttf|eot)$/,
        threshold: 0,
      }),
    isAnalyze && analyzer(),
  ].filter(Boolean);

  return {
    appType: "spa",
    publicDir: "public",
    plugins,
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
  };
};
