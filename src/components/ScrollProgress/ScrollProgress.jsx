import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, restDelta: .001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
