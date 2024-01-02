import { type FC } from "react";
import cn from "classnames";

import type { RowProps } from "./Row.interface";

export const Row: FC<RowProps> = (props) => {
  const { padding } = props;

  return (
    <div
      className={cn({
        Placement__row: true,
        [`${props.className}`]: !!props.className,
      })}
      style={{ ...(padding && { gap: padding }), ...props.style }}
    >
      {props.children}
    </div>
  );
};
