import { createContext, Dispatch, SetStateAction } from "react";
import type { Tab } from "../types";

interface TabContext {
  activeTab: Tab;
  setActiveTab: Dispatch<SetStateAction<Tab>>;
}

export const TabContext = createContext<TabContext>({
  activeTab: "Profile",
  setActiveTab: () => void {},
});
