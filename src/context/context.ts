import React, { createContext, SetStateAction } from "react";

interface LoadingContextInterface {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextInterface>({
  open: true,
  setOpen: () => {},
});
