import { Theme } from "@/models";

export const THEME = (localStorage.getItem("theme") || Theme.Light) as Theme;
export const LANGUAGE =
  localStorage.getItem("lang") || navigator.language || "en";
