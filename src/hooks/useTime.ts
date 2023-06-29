import { useState, useEffect } from "react";

interface Time {
  jam: number;
  menit: number;
  detik: number;
}

export function useTime(): Time {
  const [time, setTime] = useState<Time>({
    jam: new Date().getHours(),
    menit: new Date().getMinutes(),
    detik: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalID = setInterval(() => {
      const jam = new Date().getHours();
      const menit = new Date().getMinutes();
      const detik = new Date().getSeconds();

      setTime({ jam, menit, detik });
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return time;
}
