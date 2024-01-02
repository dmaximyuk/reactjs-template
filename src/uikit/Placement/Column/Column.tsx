import { type FC } from "react";
import cn from "classnames";

import type { RowProps } from "./Column.interface";

export const Column: FC<RowProps> = (props) => {
  const { padding } = props;

  return (
    <div
      className={cn({
        Placement__column: true,
        [`${props.className}`]: !!props.className,
      })}
      style={{ ...(padding && { gap: padding }), ...props.style }}
    >
      {props.children}
    </div>
  );
};
