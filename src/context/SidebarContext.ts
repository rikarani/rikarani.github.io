import { createContext, Dispatch, SetStateAction } from "react";

interface SidebarContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContext>({
  isOpen: false,
  setIsOpen: () => void {},
});
