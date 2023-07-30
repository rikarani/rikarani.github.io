import { useContext } from "react";
import { SidebarContext } from "../context";
import { useTransition, animated, easings } from "@react-spring/web";
import { XMark } from "./partials/Logo";

import Menu from "./Menu";

export default function Sidebar(): React.JSX.Element {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const sidebarTransition = useTransition(isOpen, {
    from: { right: "-75%" },
    enter: { right: "0%" },
    leave: { right: "-75%" },
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <>
      {isOpen && <div className="fixed left-0 top-0 h-full w-full bg-black/50 md:hidden"></div>}

      {sidebarTransition((style, item) => {
        return (
          item && (
            <animated.aside style={style} className="fixed bottom-0 right-0 top-0 z-10 w-3/4 divide-y divide-gray-400 bg-white md:hidden">
              <div className="flex h-16 items-center justify-end px-6">
                <div className="hover:cursor-pointer" onClick={() => setIsOpen(false)}>
                  <XMark className="h-6 w-6" />
                </div>
              </div>

              <div>
                <div className="mt-4 flex flex-col gap-4 px-6">
                  <Menu />
                </div>
              </div>
            </animated.aside>
          )
        );
      })}
    </>
  );
}
