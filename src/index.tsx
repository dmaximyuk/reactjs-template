import "./styles/main.sass";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider as Store } from "react-redux";

import { store } from "@/store/store";

import { router } from "@/routes";

import "@/locale";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Store store={store}>
      <RouterProvider router={router} />
    </Store>
  </StrictMode>,
);
