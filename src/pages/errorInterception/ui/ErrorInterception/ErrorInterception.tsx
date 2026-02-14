import { type FC } from "react";
import { type ErrorComponentProps } from "@tanstack/react-router";

import { i18n } from "@/shared/lib";

import { Section, Seo } from "@/shared/ui";

interface ErrorInterceptionProps extends ErrorComponentProps {}

const pageKey = "errorBoundary";

const ErrorInterception: FC<ErrorInterceptionProps> = () => {
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

export default ErrorInterception;
