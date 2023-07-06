import { useEffect, SetStateAction, Dispatch } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useImage } from "../../../hooks/useImage";

interface LazyImageProps {
  setReady: Dispatch<SetStateAction<boolean>>;
}

function LazyImage({ setReady }: LazyImageProps): React.JSX.Element {
  const media: boolean = useMediaQuery("(min-width: 640px)");
  const src = useImage(media ? "../../img/towa.webp" : "../../img/miyako.webp");

  useEffect(() => {
    if (src) {
      setReady(true);
    }
  }, [src]);

  return <div className="relative h-full w-full bg-hp bg-cover bg-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/30 before:content-[''] sm:bg-desktop sm:bg-center"></div>;
}

export default LazyImage;
