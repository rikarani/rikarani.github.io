import React, { useEffect, SetStateAction } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useImage } from "../../../hooks/useImage";

interface LazyImageProps {
  setReady: React.Dispatch<SetStateAction<boolean>>;
}

function LazyImage({ setReady }: LazyImageProps): React.JSX.Element {
  const media: boolean = useMediaQuery("(min-width: 640px)");
  const src = useImage(media ? "../../img/towa.webp" : "../../img/miyako.webp");

  useEffect(() => {
    if (src) {
      setReady(true);
    }
  }, [src]);

  return (
    <div className="relative h-full w-full bg-hp bg-cover bg-top before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/40 before:content-[''] sm:bg-desktop sm:bg-center"></div>
    // <div style={{ backgroundImage: `url(${src})` }} className="relative h-full w-full bg-cover bg-top before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/40 before:content-[''] sm:bg-center"></div>
  );
}

export default LazyImage;