import { defineConfig } from "vite";

export default defineConfig(async ({ command }) => {
  const configModule =
    command === "build"
      ? await import("./vite/prod.config")
      : await import("./vite/dev.config");

  return configModule.default({});
});
