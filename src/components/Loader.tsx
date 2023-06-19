import React, { useEffect, useRef, useContext } from "react";
import { LoaderContext } from "../context/context";

function Loader(): React.JSX.Element {
  const { open, setOpen } = useContext(LoaderContext);
  const bgRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let intervalId: number | undefined = undefined;
    let width = 0;

    const startLoading = () => {
      intervalId = setInterval(() => {
        if (width >= 100) {
          setOpen(false);
          clearInterval(intervalId);
        } else {
          width += Math.floor(Math.random() * 5 + 1);
          updateProgress();
        }
      }, 350);
    };

    const updateProgress = () => {
      if (barRef.current && textRef.current) {
        barRef.current.style.width = `${width}%`;
        textRef.current.innerText = `${width >= 100 ? 100 : width}%`;
      }
    };

    if (width === 0 && open) {
      startLoading();
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [open]);

  return (
    <div ref={bgRef} className="fixed bottom-0 left-0 right-0 top-0 grid place-items-center bg-slate-950 px-4">
      <div>
        <h1 className="text-justify text-6xl font-semibold text-gray-50">Sit Tight</h1>
        <h2 className="text-4xl text-gray-50">While I'm Prepare Everything For You</h2>
        <p ref={textRef} className="mt-1.5 text-gray-50">
          0%
        </p>
        <div id="progress" className="h-1 overflow-hidden rounded-xl bg-white">
          <div ref={barRef} id="bar" className="h-1 w-0 bg-red-400 transition-all duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
