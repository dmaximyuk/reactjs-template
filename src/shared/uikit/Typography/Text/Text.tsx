import "./Text.sass";

import { forwardRef, ForwardRefRenderFunction } from "react";
import cn from "clsx";

import { Typography, TypographyProps } from "@/shared/uikit";

export interface TextProps extends Omit<TypographyProps, "plain"> {}

const Text: ForwardRefRenderFunction<HTMLElement, TextProps> = (props, ref) => (
  <Typography
    ref={ref}
    {...props}
    weight={props.weight}
    className={cn("Text", props.className)}
  />
);

export default forwardRef(Text);
