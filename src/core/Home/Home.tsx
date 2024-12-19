import "./Home.sass";

import { type AllHTMLAttributes, type FC } from "react";
import { useTranslation } from "react-i18next";

import { LargeTitle } from "@/uikit";

export interface HomeProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {}

const Home: FC<HomeProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <div className="Home__wrapper">
        <LargeTitle>{t("app.name")}</LargeTitle>
      </div>
    </div>
  );
};

export default Home;
