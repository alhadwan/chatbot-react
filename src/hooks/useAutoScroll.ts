import { useRef, useEffect } from "react";
import type { MassageChat } from "../types";

export function useAutoScroll(dependencies: MassageChat[]) {
  const massageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const massagesElem = massageRef.current;
    if (massagesElem) {
      massagesElem.scrollTop = massagesElem.scrollHeight;
    }
  }, [dependencies]);
  return massageRef;
}
