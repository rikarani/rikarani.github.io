import { AnimationOnScroll } from "react-animation-on-scroll";
import { useContext } from "react";
import { LockscreenContext } from "../context/LockscreenContext";

import Navbar from "./partials/Home/Navbar";

function Main(): React.JSX.Element {
  const { setLock } = useContext(LockscreenContext);

  return (
    <>
      <Navbar />
    </>
  );
}

export default Main;
