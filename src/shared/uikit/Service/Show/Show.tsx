import { type FC, type ReactNode } from "react";

interface ShowProps {
  when: boolean;
  fallback?: ReactNode;
  children: ReactNode;
}

const Show: FC<ShowProps> = (props) => {
  if (props.when) {
    return props.children;
  }

  return props.fallback || null;
};

export default Show;
