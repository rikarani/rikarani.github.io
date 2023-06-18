import React, { createContext, SetStateAction } from "react";

interface LoaderContextInterface {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const LoaderContext = createContext<LoaderContextInterface>({
  open: true,
  setOpen: () => {},
});
