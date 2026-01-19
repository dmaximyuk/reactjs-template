import { BuildMode } from "./types";

export const normalizeFlags = (mode: BuildMode) => ({
  compress: mode.includes("compress"),
  analyze: mode === "analyzer",
});
