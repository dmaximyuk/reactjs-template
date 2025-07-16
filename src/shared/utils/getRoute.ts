import { pages } from "@/routes";

import { RouteID } from "src/shared/models";
import { type RouteObject } from "react-router-dom";

export const getRoute = (
  rId: RouteID,
  routes?: RouteObject[],
): RouteObject | undefined => {
  for (const route of routes || pages) {
    if (route.children) {
      return getRoute(rId, route.children);
    } else {
      if (route.id === rId) {
        return route;
      }
    }
  }
};
