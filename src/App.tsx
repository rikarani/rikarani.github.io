import { useState } from "react";
import { LockscreenContext } from "./context";
import { useTransition, animated, easings } from "@react-spring/web";

import Lockscreen from "./views/Lockscreen";
import Main from "./views/Main";

function App(): React.JSX.Element {
  const [lock, setLock] = useState<boolean>(true);

  const lockscreenTransition = useTransition(lock, {
    from: { opacity: 0 },
    enter: { opacity: 1, position: "fixed", inset: 0, delay: 300, duration: 700 },
    leave: { opacity: 0, delay: 200, duration: 1000 },
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  const mainTransition = useTransition(lock, {
    from: { opacity: 0 },
    enter: { opacity: 1, delay: 300, duration: 700, height: "100%", overflow: "hidden" },
    leave: { opacity: 0 },
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <LockscreenContext.Provider value={{ lock, setLock }}>
      {lockscreenTransition((style, item) => {
        return (
          item && (
            <animated.div style={style}>
              <Lockscreen />
            </animated.div>
          )
        );
      })}
      {mainTransition((style, item) => {
        return (
          !item && (
            <animated.div style={style}>
              <Main />
            </animated.div>
          )
        );
      })}
    </LockscreenContext.Provider>
  );
}

export default App;
