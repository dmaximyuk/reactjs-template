import "@/shared/styles/main.sass";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, QueryClientProvider } from "@/app/providers";

import "@/shared/lib/i18n";

const rootElement = document.getElementById("root")!;
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
