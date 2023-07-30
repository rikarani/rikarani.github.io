import { useState } from "react";
import { SidebarContext } from "../context";
import { Hamburger } from "./partials/Logo";

import Sidebar from "./Sidebar";
import Menu from "./Menu";

function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <Sidebar />

      <div className="bg-slate-900">
        <nav className="flex h-16 items-center justify-end px-6 sm:px-8">
          <div onClick={() => setIsOpen(true)}>
            <Hamburger className="h-6 w-6 stroke-slate-200 stroke-2 hover:cursor-pointer md:hidden" />
          </div>

          <div className="hidden gap-6 md:flex md:justify-end">
            <Menu />
          </div>
        </nav>
      </div>
    </SidebarContext.Provider>
  );
}

export default Navbar;
