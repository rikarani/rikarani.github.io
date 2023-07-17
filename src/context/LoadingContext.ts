import { createContext, SetStateAction, Dispatch } from "react";

interface LoadingContextInterface {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextInterface>({
  loading: true,
  setLoading: () => {},
});
