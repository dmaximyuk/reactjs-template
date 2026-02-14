import { defineConfig } from "vite";

export default defineConfig(async ({ command, mode }) => {
  const useProdConfig =
    command === "build" || (command === "serve" && mode === "production");
  const configModule = useProdConfig
    ? await import("./vite/prod.config")
    : await import("./vite/dev.config");

  return configModule.default({});
});
