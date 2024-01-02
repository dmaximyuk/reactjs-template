import type { HTMLAttributes } from "react";

export interface RowProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  padding?: number;
}
