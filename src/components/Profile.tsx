import { Github, Discord, Youtube } from "./partials/svg";
import Typewriter, { type Options } from "typewriter-effect";
import Link from "./partials/Link";

export default function Profile(): React.JSX.Element {
  const strings: string[] = ["Mahasiswa", "Pengangguran", "Beban Keluarga", "Front-End Web Developer Wannabe"];
  const options: Options = {
    autoStart: true,
    loop: true,
    delay: 80,
    deleteSpeed: 30,
    strings,
  };

  return (
    <div>
      <div className="md:flex">
        <div className="w-full">
          <h1 className="text-3xl font-medium text-gray-300 lg:text-4xl">Halo, Nama Saya</h1>
          <h2 className="-ml-0.5 bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-4xl font-semibold text-transparent lg:text-5xl">Phasya Ananta</h2>
          <div className="mt-1 text-xl font-medium text-gray-300 md:text-2xl">
            <Typewriter options={options} />
          </div>

          <div className="mt-2 flex gap-4 [&>div:hover]:cursor-pointer">
            <div>
              <Link to="http://github.com/rikarani">
                <Github className="h-9 w-9 fill-gray-300 hover:fill-white" />
              </Link>
            </div>
            <div>
              <Link to="https://www.youtube.com/@rikaraniii">
                <Youtube className="h-9 w-9 fill-gray-300 hover:fill-yt" />
              </Link>
            </div>
            <div>
              <Link to="https://discord.gg/9mzkkgbqPu">
                <Discord className="h-9 w-9 fill-gray-300 hover:fill-discord" />
              </Link>
            </div>
          </div>

          <div className="mt-4 text-balance text-gray-300">
            <h6 className="text-xl font-semibold lg:text-2xl">--- Kenalan Singkat</h6>
            <div className="pr-3 text-lg font-medium leading-7 lg:text-xl lg:font-normal">
              <p>Mahasiswa Teknik Informatika di Universitas Tanjungpura Pontianak. Kenal ngoding pas awal masuk kuliah (sekitar Oktober 2021), tapi baru mulai serius ngoding pas Februari 2023.</p>
              <p className="mt-3">
                Tertarik jadi Front-End Web Developer karna gak sengaja nemu channel{" "}
                <Link to="https://www.youtube.com/@sandhikagalihWPU" className="font-medium text-cyan-500 underline underline-offset-4">
                  WPU
                </Link>
                . Tapi sampe sekarang masih bingung kapan harus pake padding, kapan harus pake margin.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="relative hidden items-center md:flex">
          <span className="after:absolute after:top-0 after:h-2 after:w-1/2 after:bg-red-500 after:mix-blend-color-dodge"></span>
          <span className="after:absolute after:top-0 after:h-2 after:w-1/2 after:origin-top-left after:rotate-90 after:bg-blue-500 after:mix-blend-color-dodge"></span>
          <span></span>
          <span></span>
          <img src="/img/toples.webp" alt="Placeholder" className="w-full animate-floating" />
        </div> */}
      </div>
    </div>
  );
}
