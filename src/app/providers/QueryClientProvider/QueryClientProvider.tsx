import { type FC, type AllHTMLAttributes } from "react";

import { QueryClientProvider as P } from "@tanstack/react-query";

import { queryClient } from "@/shared/lib";

interface QueryClientProviderProps extends AllHTMLAttributes<HTMLElement> {}

const QueryClientProvider: FC<QueryClientProviderProps> = (props) => {
  return <P client={queryClient}>{props.children}</P>;
};

export default QueryClientProvider;
