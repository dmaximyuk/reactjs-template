import { type ReactNode } from "react";

interface ForProps<T> {
  each: Array<T>;
  children: (value: T, index?: number, array?: Array<T>) => ReactNode;
}

const For = <T,>(props: ForProps<T>): ReactNode[] => {
  if (typeof props.each !== "object" || props.each.length < 1) {
    return [];
  }

  const result = new Array<ReactNode>(props.each.length);

  for (let i = 0; i < props.each.length; i++) {
    const children = props.children(props.each[i], i, props.each);

    if (!children) {
      continue;
    }

    result[i] = children;
  }

  return result.filter((v) => Boolean(v));
};

export default For;
