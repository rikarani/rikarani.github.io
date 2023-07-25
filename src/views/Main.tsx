import { AnimationOnScroll } from "react-animation-on-scroll";
import { useContext } from "react";
import { LockscreenContext } from "../context/LockscreenContext";

function Home(): React.JSX.Element {
  const { setLock } = useContext(LockscreenContext);

  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <div className="flex justify-center text-4xl">
          {"Hello World".split("").map((val, index) => {
            return (
              <AnimationOnScroll key={index} animateIn="animate__fadeInUp" delay={index * 150} duration={0.7} offset={0}>
                {val}
              </AnimationOnScroll>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center">
          <button type="button" onClick={() => setLock(true)} className="rounded bg-cyan-500 px-4 py-2 text-2xl text-white hover:bg-cyan-700">
            Mount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
