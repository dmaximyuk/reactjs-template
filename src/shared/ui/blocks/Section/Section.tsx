import "./Section.sass";

import { type AllHTMLAttributes, type FC } from "react";
import cn from "clsx";

interface SectionProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {
  pageKey: string;
  wrapperClassName?: string;
  tag?: "section" | "footer" | "div";
}

const Section: FC<SectionProps> = (props) => {
  const Tag = props.tag || "section";

  return (
    <>
      <Tag className={cn("section", props.className)}>
        <div className={cn("section__wrapper", props.wrapperClassName)}>
          {props.children}
        </div>
      </Tag>
    </>
  );
};

export default Section;
