import Photo from "/img/tb.jpg";
import { Avatar, Typography } from "@material-tailwind/react";

import Typewriter, { type Options } from "typewriter-effect";
import Link from "./partials/Link";

export default function Profile(): React.JSX.Element {
  const strings: string[] = ["Mahasiswa", "Pengangguran", "Beban Keluarga", "Front-End Web Developer Wannabe"];
  const options: Partial<Options> = {
    autoStart: true,
    loop: true,
    delay: 80,
    deleteSpeed: 30,
    strings,
  };

  return (
    <div className="md:flex">
      <div className="md:w-full">
        <div>
          <div className="text-center md:text-left">
            <Typography variant="h2" color="gray" className="leading-7 text-gray-300">
              Halo, nama saya
            </Typography>
            <Typography variant="h2" color="light-blue" textGradient className="-mt-2 mb-2 md:-mt-1 md:mb-0">
              Phasya Ananta
            </Typography>
          </div>
          <div className="mb-2 md:hidden">
            <Avatar src={Photo} size="xxl" className="mx-auto block" />
          </div>
          <h6 className="text-center text-xl text-gray-300 md:text-left md:text-2xl">
            <Typewriter options={options} />
          </h6>
        </div>

        <div className="mt-2">
          <Typography variant="h5" color="gray" className="text-gray-300">
            // Kenalan Singkat
          </Typography>
          <Typography variant="lead" color="gray" className="text-gray-300">
            Mahasiswa Teknik Informatika di Universitas Tanjungpura Pontianak. Kenal ngoding pas awal masuk kuliah (sekitar Oktober 2021), tapi baru mulai serius ngoding pas Februari 2023.
          </Typography>
          <Typography variant="lead" color="gray" className="mt-2 text-gray-300">
            Tertarik jadi Front-End Web Developer karna gak sengaja nemu channel{" "}
            <Link to="https://www.youtube.com/@sandhikagalihWPU" className="text-cyan-400 underline underline-offset-4">
              WPU
            </Link>
            . Tapi sampe sekarang masih bingung kapan harus pake padding, kapan harus pake margin.
          </Typography>
        </div>
      </div>
      <div className="hidden animate-floating items-center md:flex">
        <img src="../../img/toples.webp" alt="Placeholder" className="w-full" />
      </div>
    </div>
  );
}
