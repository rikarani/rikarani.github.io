import "tippy.js/dist/tippy.css";
import { Facebook, Github, Discord } from "../Logo";
import { useMediaQuery } from "usehooks-ts";

import Link from "../Link";
import Waktu from "./Waktu";
import Tippy from "@tippyjs/react";

function Konten(): React.JSX.Element {
  return (
    <div onClick={() => alert("oke")} className="absolute left-0 top-0 h-full w-full px-4 pt-4">
      {/* Jam & Tanggal */}
      <div className="sm:mt-96 sm:pt-24">
        <Waktu />
      </div>

      <div className="mt-4 text-lg font-semibold sm:text-gray-200">
        <p className="text-xl">kuliah hahahihi taunya udah semester 5</p>
        <div className="mt-2 max-w-max space-y-2.5 sm:flex sm:gap-2.5 sm:space-y-0">
          <div>
            <Tippy content="Github" arrow={true} placement={useMediaQuery("(min-width: 640px)") ? "bottom" : "right"}>
              <Link to="https://github.com/rikarani">
                <Github className="h-11 w-11 sm:h-10 sm:w-10 sm:fill-gray-200" />
              </Link>
            </Tippy>
          </div>
          <div>
            <Tippy content="Facebook" arrow={true} placement={useMediaQuery("(min-width: 640px)") ? "bottom" : "right"}>
              <Link to="https://facebook.com/rikaraniii">
                <Facebook className="h-11 w-10 sm:h-10 sm:w-11 sm:fill-gray-200" />
              </Link>
            </Tippy>
          </div>
          <div>
            <Tippy content="Discord" arrow={true} placement={useMediaQuery("(min-width: 640px)") ? "bottom" : "right"}>
              <Link to="https://facebook.com/rikaraniii">
                <Discord className="h-11 w-11 sm:h-10 sm:w-10 sm:fill-gray-200" />
              </Link>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Konten;
