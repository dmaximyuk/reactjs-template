import { createRoute } from "@tanstack/react-router";

import { rootRoute } from ".";

import { Home } from "@/pages/home";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const theRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "the",
  component: Home,
});

export const bestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "best",
  component: Home,
});

export const reactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "react",
  component: Home,
});

export const templateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "template",
  component: Home,
});
