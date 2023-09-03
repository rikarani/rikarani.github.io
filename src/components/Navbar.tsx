import { useState } from "react";
import { SidebarContext } from "@/context";
import { Hamburger } from "./partials/svg";

import Sidebar from "./Sidebar";
import Menu from "./Menu";

function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <Sidebar />

      <div className="sticky top-0 z-10 bg-primary/40 px-6 py-4 backdrop-blur-xl">
        <nav className="flex items-center justify-end xl:mx-auto xl:max-w-6xl">
          <div className="md:hidden" onClick={() => setIsOpen(true)}>
            <Hamburger className="h-6 w-6 stroke-slate-200 stroke-2 hover:cursor-pointer" />
          </div>

          <div className="hidden gap-6 md:flex">
            <Menu />
          </div>
        </nav>
      </div>
    </SidebarContext.Provider>
  );
}

export default Navbar;
