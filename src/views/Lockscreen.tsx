import { useState, useContext, useEffect } from "react";
import { useFetch, useImage } from "../hooks";
import { LockscreenContext } from "../context";
import { AnimationOnScroll } from "react-animation-on-scroll";
import type { Quote } from "../types";

import Waktu from "../components/partials/Waktu";
import Sosmed from "../components/partials/Sosmed";

function Lockscreen(): React.JSX.Element {
  const [quotes]: Quote[] = useFetch("https://api.quotable.io/quotes/random?tags=famous-quotes&maxLength=70");
  const { setLock } = useContext(LockscreenContext);
  const [isImageReady, setIsImageReady] = useState<boolean>(false);

  const src = useImage("../../img/kanata.webp");

  useEffect(() => {
    if (src) {
      setIsImageReady(true);
    }
  }, [src]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="relative h-full w-full bg-hp bg-cover bg-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/[0.45] before:content-[''] sm:bg-desktop sm:bg-right"></div>;
      {isImageReady && quotes && (
        <div onClick={() => setLock(false)} className="absolute bottom-0 left-0 right-0 top-0 px-4 pt-6 sm:pt-8">
          <div className="sm:text-center">
            <Waktu />
          </div>

          <div className="mt-6">
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} duration={0.7} offset={0}>
              <p className="text-lg font-medium tracking-wider text-gray-200 sm:text-center sm:text-xl sm:tracking-widest">{quotes.content}</p>
            </AnimationOnScroll>

            <div className="mt-3 max-w-max space-y-4 sm:mx-auto sm:mt-4 sm:flex sm:justify-center sm:gap-10 sm:space-y-0">
              <Sosmed />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lockscreen;
