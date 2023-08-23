import { createContext, SetStateAction, Dispatch } from "react";

interface LoadingContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContext>({
  isLoading: true,
  setIsLoading: () => void {},
});
