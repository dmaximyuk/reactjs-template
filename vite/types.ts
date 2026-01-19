export type BuildMode =
  | "compress"
  | "analyzer"
  | "default";

export type VITE_EXPORT_PARAMS = {
  env?: Record<string, string>;
  mode: BuildMode;
};
