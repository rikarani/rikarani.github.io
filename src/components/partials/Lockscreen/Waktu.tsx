import React from "react";

import { useTime } from "../../../hooks/useTime";
import { useDate } from "../../../hooks/useDate";

function addZero(time: number): string {
  return time <= 9 ? `0${time}` : `${time}`;
}

function Waktu(): React.JSX.Element {
  const { jam, menit, detik } = useTime();
  const { hari, tanggal, bulan, tahun } = useDate();

  return (
    <>
      <p className="text-4xl sm:text-gray-200">
        {addZero(jam)} : {addZero(menit)} : {addZero(detik)}
      </p>
      <p className="sm:text-gray-200">
        {hari} {tanggal} {bulan} {tahun}
      </p>
    </>
  );
}

export default Waktu;
