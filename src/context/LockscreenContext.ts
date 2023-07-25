import { createContext, Dispatch, SetStateAction } from "react";

interface LockscreenContext {
  lock: boolean;
  setLock: Dispatch<SetStateAction<boolean>>;
}

export const LockscreenContext = createContext<LockscreenContext>({
  lock: true,
  setLock: () => {},
});
