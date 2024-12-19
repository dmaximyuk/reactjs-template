/**
 * @file Vite configuration for building a project with TypeScript, React, and other libraries.
 * This file includes build settings, custom chunk splitting logic, and minification options.
 */

import { defineConfig } from "vite";
import { compilerOptions } from "../tsconfig.json";
import { defaultConfig } from "./default.config";

/**
 * @typedef {Object} ManualChunksKey
 * @property {string} name - The name of the chunk group
 * @property {string[]} libs - The list of libraries belonging to this group
 */

/**
 * List of libraries to be split into separate chunks for optimization.
 * @type {ManualChunksKey[]}
 */
const manualChunksKeys = [
  {
    name: "@r", // Group for React-related libraries
    libs: [
      "react-dom",
      "react-router",
      "react-redux",
      "react-helmet",
      "reduxjs",
      "redux-saga",
      "axios",
    ],
  },
  {
    name: "@intl", // Group for i18n
    libs: ["react-i18next", "i18next", "language-detector"],
  },
  {
    name: "@lw", // Group for lottie-web
    libs: ["lottie-web"],
  },
];

export default defineConfig({
  ...defaultConfig,
  base: "/", // Base public path for the application
  build: {
    sourcemap: false, // Disable source maps for production builds
    cssCodeSplit: true, // Enable splitting of CSS into separate files
    cssMinify: "lightningcss", // Use "lightningcss" for CSS minification
    outDir: compilerOptions.outDir, // Output directory from TypeScript configuration
    minify: "terser", // Use "terser" for JavaScript minification
    manifest: false, // Disable the generation of a build manifest
    terserOptions: {
      maxWorkers: 2, // Limit parallel workers for Terser
      compress: {
        drop_debugger: true, // Remove `debugger` statements
        drop_console: true, // Remove `console.*` statements
        passes: 3, // Apply compression three times for better results
      },
      format: {
        comments: false, // Remove comments from the output
      },
    },
    rollupOptions: {
      output: {
        /**
         * Custom logic for chunk splitting.
         * Checks if a library matches any group in `manualChunksKeys` and assigns it to the corresponding chunk name.
         * @param {string} id - The module ID
         * @returns {string | undefined} - The chunk name if matched, or undefined
         */
        manualChunks(id) {
          for (const chunk of manualChunksKeys) {
            for (const lib of chunk.libs) {
              if (id.includes(lib)) {
                return chunk.name;
              }
            }
          }
        },
        experimentalMinChunkSize: 15_000, // Minimum chunk size in bytes
        chunkFileNames: "js/[hash].js", // Pattern for chunk filenames
        entryFileNames: "js/[hash].js", // Pattern for entry point filenames
        /**
         * Determines asset filenames based on their file extension.
         * @param {import('rollup').PreRenderedAsset} opt - The asset options
         * @returns {string} - The formatted filename
         */
        assetFileNames: (opt) => {
          const [[, ext]] = Array.from(opt!.name!.matchAll(/.([0-9-a-z]+)$/g));
          return `${ext}/[hash].${ext}`;
        },
      },
    },
  },
});
