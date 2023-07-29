import { useContext } from "react";
import { TabContext } from "../context/TabContext";
import { SidebarContext } from "../context/SidebarContext";
import type { Tab } from "../types";

export default function Menu(): React.JSX.Element {
  const { setActiveTab } = useContext(TabContext);
  const { setIsOpen } = useContext(SidebarContext);
  const tabs: Tab[] = ["Profile", "Skill", "Project", "Website Ini?"];

  return (
    <>
      {tabs.map((e) => {
        return (
          <button
            key={e}
            type="button"
            onClick={() => {
              setActiveTab(e);
              setIsOpen(false);
            }}
            className={`relative block w-full rounded-lg text-start text-lg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 sm:max-w-max`}
          >
            {e}
          </button>
        );
      })}
    </>
  );
}
