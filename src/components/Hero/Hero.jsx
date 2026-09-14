import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Cpu, GitBranch, MapPin, Sparkles, Terminal } from "lucide-react";
import profileWebp  from "../../assets/images/granth-profile.webp";
import profileSmall from "../../assets/images/granth-profile-480.webp";

const reveal = {
  hidden: { opacity: 1, y: 20 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { delay, duration: .5, ease: [.16, 1, .3, 1] },
  }),
};

export default function Hero({ onOpenResume }) {
  const imageRef     = useRef(null);
  const reduceMotion = useReducedMotion();
  const pointerX     = useMotionValue(0);
  const pointerY     = useMotionValue(0);

  // Smooth realistic spring-based 3D tilt & glare tracking
  const rotateY      = useSpring(useTransform(pointerX, [-.5, .5], [-8, 8]), { stiffness: 220, damping: 20 });
  const rotateX      = useSpring(useTransform(pointerY, [-.5, .5], [ 8, -8]), { stiffness: 220, damping: 20 });
  const glareX       = useSpring(useTransform(pointerX, [-.5, .5], [10, 90]), { stiffness: 180, damping: 22 });
  const glareY       = useSpring(useTransform(pointerY, [-.5, .5], [10, 90]), { stiffness: 180, damping: 22 });
  const badgeZ       = useSpring(useTransform(pointerX, [-.5, .5], [-6, 6]), { stiffness: 180, damping: 20 });
  const chipZ        = useSpring(useTransform(pointerX, [-.5, .5], [6, -6]), { stiffness: 180, damping: 20 });

  const handlePointer = (e) => {
    if (reduceMotion || e.pointerType !== "mouse" || !window.matchMedia("(min-width:1024px) and (pointer:fine)").matches) return;
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width  - .5);
    pointerY.set((e.clientY - rect.top)  / rect.height - .5);
  };

  const handleLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="home" className="hero-editorial" aria-labelledby="hero-title">
      {/* Ambient glowing background orbs with gentle animated drift */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
      </div>

      <div className="hero-layout">
        {/* ── Left Column: Editorial Headline & Developer Profile ── */}
        <div className="hero-copy">

          {/* Status Row with pulsing indicator */}
          <motion.div variants={reveal} initial="hidden" animate="show" custom={.05} className="hero-status">
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </span>
            <span className="hero-location">
              <MapPin size={12} /> Gujarat, India
            </span>
          </motion.div>

          {/* Name Heading with smooth reveal */}
          <h1 id="hero-title" className="hero-name">
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" variants={reveal} initial="hidden" animate="show" custom={.15}>
                Granth
              </motion.span>
            </span>{" "}
            <span className="block overflow-hidden pb-2">
              <motion.span className="hero-name-accent" variants={reveal} initial="hidden" animate="show" custom={.22}>
                Senjaliya
              </motion.span>
            </span>
          </h1>

          {/* Role Pills with subtle hover float */}
          <motion.div variants={reveal} initial="hidden" animate="show" custom={.28} className="hero-roles">
            <span className="hero-role-pill hero-role-pill--cse">
              <Terminal size={13} /> CSE Student
            </span>
            <span className="hero-role-pill hero-role-pill--dev">
              <Code2 size={13} /> Full-Stack Web
            </span>
            <span className="hero-role-pill hero-role-pill--iot">
              <Cpu size={13} /> Embedded &amp; IoT
            </span>
          </motion.div>

          {/* Intro Text & CTA Group */}
          <motion.div variants={reveal} initial="hidden" animate="show" custom={.35} className="hero-intro">
            <p>
              Computer Science Engineering student at <strong>CHARUSAT University</strong>. I build responsive web applications and connected systems with <strong>ESP32 &amp; Arduino</strong>, focused on clean architecture and practical utility.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary" id="hero-view-work-btn">
                View Projects <ArrowDown size={16} className="btn-icon-animate" />
              </a>
              <a
                href="./Granth_Senjaliya_Resume.pdf"
                onClick={onOpenResume}
                className="btn-secondary"
                id="hero-resume-btn"
              >
                Download Resume <ArrowUpRight size={15} className="btn-icon-animate" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: Interactive 3D Studio Portrait + Animated Depth ── */}
        <motion.div variants={reveal} initial="hidden" animate="show" custom={.2} className="hero-portrait">
          {/* Outer Breathing Aura Glow */}
          <div className="portrait-aura-wrap">
            <div className="portrait-aura-glow" aria-hidden="true" />
            <div className="portrait-halo-border" aria-hidden="true" />

            {/* Framed 3D Interactive Portrait */}
            <motion.div
              ref={imageRef}
              onPointerMove={handlePointer}
              onPointerLeave={handleLeave}
              style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
              className="portrait-frame group"
            >
              {/* Corner HUD Tech Accents */}
              <div className="portrait-corner portrait-corner--tl" aria-hidden="true" />
              <div className="portrait-corner portrait-corner--tr" aria-hidden="true" />
              <div className="portrait-corner portrait-corner--bl" aria-hidden="true" />
              <div className="portrait-corner portrait-corner--br" aria-hidden="true" />

              <img
                src={profileWebp}
                srcSet={`${profileSmall} 479w, ${profileWebp} 767w`}
                sizes="(min-width:1024px) 35vw, (min-width:540px) 500px, calc(100vw - 40px)"
                alt="Granth Senjaliya — CSE student and developer"
                width="767" height="1024"
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Dynamic Interactive Specular Lighting Sheen */}
              <motion.div
                className="portrait-glare-overlay"
                style={{
                  background: useTransform(
                    [glareX, glareY],
                    ([x, y]) => `radial-gradient(circle 360px at ${x}% ${y}%, rgba(255, 255, 255, 0.28) 0%, rgba(139, 92, 246, 0.18) 35%, transparent 75%)`
                  ),
                }}
                aria-hidden="true"
              />

              {/* Top Floating Status Chip */}
              <motion.div
                style={reduceMotion ? undefined : { x: chipZ }}
                className="portrait-chip-top"
              >
                <Sparkles size={13} className="text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
                <span>Embedded &amp; Web</span>
              </motion.div>

              {/* Floating Verified Badge with 3D Depth */}
              <motion.div
                style={reduceMotion ? undefined : { x: badgeZ }}
                className="portrait-floating-badge"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
                <span>CHARUSAT '26 · Software &amp; IoT</span>
              </motion.div>
            </motion.div>
          </div>


          {/* Interactive Developer Terminal Box */}
          <div className="hero-terminal">
            <div className="hero-terminal-head">
              <div className="hero-terminal-dots">
                <span /><span /><span />
              </div>
              <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                developer@granth ~ zsh
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">$</span>
                <span className="text-gray-300">whoami</span>
              </div>
              <p className="text-cyan-300 pl-4">Granth Senjaliya · B.Tech CSE</p>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">$</span>
                <span className="text-gray-300">current_focus</span>
              </div>
              <p className="text-emerald-400 pl-4 flex items-center gap-1">
                &gt; Building software &amp; hardware systems
                <span className="terminal-cursor-blink">|</span>
              </p>
            </div>
          </div>

          {/* Caption Links */}
          <div className="portrait-caption">
            <div className="tech-type text-xs text-gray-400">
              2022 — Present
            </div>
            <a
              href="https://github.com/GranthSenjaliya88"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Granth's GitHub profile"
            >
              <GitBranch size={15} /> GitHub Profile <ArrowUpRight size={14} className="caption-arrow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
