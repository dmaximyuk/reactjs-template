import "./Section.sass";

import { type AllHTMLAttributes, type FC, type JSX } from "react";
import cn from "clsx";

type SectionTag = keyof Pick<JSX.IntrinsicElements, "section" | "footer" | "div">;

interface SectionProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {
  pageKey: string;
  wrapperClassName?: string;
  tag?: SectionTag;
}

const Section: FC<SectionProps> = (props) => {
  const Tag: SectionTag = props.tag ?? "section";

  return (
    <>
      <Tag className={cn("section", props.className)} data-page={props.pageKey}>
        <div className={cn("section__wrapper", props.wrapperClassName)}>
          {props.children}
        </div>
      </Tag>
    </>
  );
};

export default Section;
