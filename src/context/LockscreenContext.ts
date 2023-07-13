import { createContext, Dispatch, SetStateAction } from "react";

interface LockscreenContextInterface {
  lock: boolean;
  setLock: Dispatch<SetStateAction<boolean>>;
}

export const LockscreenContext = createContext<LockscreenContextInterface>({
  lock: true,
  setLock: () => {},
});
