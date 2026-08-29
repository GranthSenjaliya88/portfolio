import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, GitBranch, MapPin } from "lucide-react";
import profileWebp from "../../assets/images/granth-profile.webp";

const reveal = {
  hidden: { opacity: 0, y: 38 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: .85, ease: [.16, 1, .3, 1] } }),
};

export default function Hero({ onOpenResume }) {
  const imageRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-.5, .5], [-3.5, 3.5]), { stiffness: 140, damping: 24 });
  const rotateX = useSpring(useTransform(pointerY, [-.5, .5], [3.5, -3.5]), { stiffness: 140, damping: 24 });

  const handlePointer = (event) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width - .5);
    pointerY.set((event.clientY - rect.top) / rect.height - .5);
  };

  return (
    <section id="home" className="hero-editorial relative overflow-hidden px-5 pb-10 pt-28 md:px-8 md:pb-8 md:pt-32 lg:px-12" aria-labelledby="hero-title">
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-9rem)] max-w-[1440px] grid-cols-1 items-end gap-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-10">
        <div className="relative z-20 pb-2 lg:pb-12">
          <motion.div variants={reveal} initial="hidden" animate="show" custom={.08} className="mb-8 flex flex-wrap items-center gap-3">
            <span className="tech-type flex items-center gap-2 rounded-full border border-black/25 px-3 py-2 text-[10px] font-bold uppercase tracking-[.15em]">
              <span className="size-2 animate-pulse rounded-full bg-[var(--signal)]" /> Available for opportunities
            </span>
            <span className="tech-type flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.15em] opacity-60"><MapPin size={13} /> Gujarat, India</span>
          </motion.div>

          <h1 id="hero-title" className="hero-name display-type font-black">
            <span className="block overflow-hidden pb-2"><motion.span className="block" variants={reveal} initial="hidden" animate="show" custom={.15}>Granth</motion.span></span>
            <span className="block overflow-hidden pb-3"><motion.span className="block pl-0 text-[var(--signal)] sm:pl-[5vw] lg:pl-[5vw]" variants={reveal} initial="hidden" animate="show" custom={.24}>Senjaliya</motion.span></span>
          </h1>

          <motion.div variants={reveal} initial="hidden" animate="show" custom={.38} className="mt-7 grid max-w-4xl gap-7 border-t border-black/25 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-2xl text-base font-medium leading-relaxed text-black/70 md:text-lg">
              Computer Science Engineering student at <strong className="text-black">CHARUSAT</strong>, building practical software and connected hardware—from responsive web experiences to ESP32-powered systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="group flex items-center gap-3 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-extrabold text-[var(--paper)] transition-transform hover:-translate-y-1">
                View work <ArrowDown className="transition-transform group-hover:translate-y-1" size={17} />
              </a>
              <button onClick={onOpenResume} className="group flex items-center gap-3 rounded-full border border-black/30 px-5 py-3 text-sm font-extrabold transition-colors hover:bg-[var(--signal)] hover:text-white">
                Resume <ArrowUpRight className="transition-transform group-hover:rotate-45" size={17} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div variants={reveal} initial="hidden" animate="show" custom={.3} className="relative mx-auto w-full max-w-[500px] pb-8 lg:pb-14">
          <motion.div ref={imageRef} onPointerMove={handlePointer} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }} style={{ rotateX, rotateY, transformPerspective: 1000 }} className="portrait-frame relative aspect-[4/5] overflow-hidden bg-[var(--moss)]">
            <img src={profileWebp} alt="Granth Senjaliya standing in front of a mountain landscape" width="768" height="1024" fetchPriority="high" className="h-full w-full object-cover" />
            <div className="tech-type absolute bottom-4 left-4 z-10 border-l-2 border-[var(--signal)] pl-3 text-[10px] font-bold uppercase tracking-[.16em] text-white">CSE student<br />Developer · IoT builder</div>
          </motion.div>

          <a href="https://github.com/GranthSenjaliya88" target="_blank" rel="noreferrer" className="absolute -bottom-1 -left-3 z-20 grid size-24 place-items-center rounded-full bg-[var(--signal)] text-white transition-transform hover:scale-105 md:-left-10 md:size-28" aria-label="Visit Granth's GitHub profile">
            <span className="hero-orbit tech-type absolute inset-2 rounded-full border border-dashed border-white/60" /><GitBranch size={25} />
          </a>
          <div className="tech-type absolute -right-3 top-5 z-20 bg-[var(--ink)] px-4 py-3 text-[9px] font-bold uppercase tracking-[.14em] text-[var(--paper)] md:-right-8">2022—Now<br /><span className="text-[var(--signal)]">Learning by building</span></div>
        </motion.div>
      </div>
    </section>
  );
}
