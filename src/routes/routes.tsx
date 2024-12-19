import { App, Home } from "@/core";
import { removeUnnecessary } from "@/utils";

import { createBrowserRouter, type RouteObject } from "react-router-dom";

import { RouteID } from "@/models";

const basename = "/";
const pages: RouteObject[] = [
  {
    id: RouteID.App,
    path: basename,
    element: <App />,
    children: [
      {
        id: RouteID.Home,
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const routes = removeUnnecessary(pages);
const router = createBrowserRouter(routes, { basename });

export { routes, router, pages };
