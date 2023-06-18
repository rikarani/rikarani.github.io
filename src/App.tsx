import React, { useState } from "react";
import { LoaderContext } from "./context/context";
import Loader from "./components/Loader";
import Locker from "./components/Locker";
import Home from "./components/Home";

function App(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <LoaderContext.Provider value={{ open, setOpen }}>
        <Loader />
        <Locker />
        <Home />
      </LoaderContext.Provider>
    </>
  );
}

export default App;
