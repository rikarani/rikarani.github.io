import React, { useEffect, useContext } from "react";
import { useProgressBar } from "../hooks/useProgressBar";
import { LoadingContext } from "../context/context";

function Loading(): React.JSX.Element {
  const { open, setOpen } = useContext(LoadingContext);
  const progress = useProgressBar(open);

  useEffect(() => {
    if (progress >= 100) {
      setOpen(false);
    }
  }, [progress]);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 grid place-items-center bg-slate-950 px-4 font-tulisan">
      <div>
        <h1 className="mb-1.5 text-justify text-6xl font-semibold text-gray-50">Sit Tight</h1>
        <h2 className="text-4xl text-gray-50">While I'm Prepare Everything For You</h2>
        <p className="mt-1.5 text-gray-50">{progress >= 100 ? 100 : progress}%</p>
        <div id="progress" className="h-1 overflow-hidden rounded-xl bg-white">
          <div id="bar" style={{ width: `${progress}%` }} className="h-1 w-0 bg-red-400 transition-all duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
