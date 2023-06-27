import React, { useState } from "react";
import { LoadingContext } from "./context/LoadingContext";
// import { useTransition, animated } from "@react-spring/web";

// import Loading from "./components/Loading";
import Lockscreen from "./components/Lockscreen";
// import Home from "./components/Home";

function App(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  // const transition = useTransition(loading, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0, delay: 500 },
  // });

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {/* {transition(
        (style, item) =>
          item && (
            <animated.div style={style}>
              <Loading />
            </animated.div>
          )
      )}
      <div className="flex justify-center py-4">
        <button onClick={() => setLoading((prev) => !prev)} className="rounded-3xl bg-cyan-400 px-4 py-2 text-lg hover:bg-cyan-600 hover:text-gray-100">
          Mount
        </button>
      </div> */}
      <Lockscreen />
    </LoadingContext.Provider>
  );
}

export default App;
