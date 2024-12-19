/**
 * @file Default Vite configuration.
 * This configuration provides settings for the Single Page Application (SPA).
 */

import { InlineConfig } from "vite";

/** Plugins */
import core from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tsPaths from "vite-tsconfig-paths";
import { compression } from "vite-plugin-compression2";
import { analyzer } from "vite-bundle-analyzer";
import { fileURLToPath } from "node:url";

/**
 * Default Vite configuration for the project.
 * @type {InlineConfig}
 */

export const defaultConfig: InlineConfig = {
  appType: "spa", // Set application type as Single Page Application
  publicDir: "public", // Directory for public assets, typically static files
  assetsInclude: ["**/*.zlottie"], // Include .tgs files as assets to be processed. More: https://github.com/dmaximyuk/zlottie
  plugins: [
    // importMainSass(),
    /**
     * Plugin for compressing assets using gzip algorithm.
     * Deletes the original assets after compression.
     * Includes certain types of files for compression.
     */
    compression({
      algorithm: "gzip", // Compression algorithm (gzip)
      deleteOriginalAssets: true, // Delete the original uncompressed assets
      include: /\.(xml|css|json|js|mjs|svg|yaml|yml|toml)$/, // Files to be compressed
    }),

    /**
     * Plugin to resolve TypeScript path mappings defined in tsconfig.json.
     */
    tsPaths(),

    /**
     * React plugin that uses SWC for faster builds and better performance.
     */
    core(),

    /**
     * Plugin to import SVG files as React components.
     */
    svgr(),

    /**
     * Bundle analyzer plugin for analyzing the build output.
     * Useful for inspecting and optimizing the bundle size.
     */
    analyzer(),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("../src/styles", import.meta.url)),
    },
  },
};
