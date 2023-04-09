import { FC } from "react";

import { classNames } from "functions";

import { PageProps } from "./";

import styles from "./Page.module.scss";

export const Page: FC<PageProps> = ({ className = "", children }) => {
  return (
    <div
      className={classNames({
        [styles.Page]: true,
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
};
