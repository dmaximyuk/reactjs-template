import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { Home } from "@/pages/home";
import { NotFound } from "@/pages/notFound";
import { ErrorInterception } from "@/pages/errorInterception";

import { RootLayout } from "@/shared/ui";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: ErrorInterception,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
