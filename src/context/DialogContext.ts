import { createContext, SetStateAction, Dispatch } from "react";

type DialogContext = {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
};

export const DialogContext = createContext<DialogContext>({
  isDialogOpen: false,
  setIsDialogOpen: () => void {},
});
