import React from "react";
import { useClock } from "../hooks/useClock";

function addZero(time: number): string {
  return time <= 9 ? `0${time}` : `${time}`;
}

function Lockscreen(): React.JSX.Element {
  const { jam, menit, detik } = useClock();

  return (
    <div className="relative h-screen w-full">
      <div className="relative h-full w-full bg-hp bg-cover bg-top before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/40 before:content-[''] sm:bg-desktop sm:bg-center"></div>
      <div className="absolute left-0 top-0 mt-4 px-4">
        <p className="text-4xl sm:text-gray-200">
          {addZero(jam)} : {addZero(menit)} : {addZero(detik)}
        </p>
        <p className="sm:text-gray-200">Selasa, 27 Juni 2023</p>
        <p className="mt-4 text-lg font-semibold sm:text-gray-200">consectetur adipisicing elit. Ut, provident! Inventore expedita, architecto alias veritatis sunt est at? Similique, illo?</p>
      </div>
    </div>
  );
}

export default Lockscreen;
