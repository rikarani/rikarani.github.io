import { AnimationOnScroll } from "react-animation-on-scroll";
import { Facebook, Github, Instagram } from "./Logo";

import Link from "./Link";

export default function Sosmed(): React.JSX.Element {
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeInLeft" delay={500} duration={0.7} offset={0}>
        <Link to="https://github.com/rikarani">
          <Github className="h-9 w-9 fill-slate-50/60 sm:hover:fill-slate-100" />
        </Link>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeft" delay={700} duration={0.7} offset={0}>
        <Link to="https://github.com/rikarani">
          <Facebook className="h-9 w-9 fill-slate-50/60 sm:hover:fill-slate-100" />
        </Link>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeft" delay={900} duration={0.7} offset={0}>
        <Link to="https://github.com/rikarani">
          <Instagram className="h-9 w-9 fill-slate-50/60 sm:hover:fill-slate-100" />
        </Link>
      </AnimationOnScroll>
    </>
  );
}
