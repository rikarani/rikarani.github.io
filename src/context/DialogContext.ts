import { createContext, Dispatch, SetStateAction } from "react";

interface DialogContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const DialogContext = createContext<DialogContext>({
  isOpen: false,
  setIsOpen: () => void {},
});
