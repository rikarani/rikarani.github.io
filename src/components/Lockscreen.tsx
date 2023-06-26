import React from "react";
import { useMediaQuery } from "usehooks-ts";

function Lockscreen(): React.JSX.Element {
  const desktop: boolean = useMediaQuery("(min-width: 429px)");

  return <h1 className="text-center text-4xl font-semibold text-cyan-500">Selamat! Anda Membuka Website Ini Menggunakan {desktop ? "Desktop" : "HP"}</h1>;
}

export default Lockscreen;
