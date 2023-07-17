import { AnimationOnScroll } from "react-animation-on-scroll";
import { useContext } from "react";
import { LockscreenContext } from "../context/LockscreenContext";

function Home(): React.JSX.Element {
  const { setLock } = useContext(LockscreenContext);

  return (
    <>
      <div className="flex justify-center text-5xl font-semibold text-cyan-400">
        {"Hello World".split("").map((val, index) => {
          return (
            <AnimationOnScroll key={index} animateIn="animate__fadeInUp" delay={index * 150} duration={0.7} offset={0}>
              {val}
            </AnimationOnScroll>
          );
        })}
      </div>
      <AnimationOnScroll animateIn="animate__tada" delay={500} duration={0.7} offset={0}>
        <button onClick={() => setLock(true)} className="mx-auto mt-72 block rounded-full bg-teal-500 px-4 py-2 text-2xl font-semibold text-white hover:bg-teal-700">
          Mount
        </button>
      </AnimationOnScroll>
    </>
  );
}

export default Home;
