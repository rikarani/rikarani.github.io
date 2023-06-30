import { useState, useEffect } from "react";

export function useDate() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formatter = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedDate = formatter.format(date);
  const [hari, tanggal, bulan, tahun] = formattedDate.split(" ");

  return { hari, tanggal, bulan, tahun };
}
