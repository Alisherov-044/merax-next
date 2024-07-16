"use client";

import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./registry";

export function Providers({ children }) {
  const client = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </QueryClientProvider>
    </Provider>
  );
}
