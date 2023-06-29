import React, { useState } from "react";
import { useClock } from "../hooks/useClock";
import LazyImage from "./partials/LazyImage";

function addZero(time: number): string {
  return time <= 9 ? `0${time}` : `${time}`;
}

function Lockscreen(): React.JSX.Element {
  const [ready, setReady] = useState<boolean>(false);
  const { jam, menit, detik } = useClock();

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* background image */}
      <LazyImage setReady={setReady} />
      {/* background image */}

      {ready && (
        <div className="absolute left-0 top-0 mt-4 px-4">
          <p className="text-4xl sm:text-gray-200">
            {addZero(jam)} : {addZero(menit)} : {addZero(detik)}
          </p>
          <p className="sm:text-gray-200">Selasa, 27 Juni 2023</p>
          <p className="mt-4 text-lg font-semibold sm:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam, doloremque iusto vitae quos deleniti architecto, expedita fugiat omnis corrupti autem eius culpa eligendi rem qui hic dolore reiciendis sequi accusamus
            ipsa commodi illo soluta aliquid a? Atque, aperiam vitae!
          </p>
        </div>
      )}
    </div>
  );
}

export default Lockscreen;
