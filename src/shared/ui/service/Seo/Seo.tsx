import { FC } from "react";

import { i18n } from "@/shared/i18n";

interface SeoProps {
  pageKey: string;
}

const Seo: FC<SeoProps> = (props) => {
  const { t } = i18n;

  const titlePrefix = (title: string) => `${title} / ${t("app.prefix")}`;

  const title = titlePrefix(t(`${props.pageKey}.seo.title`) || t(`app.title`));
  const description = t(`${props.pageKey}.seo.description`) || t(`app.title`);
  const lang = i18n.language;

  return (
    <>
      <html lang={lang || "en"} />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={lang === "ru" ? "ru_RU" : "en_US"} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default Seo;
