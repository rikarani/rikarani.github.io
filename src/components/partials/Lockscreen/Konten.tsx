import React from "react";
import Link from "../Link";
import Waktu from "./Waktu";
import { Facebook, Instagram, GitHub } from "../Logo";

function Konten(): React.JSX.Element {
  return (
    <div className="absolute left-0 top-0 mt-4 px-4">
      {/* Jam & Tanggal */}
      <Waktu />

      <div className="mt-4 text-lg font-semibold sm:text-gray-200">
        <p>Here a quickstart!</p>
      </div>

      {/* List Sosmed */}
      <div className="mt-1.5 max-w-max space-y-2.5">
        <Link to="https://github.com/rikarani">
          <GitHub />
        </Link>
        <Link to="https://facebook.com/rikaraniii/">
          <Facebook />
        </Link>
        <Link to="https://instagram.com/rikaraniii/">
          <Instagram />
        </Link>
      </div>
    </div>
  );
}

export default Konten;
