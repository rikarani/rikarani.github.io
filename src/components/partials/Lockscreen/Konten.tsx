import { useContext } from "react";
import { LockscreenContext } from "../../../context/LockscreenContext";
import { Facebook, Github, Discord, Instagram } from "../Logo";
import { useFetch } from "../../../hooks/useFetch";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
      <div onClick={() => setLock(false)} className="absolute left-0 top-0 h-full  px-4 pt-4">
        <div className="sm:flex sm:h-full sm:max-w-2xl sm:flex-col sm:justify-end">
          <div className="sm:-translate-y-7">
            <Waktu />

            <div className="mt-4">
              <AnimationOnScroll animateIn="animate__fadeInRight" delay={500} duration={0.7} offset={0}>
                <p className="text-lg font-semibold text-white sm:text-xl">{quotes.content}</p>
              </AnimationOnScroll>
              <div className="mt-2 max-w-max space-y-4 rounded-md sm:flex sm:gap-4 sm:space-y-0">
                <AnimationOnScroll animateIn="animate__fadeInLeft" delay={700} duration={0.5} offset={0}>
                  <Link to="https://github.com/rikarani">
                    <Github className="h-9 w-9 fill-slate-50/60 sm:hover:fill-slate-100" />
                  </Link>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeft" delay={900} duration={0.5} offset={0}>
                  <Link to="/">
                    <Facebook className="h-9 w-9 fill-slate-50/60 sm:hover:fill-slate-100" />
                  </Link>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeft" delay={1100} duration={0.5} offset={0}>
                  <Link to="/">
                    <Instagram className="h-9 w-9 fill-slate-50/60 sm:hover:fill-slate-100" />
                  </Link>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeft" delay={1300} duration={0.5} offset={0}>
                  <Link to="/">
                    <Discord className="h-9 w-9 fill-slate-50/60 sm:hover:fill-slate-100" />
                  </Link>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Konten;
