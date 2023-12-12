import "./Home.sass";

import { type FC } from "react";
import { useTranslation } from "i18nano";

import type { HomeProps } from "./Home.interface";

export const Home: FC<HomeProps> = () => {
  const t = useTranslation();

  return <div className="Home">{t("app.name")}</div>;
};
