import { type AllHTMLAttributes, type FC } from "react";

import { i18n } from "@/shared/lib";
import { Section, Seo } from "@/shared/ui";

interface HomeProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {}

const pageKey = "home";

const Home: FC<HomeProps> = () => {
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

export default Home;
