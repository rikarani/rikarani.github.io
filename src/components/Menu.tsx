import { useContext } from "react";
import { TabContext, SidebarContext } from "@/context";
import type { Tab } from "@/types";

import MenuButton from "./partials/MenuButton";

export default function Menu(): React.JSX.Element {
  const { setActiveTab } = useContext(TabContext);
  const { setIsOpen } = useContext(SidebarContext);
  const tabs: Tab[] = ["Profile", "Skill", "Project", "Website Ini?"];

  return (
    <>
      {tabs.map((tab) => {
        function handleClick() {
          setActiveTab(tab);
          setIsOpen(false);
        }

        return <MenuButton key={tab} type="button" onClick={handleClick} text={tab} />;
      })}
    </>
  );
}
