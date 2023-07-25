import { useContext } from "react";
import { LockscreenContext } from "../../../context/LockscreenContext";
import { useFetch } from "../../../hooks/useFetch";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Waktu from "./Waktu";
import Sosmed from "./Sosmed";
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
      <div onClick={() => setLock(false)} className="absolute bottom-0 left-0 right-0 top-0 px-4 pt-6 sm:pt-8">
        <div className="sm:text-center">
          <Waktu />
        </div>

        <div className="mt-6">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} duration={0.7} offset={0}>
            <p className="text-lg font-medium tracking-wider text-gray-200 sm:text-center sm:text-xl sm:tracking-widest">{quotes.content}</p>
          </AnimationOnScroll>

          <div className="mt-3 max-w-max space-y-4 sm:mx-auto sm:mt-4 sm:flex sm:justify-center sm:gap-10 sm:space-y-0">
            <Sosmed />
          </div>
        </div>
      </div>
    )
  );
}

export default Konten;
