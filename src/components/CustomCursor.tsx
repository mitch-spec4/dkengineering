import { useEffect, useRef } from "react";

const CustomCursor = () => {
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
    <div
      ref={ring}
      style={{
        position: "fixed",
        width: "48px",
        height: "48px",
        border: "2px solid red",
        borderRadius: "50%",
        left: 0,
        top: 0,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        background: "transparent",
        transform: "translate(-50%, -50%)",
        transition: "left 0.08s linear, top 0.08s linear",
        fontWeight: "bold",
        color: "red",
        fontSize: "1.2rem",
        userSelect: "none",
        textTransform: "uppercase",
      }}
    >
      <span style={{ fontStyle: "italic" }}>DK</span>
    </div>
  );
};

export default CustomCursor;
