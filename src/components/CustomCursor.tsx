import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
    
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
      <div
        ref={ring}
        className="custom-cursor-ring hidden md:flex items-center justify-center pointer-events-none select-none dk-cursor-ring"
      >
        DK
      </div>
    </>
  );
};

export default CustomCursor;
