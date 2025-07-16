import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Home } from "@/pages";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <TanStackRouterDevtools />
      <Outlet />
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const routeTree = rootRoute.addChildren([homeRoute]);
