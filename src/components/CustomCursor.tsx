import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.top = `${e.clientY}px`;
      }
      if (ring.current) {
        ring.current.style.left = `${e.clientX}px`;
        ring.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div ref={dot} className="custom-cursor hidden md:block" />
      <div ref={ring} className="custom-cursor-ring hidden md:block" />
    </>
  );
};

export default CustomCursor;
