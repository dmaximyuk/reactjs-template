import "./Flex.sass";

import { type AllHTMLAttributes, type ForwardedRef, forwardRef } from "react";
import cn from "clsx";

type FlexPlacement = "center" | "space-between" | "start" | "end";
type FlexDirection = "row" | "column";
type FlexUnits = "px" | "em" | "rem";

export interface FlexProps extends AllHTMLAttributes<HTMLElement> {
  /* default: "normal" */
  gap?: number | string;
  /* default: "px" */
  unit?: FlexUnits;
  /* default: "false" */
  reverse?: boolean;

  direction?: FlexDirection;
  horizontal: FlexPlacement;
  vertical: FlexPlacement;
}

const Flex = forwardRef(
  (
    {
      reverse = false,
      unit = "px",
      gap,
      className,
      direction = "row",
      horizontal = "start",
      vertical = "start",
      style = {},
      ...props
    }: FlexProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const getDirection = () => {
      let str = direction;

      if (str.length >= 1 && reverse) {
        str += "-reverse";
      }

      return str;
    };

    const getPlacement = (placement: FlexPlacement) => {
      let str = "";

      if (placement === "start" || placement === "end") {
        str += "flex-";
      }

      str += placement;

      return str;
    };

    const getSize = (num: number | string | undefined) => {
      switch (typeof num) {
        case "string":
          return num;

        case "number":
          return `${num}${unit}`;

        default:
          return "normal";
      }
    };

    return (
      <div
        ref={ref}
        className={cn("Flex", className)}
        style={
          {
            "--direction": getDirection(),
            "--justifyContent": getPlacement(horizontal),
            "--alignItems": getPlacement(vertical),
            "--gap": getSize(gap),
            ...style,
          } as Record<string, unknown>
        }
        {...props}
      />
    );
  },
);

export default Flex;
