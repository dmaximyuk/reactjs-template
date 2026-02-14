import { createRootRoute, createRouter } from "@tanstack/react-router";

import { ErrorInterception } from "@/pages/errorInterception";
import { NotFound } from "@/pages/notFound";

import { RootLayout } from "@/app/layouts";

import * as routes from "./routes";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

export const routeTree = rootRoute.addChildren(Object.values(routes));

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
