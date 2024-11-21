import "./Flex.sass";

import { type AllHTMLAttributes, type ForwardedRef, forwardRef } from "react";
import classNames from "classnames";

type FlexPlacement = "center" | "start" | "end";
type FlexDirection = "row" | "column";
type FlexUnits = "px" | "em" | "rem";

export interface FlexProps extends AllHTMLAttributes<HTMLElement> {
  /* default: "15" */
  padding?: number | string;
  /* default: "normal" */
  gap?: number | string;
  /* default: "px" */
  unit?: FlexUnits;
  /* default: "false" */
  reverse?: boolean;

  direction: FlexDirection;
  horizontal: FlexPlacement;
  vertical: FlexPlacement;
}

export const Flex = forwardRef(
  (
    {
      reverse = false,
      padding = 15,
      unit = "px",
      gap,
      className,
      horizontal = "start",
      vertical,
      direction = "row",
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

    const getJustifyContent = () => {
      let str = "";

      if (horizontal === "start" || horizontal === "end") {
        str += "flex-";
      }

      str += horizontal;

      return str;
    };

    const getAlignItems = () => {
      let str = "";

      if (vertical === "start" || vertical === "end") {
        str += "flex-";
      }

      str += vertical;

      return str;
    };

    const getPadding = () => {
      switch (typeof padding) {
        case "string":
          return padding;

        case "number":
          return `${padding}${unit}`;

        default:
          return "normal";
      }
    };

    const getGap = () => {
      switch (typeof gap) {
        case "string":
          return gap;

        case "number":
          return `${gap}${unit}`;

        default:
          return "normal";
      }
    };

    return (
      <div
        ref={ref}
        className={classNames("Flex", className)}
        style={{
          "--direction": getDirection(),
          "--justifyContent": getJustifyContent(),
          "--alignItems": getAlignItems(),
          "--padding": getPadding(),
          "--gap": getGap(),
          ...style,
        }}
        {...props}
      />
    );
  },
);
