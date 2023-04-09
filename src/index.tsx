import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "routes";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
const logo = `
     DDD     M       M
    D   D    M M   M M
    D   D    M  M M  M
   DDDDDDD   M  M M  M
  D       D  M   M   M
`;

root.render(
  <React.StrictMode>
    <RouterProvider
      router={(() => {
        console.log(logo);
        return createBrowserRouter(routes);
      })()}
    />
  </React.StrictMode>
);
