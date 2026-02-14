import { type FC } from "react";
import { type NotFoundRouteProps } from "@tanstack/react-router";

import { i18n } from "@/shared/lib";

import { Section, Seo } from "@/shared/ui";

interface NotFoundProps extends NotFoundRouteProps {}

const pageKey = "notFound";

const NotFound: FC<NotFoundProps> = () => {
  const { t } = i18n;

  const title = t(`${pageKey}.title.header`);
  const text = t(`${pageKey}.title.subheader`);

  return (
    <>
      <Seo pageKey={pageKey} />

      <Section pageKey={pageKey}>
        <h1>{title}</h1>
        <p>{text}</p>
      </Section>
    </>
  );
};

export default NotFound;
