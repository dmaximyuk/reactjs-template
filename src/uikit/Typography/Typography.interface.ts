import type { HTMLAttributes } from "react";

export interface TypographyProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  fontSize?: number;

  isTransparent?: boolean;
  isDescription?: boolean;
  isBold?: boolean;
  isUpperCase?: boolean;
}
