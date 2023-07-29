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

      <nav className="flex h-16 items-center justify-end bg-gradient-to-r from-cyan-300 to-blue-400 px-6">
        <div onClick={() => setIsOpen(true)}>
          <Hamburger className="h-6 w-6 hover:cursor-pointer sm:hidden" />
        </div>

        <div className="hidden w-full gap-6 sm:flex sm:max-w-2xl sm:justify-end">
          <Menu />
        </div>
      </nav>
    </SidebarContext.Provider>
  );
}

export default Navbar;
