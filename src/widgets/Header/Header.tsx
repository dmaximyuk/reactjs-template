import "./Header.sass";

import { type AllHTMLAttributes, type FC } from "react";

import { Title, Text } from "@/shared/uikit";

interface HeaderProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {}

const Header: FC<HeaderProps> = () => {
  return (
    <nav className="Header">
      <Title>Header</Title>
      <ul className="Header__links">
        <li>
          <Text>Link</Text>
        </li>
        <li>
          <Text>Link</Text>
        </li>
        <li>
          <Text>Link</Text>
        </li>
        <li>
          <Text>Link</Text>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
