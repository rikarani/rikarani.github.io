import React, { createContext, SetStateAction } from "react";

interface LoadingContextInterface {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextInterface>({
  loading: true,
  setLoading: () => {},
});
