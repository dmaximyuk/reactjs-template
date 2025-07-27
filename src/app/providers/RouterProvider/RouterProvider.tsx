import { type FC, type AllHTMLAttributes } from "react";

import { RouterProvider as P } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { router } from "@/app/router";

interface RouterProviderProps extends AllHTMLAttributes<HTMLElement> {}

export const RouterProvider: FC<RouterProviderProps> = () => {
  return (
    <>
      <P router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
};

export default RouterProvider;
