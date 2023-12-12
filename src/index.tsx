import "./styles/main.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TranslationProvider } from "i18nano";
import { RouterProvider } from "react-router-dom";

import { router } from "routes";

import { ru } from "translation";

const translations = {
  ru: async () => ru,
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <TranslationProvider translations={translations} language="ru">
      <RouterProvider router={router} />
    </TranslationProvider>
  </StrictMode>,
);
