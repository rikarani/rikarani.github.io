import { useEffect, useRef, useState } from "react";

export function useProgressBar(initialOpen: boolean): number {
  const [progress, setProgress] = useState<number>(0);
  const intervalIdRef = useRef<number | undefined>();

  useEffect(() => {
    let width = 0;

    const startLoading = () => {
      intervalIdRef.current = window.setInterval(() => {
        if (width >= 100) {
          clearInterval(intervalIdRef.current);
        } else {
          width += Math.floor(Math.random() * 5 + 1) + 5;
          setProgress(width);
        }
      }, 350);
    };

    const stopLoading = () => {
      clearInterval(intervalIdRef.current);
    };

    if (initialOpen) {
      startLoading();
    }

    return () => {
      stopLoading();
    };
  }, [initialOpen]);

  return progress;
}
