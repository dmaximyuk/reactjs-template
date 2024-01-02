import "./Home.sass";

import { type FC } from "react";
import { useTranslation } from "i18nano";

import { Typography, Placement, Container } from "uikit";

import type { HomeProps } from "./Home.interface";

export const Home: FC<HomeProps> = () => {
  const t = useTranslation();

  return (
    <Container.Outer className="Home">
      <Container.Inner>
        <Typography tagName="h1" isBold>
          {t("app.name")}
        </Typography>
        <Typography tagName="h1">{t("app.name")}</Typography>
        <Typography tagName="h2">{t("app.name")}</Typography>
        <Typography tagName="h3">{t("app.name")}</Typography>
        <Typography tagName="h4">{t("app.name")}</Typography>
        <Typography tagName="h5">{t("app.name")}</Typography>
        <Typography tagName="h6">{t("app.name")}</Typography>
        <Typography tagName="p">{t("app.name")}</Typography>
        <Placement.Column>
          <Typography tagName="span">{t("app.name")}</Typography>
          <Typography tagName="span" isBold>
            {t("app.name")}
          </Typography>
          <Typography tagName="span" isDescription>
            {t("app.name")}
          </Typography>
          <Typography tagName="span" isUpperCase>
            {t("app.name")}
          </Typography>
          <Typography tagName="span" isUpperCase isBold isTransparent>
            {t("app.name")}
          </Typography>
        </Placement.Column>

        <Placement.Row style={{ width: 100 }}>
          <Typography tagName="p">{t("app.name")}</Typography>
          <Typography tagName="p">{t("app.name")}</Typography>
          <Typography tagName="p">{t("app.name")}</Typography>
        </Placement.Row>
        <Placement.Column>
          <Typography tagName="p">{t("app.name")}</Typography>
          <Typography tagName="p">{t("app.name")}</Typography>
          <Typography tagName="p">{t("app.name")}</Typography>
        </Placement.Column>
      </Container.Inner>
    </Container.Outer>
  );
};
