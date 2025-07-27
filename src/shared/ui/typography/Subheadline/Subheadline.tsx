import "./Subheadline.sass";

import { forwardRef, ForwardRefRenderFunction } from "react";

import cn from "clsx";

import { Typography, TypographyProps } from "@/shared/ui";

type SubheadlineLevel = "1" | "2";

export interface SubheadlineProps extends Omit<TypographyProps, "level"> {
  level?: SubheadlineLevel;
}

const Subheadline: ForwardRefRenderFunction<HTMLElement, SubheadlineProps> = (
  {
    level = "1",
    className = "",
    Component = "h6",
    ...restProps
  }: SubheadlineProps,
  ref,
) => (
  <Typography
    {...restProps}
    ref={ref}
    className={cn("Subheadline", `Subheadline__wrapper--${level}`, className)}
    Component={Component}
  />
);

export default forwardRef(Subheadline);
