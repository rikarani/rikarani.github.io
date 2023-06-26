import React from "react";
import { useMediaQuery } from "react-responsive";

function Locker(): React.JSX.Element {
  const sm: boolean = useMediaQuery({ minWidth: 640 });

  return <h1 className="text-center text-4xl font-semibold text-cyan-500">Selamat! Anda Membuka Website Ini Menggunakan {sm ? "Bukan HP" : "HP"}</h1>;
}

export default Locker;
