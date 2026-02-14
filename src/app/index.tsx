import "./styles/main.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, QueryClientProvider } from "@/app/providers";
import { i18nReady } from "@/shared/lib";

const rootElement = document.getElementById("root")!;

i18nReady.finally(() => {
  if (!rootElement.innerHTML) {
    const root = createRoot(rootElement);

    root.render(
      <StrictMode>
        <QueryClientProvider>
          <RouterProvider />
        </QueryClientProvider>
      </StrictMode>,
    );
  }
});
