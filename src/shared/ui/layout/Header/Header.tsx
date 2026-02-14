import "./Header.sass";

import { type AllHTMLAttributes, type FC } from "react";

import { i18n } from "@/shared/lib";
import { Link } from "@tanstack/react-router";

import { NAV_LINKS } from "@/shared/config";

interface HeaderProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {}

const Header: FC<HeaderProps> = () => {
  const { t } = i18n;

  return (
    <nav className="header">
      <Link to={"/"} replace={true}>
        <h2>Its Header</h2>
      </Link>

      <ul className="header__links">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>
              <p>{t(link.labelKey)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
