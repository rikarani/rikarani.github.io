import { useState } from "react";
import { LoadingContext } from "@/context";
import { useTransition, animated, easings } from "@react-spring/web";

import Loading from "@/views/Loading";
import Main from "@/views/Main";

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadingTransition = useTransition(isLoading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, delay: 300 },
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  const mainTransition = useTransition(isLoading, {
    from: { opacity: 0 },
    enter: { opacity: 1, delay: 500, duration: 700, height: "100%", display: "flex", flexDirection: "column" },
    leave: { opacity: 0 },
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {loadingTransition((style, item) => {
        return (
          item && (
            <animated.div style={style}>
              <Loading />
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
    </LoadingContext.Provider>
  );
}

export default App;
