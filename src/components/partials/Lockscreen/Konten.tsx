import React from "react";
import { useTime } from "../../../hooks/useTime";
import { useDate } from "../../../hooks/useDate";

function addZero(time: number): string {
  return time <= 9 ? `0${time}` : `${time}`;
}

function Konten(): React.JSX.Element {
  const { jam, menit, detik } = useTime();
  const { hari, tanggal, bulan, tahun } = useDate();

  return (
    <div className="absolute left-0 top-0 mt-4 px-4">
      <p className="text-4xl sm:text-gray-200">
        {addZero(jam)} : {addZero(menit)} : {addZero(detik)}
      </p>
      <p className="sm:text-gray-200">
        {hari} {tanggal} {bulan} {tahun}
      </p>
      <p className="mt-4 text-lg font-semibold sm:text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam, doloremque iusto vitae quos deleniti architecto, expedita fugiat omnis corrupti autem eius culpa eligendi rem qui hic dolore reiciendis sequi accusamus
        ipsa commodi illo soluta aliquid a? Atque, aperiam vitae!
      </p>
    </div>
  );
}

export default Konten;
