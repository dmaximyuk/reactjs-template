/**
 * @file Vite configuration for development with custom build and server settings.
 * This file defines settings for development server.
 */

import { defineConfig } from "vite";
import { defaultConfig } from "./default.config";

export default defineConfig({
  ...defaultConfig, // Merge with the base configuration
  build: {
    target: "esnext", // Target the latest JavaScript features (ESNext)
    sourcemap: true, // Enable source maps for easier debugging in production
    minify: false, // Disable minification for a more readable output (useful for debugging)
    cssCodeSplit: false, // Disable CSS code splitting (all CSS will be bundled into a single file)
  },
  server: {
    port: 3000, // Set the port for the development server to 3000
    strictPort: true, // Ensure that the specified port is used, fail if the port is unavailable
    open: true, // Automatically open the application in the browser when the server starts
    hmr: true, // Enable Hot Module Replacement (HMR) for a faster development experience
  },
});
