import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 520, damping: 38, mass: .2 });
  const springY = useSpring(y, { stiffness: 520, damping: 38, mass: .2 });
  const [state, setState] = useState({ active: false, label: "" });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(finePointer.matches && !reduced.matches);
    sync();

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event) => {
      const target = event.target.closest("[data-cursor], a, button");
      setState({ active: Boolean(target), label: target?.dataset.cursor || "" });
    };

    finePointer.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    return () => {
      finePointer.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      data-active={state.active}
      data-has-label={Boolean(state.label)}
      style={{ x: springX, y: springY }}
    >
      {state.label && <span>{state.label}</span>}
    </motion.div>
  );
}
