import { useState, useEffect } from "react";

export function useImage(src: string): string | undefined {
  const [source, setSource] = useState<string | undefined>();

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  return source;
}
