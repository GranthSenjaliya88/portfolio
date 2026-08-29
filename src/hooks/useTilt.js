import { useEffect, useRef } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const TILT_MAX = 3.5;
    const EASE_IN = "transform 120ms cubic-bezier(0.16,1,0.3,1)";
    const EASE_OUT = "transform 480ms cubic-bezier(0.16,1,0.3,1)";

    const onEnter = () => {
      el.style.transition = EASE_IN;
    };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y - r.height / 2) / (r.height / 2)) * -TILT_MAX;
      const ry = ((x - r.width / 2) / (r.width / 2)) * TILT_MAX;
      el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
    };
    const onLeave = () => {
      el.style.transition = EASE_OUT;
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
