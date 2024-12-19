import "./Header.sass";

import { type AllHTMLAttributes, type FC } from "react";

import { Title, Text, Flex } from "@/uikit";

interface HeaderProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {}

const Header: FC<HeaderProps> = () => {
  return (
    <nav className="Header">
      <Flex
        className="Header__container"
        horizontal="space-between"
        vertical="center"
      >
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
      </Flex>
    </nav>
  );
};

export default Header;
