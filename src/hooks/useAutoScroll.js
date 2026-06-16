import { useRef, useEffect } from "react";

export function useAutoScroll(dependencies) {
  const massageRef = useRef(null);
  useEffect(() => {
    const massagesElem = massageRef.current;
    if (massagesElem) {
      massagesElem.scrollTop = massagesElem.scrollHeight;
    }
  }, [dependencies]);
  return massageRef;
}
