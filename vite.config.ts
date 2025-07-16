import { defineConfig } from "vite";

export default defineConfig(({ mode, command }) => {
  const isProd = command === "build";

  if (isProd) {
    return require("./vite/prod.config").default({ mode });
  }

  // eslint-disable-next-line no-undef
  return require("./vite/dev.config").default({ mode });
});
