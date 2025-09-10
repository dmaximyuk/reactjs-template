import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { ErrorInterception } from "@/pages/errorInterception";
import { NotFound } from "@/pages/notFound";
import { Home } from "@/pages/home";

import { RootLayout } from "@/shared/ui";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const routeConfig = [
  { path: "/", component: Home },
  // ...
];

const childRoutes = routeConfig.map((cfg) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: cfg.path,
    component: cfg.component,
  }),
);

const routeTree = rootRoute.addChildren(childRoutes);

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
