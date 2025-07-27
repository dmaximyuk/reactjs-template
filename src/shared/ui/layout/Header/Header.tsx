import "./Header.sass";

import { type AllHTMLAttributes, type FC } from "react";

import { Link } from "@tanstack/react-router";

import { navLinks } from "@/shared/config";

interface HeaderProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {}

const Header: FC<HeaderProps> = () => {
  return (
    <nav className="Header">
      <Link to={"/"} replace={true}>
        <h2>Its Header</h2>
      </Link>

      <ul className="Header__links">
        {navLinks.map((v) => (
          <li key={v.to + v.label}>
            <Link to={v.to}>
              <p>{v.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
