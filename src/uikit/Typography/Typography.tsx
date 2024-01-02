import "./Typography.sass";

import { type FC, createElement } from "react";
import classNames from "classnames";

import type { TypographyProps } from "./Typography.interface";

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  tagName = "p",
  isDescription = false,
  isBold = false,
  isUpperCase = false,
  fontSize,
  isTransparent = false,
}) => {
  return createElement(
    tagName,
    {
      className: classNames({
        Typography: true,
        [`Typography--${tagName}`]: true,
        "Typography--description": isDescription,
        "Typography--bold": isBold,
        "Typography--upper-case": isUpperCase,
        "Typography--transparent": isTransparent || isDescription,
        [`${className}`]: !!className,
      }),
      style: { fontSize },
    },
    children,
  );
};
