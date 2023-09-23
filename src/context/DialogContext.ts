import { createContext, SetStateAction, Dispatch } from "react";

type DialogContext = {
  dialogOpen: boolean;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
};

export const DialogContext = createContext<DialogContext>({
  dialogOpen: false,
  setDialogOpen: () => void {},
});
