import { type ReactNode } from "react";

interface ForProps<T> {
  each: Array<T>;
  children: (element: T, index: number) => ReactNode;
}

const For = <T,>(props: ForProps<T>): ReactNode[] => {
  const { each, children } = props;

  const result = new Array(each.length);

  for (let i = 0; i < each.length; i++) {
    result[i] = children(each[i], i);
  }

  return result;
};

export default For;
