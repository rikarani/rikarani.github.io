import { createContext, SetStateAction, Dispatch } from "react";

interface LoadingContext {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContext>({
  loading: true,
  setLoading: () => void {},
});
