import { useEffect, useRef } from "react";

type IPageLoadOnce = () => any;

export const usePageLoadOnce = (cb: IPageLoadOnce) => {
  const pageLoadRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (pageLoadRef.current !== true) {
      cb?.();
      pageLoadRef.current = true;
      return;
    }
    return;
  }, [cb]);
};
