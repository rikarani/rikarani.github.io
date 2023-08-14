import { useContext } from "react";
import { TabContext } from "../context/TabContext";
import { SidebarContext } from "../context/SidebarContext";
import type { Tab } from "../types";

import MenuButton from "./partials/MenuButton";

export default function Menu(): React.JSX.Element {
  const { setActiveTab } = useContext(TabContext);
  const { setIsOpen } = useContext(SidebarContext);
  const tabs: Tab[] = ["Profile", "Skill", "Project", "Website Ini?"];

  return (
    <>
      {tabs.map((tab) => {
        return (
          <MenuButton
            key={tab}
            type="button"
            onClick={() => {
              setActiveTab(tab);
              setIsOpen(false);
            }}
            text={tab}
          />
        );
      })}
    </>
  );
}
