import { type FC, type AllHTMLAttributes } from "react";

import { RouterProvider as P } from "@tanstack/react-router";

import { router } from "@/shared/lib/router";

interface RouterProviderProps extends AllHTMLAttributes<HTMLElement> {}

export const RouterProvider: FC<RouterProviderProps> = () => {
  return <P router={router} />;
};

export default RouterProvider;
