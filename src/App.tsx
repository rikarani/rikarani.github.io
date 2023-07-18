import { useState } from "react";
import { LoadingContext } from "./context/LoadingContext";
import { LockscreenContext } from "./context/LockscreenContext";
import { useTransition, animated, easings } from "@react-spring/web";

import Lockscreen from "./components/Lockscreen";
import Main from "./components/Main";

function App(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [lock, setLock] = useState<boolean>(true);

  const lockscreenTransition = useTransition(lock, {
    from: { opacity: 0 },
    enter: { opacity: 1, position: "fixed", inset: 0, delay: 300, duration: 700 },
    leave: { opacity: 0, delay: 200, duration: 1000 },
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  const homeTransition = useTransition(lock, {
    from: { opacity: 0 },
    enter: { opacity: 1, delay: 400, duration: 700 },
    leave: { opacity: 0 },
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
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
        {homeTransition((style, item) => {
          return (
            !item && (
              <animated.div style={style}>
                <Main />
              </animated.div>
            )
          );
        })}
      </LockscreenContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
