import { useContext } from "react";
import { LockscreenContext } from "../../../context/LockscreenContext";
import { Facebook, Github, Discord } from "../Logo";
import { useFetch } from "../../../hooks/useFetch";

import Link from "../Link";
import Waktu from "./Waktu";

interface Quotes {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

function Konten(): React.JSX.Element {
  const [quotes]: Quotes[] = useFetch("https://api.quotable.io/quotes/random?tags=famous-quotes&maxLength=70");
  const { setLock } = useContext(LockscreenContext);

  return (
    quotes && (
      <div onClick={() => setLock(true)} className="absolute left-0 top-0 h-full w-full px-4 pt-4">
        <div className="sm:flex sm:h-full sm:max-w-2xl sm:flex-col sm:justify-end">
          <div className="sm:-translate-y-7">
            <Waktu />

            <div className="mt-4 box-border text-lg font-semibold sm:text-gray-200">
              <p className="text-lg text-slate-100 sm:text-xl sm:font-semibold">{quotes.content}</p>
              <div className="mt-2 max-w-max space-y-4 rounded-md sm:flex sm:gap-4 sm:space-y-0">
                <div>
                  <Link to="https://github.com/rikarani">
                    <Github className="h-9 w-9 fill-slate-50/60 hover:fill-slate-100" />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <Facebook className="h-9 w-9 fill-slate-50/60 hover:fill-slate-100" />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <Discord className="h-9 w-9 fill-slate-50/60 hover:fill-slate-100" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Konten;
