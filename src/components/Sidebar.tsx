import { useContext } from "react";
import { SidebarContext } from "@/context";
import { useTransition, animated, easings } from "@react-spring/web";
import { XMark } from "./partials/svg";

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
      {isOpen && <div className="fixed left-0 top-0 h-full w-full bg-primary/50 md:hidden" onClick={() => setIsOpen(false)}></div>}

      {sidebarTransition((style, item) => {
        return (
          item && (
            <animated.aside style={style} className="fixed bottom-0 right-0 top-0 z-20 w-3/4 divide-y divide-border bg-primary px-6 py-4 md:hidden" onClick={() => setIsOpen(false)}>
              <div className="mb-4 flex items-center justify-end">
                <div className="hover:cursor-pointer" onClick={() => setIsOpen(false)}>
                  <XMark className="h-6 w-6 stroke-slate-200 stroke-2" />
                </div>
              </div>

              <div>
                <div className="mt-4 flex flex-col gap-4">
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
