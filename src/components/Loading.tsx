import React, { useEffect, useContext, useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { useProgressBar } from "../hooks/useProgressBar";
import { LoadingContext } from "../context/context";
import { nightSky } from "../config/nightSky";

function Loading(): React.JSX.Element {
  const { open, setOpen } = useContext(LoadingContext);
  const progress = useProgressBar(open);

  const particleInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setOpen(false);
    }
  }, [progress]);

  return (
    <>
      <Particles init={particleInit} options={nightSky} />
      <div className="fixed bottom-0 left-0 right-0 top-0 grid place-items-center px-4 font-tulisan">
        <div>
          <h1 className="text-4xl font-bold text-gray-50">Among the expanse of universe light</h1>
          <h2 className="text-2xl text-gray-50">I found my soul trapped in endless loneliness</h2>
          <p className="mt-1.5 text-gray-50">{progress >= 100 ? 100 : progress}%</p>
          <div id="progress" className="h-1 overflow-hidden rounded-xl bg-white">
            <div id="bar" style={{ width: `${progress}%` }} className="h-1 w-0 bg-red-400 transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
