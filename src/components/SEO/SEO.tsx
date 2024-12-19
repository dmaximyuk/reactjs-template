import { type FC } from "react";

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { THEME } from "@/vars";

interface SEOProps {}

const metaTags: Array<{ tag: string; content: string }> = [
  {
    tag: "description",
    content: "description",
  },
  {
    tag: "keywords",
    content: "keywords",
  },
  {
    tag: "author",
    content: "author",
  },
  {
    tag: "language",
    content: "locale",
  },
  {
    tag: "robots",
    content: "index, follow",
  },
  {
    tag: "og:title",
    content: "author",
  },
  {
    tag: "og:description",
    content: "description",
  },
  {
    tag: "og:image",
    content: "SITE_URL" + "og_image.jpg",
  },
  {
    tag: "og:url",
    content: "SITE_URL",
  },
  {
    tag: "og:type",
    content: "website",
  },
  {
    tag: "twitter:card",
    content: "summary_large_image",
  },
  {
    tag: "twitter:title",
    content: "author",
  },
  {
    tag: "twitter:description",
    content: "description",
  },
  {
    tag: "twitter:image",
    content: "SITE_URL" + "tw_image.jpg",
  },
];

const SEO: FC<SEOProps> = (props) => {
  const { i18n } = useTranslation();

  return (
    <Helmet>
      <html lang={i18n.language} data-theme={THEME} />
      <title>Your Title</title>

      {metaTags.map((m) => (
        <meta key={m.tag + m.content} name={m.tag} content={m.content} />
      ))}
    </Helmet>
  );
};

export default SEO;
