import { useTime } from "../../../hooks/useTime";
import { useDate } from "../../../hooks/useDate";
import { useMediaQuery } from "usehooks-ts";

function addZero(time: number): string {
  return time <= 9 ? `0${time}` : `${time}`;
}

function Waktu(): React.JSX.Element {
  const sm: boolean = useMediaQuery("(min-width: 640px)");

  const { jam, menit } = useTime();
  const { hari, tanggal, bulan, tahun } = useDate();

  return (
    <>
      <div className="text-5xl font-medium sm:flex sm:gap-2.5 sm:font-normal sm:text-gray-200">
        <p className="sm:text-7xl">{addZero(jam)}</p>
        {sm ? <p className="-mt-2 text-7xl">:</p> : ""}
        <p className="sm:text-7xl">{addZero(menit)}</p>
      </div>
      <p className="text-lg font-medium sm:font-normal sm:text-gray-200">
        {hari} {tanggal} {bulan} {tahun}
      </p>
    </>
  );
}

export default Waktu;
