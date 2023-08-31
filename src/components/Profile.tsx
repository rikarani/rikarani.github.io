import { Github } from "./partials/svg";

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
      <div className="divide-y divide-gray-400 md:w-full md:divide-y-0">
        <div>
          <h6 className="text-4xl/8 font-semibold text-secondary/70 md:text-5xl">Halo, nama saya</h6>
          <h6 className="mt-0.5 text-4xl font-medium text-cyan-300/70 md:text-5xl">Phasya Ananta</h6>
          <h6 className="text-xl text-secondary/70 md:text-2xl">
            <Typewriter options={options} />
          </h6>
          <div className="mb-2.5 mt-1.5 max-w-max">
            <Link to="https://github.com/rikarani" className="group flex max-w-max items-center gap-2 rounded-lg bg-secondary/70 px-3 py-1.5 md:px-4 md:py-2">
              <Github className="h-7 w-7 fill-primary" />
              <p className="mt-0.5 text-lg text-primary">Cek Github</p>
            </Link>
          </div>
        </div>

        <div className="text-lg leading-snug tracking-wider text-gray-400">
          <h6 className="mt-1 text-xl font-semibold">// Kenalan Singkat</h6>
          <p>Mahasiswa Teknik Informatika di Universitas Tanjungpura Pontianak. Kenal ngoding pas awal masuk kuliah (sekitar Oktober 2021), tapi baru mulai serius ngoding pas Februari 2023.</p>
          <p className="mt-3">
            Tertarik jadi Front-End Web Developer karna gak sengaja nemu channel{" "}
            <Link to="https://www.youtube.com/@sandhikagalihWPU" className="text-violet-400/70 underline underline-offset-4">
              WPU
            </Link>
            . Tapi sampe sekarang masih bingung kapan harus pake padding, kapan harus pake margin.
          </p>
        </div>
      </div>
      <div className="hidden animate-floating items-center md:flex">
        <img src="../../img/toples.webp" alt="Placeholder" className="w-full" />
      </div>
    </div>
  );
}
