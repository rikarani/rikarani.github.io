import { useDate, useTime } from "../../hooks";
import { AnimationOnScroll } from "react-animation-on-scroll";

function addZero(time: number): string {
  return time <= 9 ? `0${time}` : `${time}`;
}

function Waktu(): React.JSX.Element {
  const { jam, menit } = useTime();
  const { hari, tanggal, bulan, tahun } = useDate();

  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeInDown" delay={100} duration={0.7} offset={0}>
        <p className="text-5xl font-light text-gray-200 sm:text-7xl">
          {addZero(jam)} : {addZero(menit)}
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={350} duration={0.7} offset={0}>
        <p className="text-lg font-normal tracking-wider text-gray-200 sm:text-2xl sm:tracking-widest">
          {hari} {tanggal} {bulan} {tahun}
        </p>
      </AnimationOnScroll>
    </>
  );
}

export default Waktu;
