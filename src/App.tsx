import React, { useState } from "react";
import { LoaderContext } from "./context/context";
import { useTransition, animated } from "@react-spring/web";
import Loader from "./components/Loader";
// import Locker from "./components/Locker";
// import Home from "./components/Home";

function App(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(true);

  const transition = useTransition(open, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <LoaderContext.Provider value={{ open, setOpen }}>
        <div className="flex justify-center py-4">
          <button onClick={() => setOpen((prev) => !prev)} className="rounded-3xl bg-cyan-400 px-4 py-2 text-lg hover:bg-cyan-600 hover:text-gray-100">
            {open ? "Un-Mount" : "Mount"}
          </button>
        </div>
        {transition(
          (style, item) =>
            item && (
              <animated.div style={style}>
                <Loader />
              </animated.div>
            )
        )}
      </LoaderContext.Provider>
    </>
  );
}

export default App;
