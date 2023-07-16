import { useTime } from "../../../hooks/useTime";
import { useDate } from "../../../hooks/useDate";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
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
      <AnimationOnScroll animateIn="animate__fadeInDown" delay={100} duration={0.7} offset={0} className="text-5xl font-light text-gray-200 sm:-ml-1 sm:flex sm:gap-2.5">
        <p className="sm:text-7xl">{addZero(jam)}</p>
        {sm ? <p className="-mt-1.5 text-7xl">:</p> : ""}
        <p className="sm:text-7xl">{addZero(menit)}</p>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={350} duration={0.7} offset={0} className="text-lg font-normal text-gray-200">
        <p>
          {hari} {tanggal} {bulan} {tahun}
        </p>
      </AnimationOnScroll>
    </>
  );
}

export default Waktu;
