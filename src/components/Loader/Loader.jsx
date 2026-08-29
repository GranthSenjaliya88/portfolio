import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onLoaded }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = performance.now();
    let frame;
    const tick = (time) => {
      const elapsed = time - startedAt;
      const next = Math.min(100, Math.round((elapsed / 1250) * 100));
      setProgress(next);
      if (next < 100) frame = requestAnimationFrame(tick);
      else setTimeout(onLoaded, 180);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onLoaded]);

  return (
    <motion.div className="loader-screen" exit={{ y: "-100%" }} transition={{ duration: .8, ease: [.76, 0, .24, 1] }} role="status" aria-label="Loading portfolio">
      <div className="loader-top tech-type">
        <span>Portfolio / 2026</span>
        <span>22.2587° N · 71.1924° E</span>
      </div>
      <div className="loader-mark display-type">GS<span>.</span></div>
      <div className="loader-bottom">
        <div className="loader-track"><motion.div animate={{ width: `${progress}%` }} /></div>
        <span className="tech-type">{String(progress).padStart(3, "0")}%</span>
      </div>
    </motion.div>
  );
}
