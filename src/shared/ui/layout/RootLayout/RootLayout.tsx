import { AllHTMLAttributes, type FC } from "react";
import { Outlet } from "@tanstack/react-router";

import { Header } from "@/shared/ui";

interface RootLayoutProps extends AllHTMLAttributes<HTMLElement> {}

const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div className={"root-layout"}>
      <Header />
      <main className={"root-layout__main"}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
