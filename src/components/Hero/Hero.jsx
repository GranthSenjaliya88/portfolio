import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, GitBranch, MapPin } from "lucide-react";
import profileWebp  from "../../assets/images/granth-profile.webp";
import profileSmall from "../../assets/images/granth-profile-480.webp";

const reveal = {
  hidden: { opacity: 1, y: 14 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { delay, duration: .45, ease: [.22, 1, .36, 1] },
  }),
};

export default function Hero({ onOpenResume }) {
  const imageRef   = useRef(null);
  const reduceMotion = useReducedMotion();
  const pointerX   = useMotionValue(0);
  const pointerY   = useMotionValue(0);
  const rotateY    = useSpring(useTransform(pointerX, [-.5, .5], [-4, 4]),   { stiffness: 130, damping: 22 });
  const rotateX    = useSpring(useTransform(pointerY, [-.5, .5], [ 4, -4]),  { stiffness: 130, damping: 22 });

  const handlePointer = (e) => {
    if (reduceMotion || e.pointerType !== "mouse" || !window.matchMedia("(min-width:1024px) and (pointer:fine)").matches) return;
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width  - .5);
    pointerY.set((e.clientY - rect.top)  / rect.height - .5);
  };

  return (
    <section id="home" className="hero-editorial" aria-labelledby="hero-title">

      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb-1" />
        <div className="hero-grid"  />
      </div>

      <div className="hero-layout">
        {/* ── Left copy ── */}
        <div className="hero-copy">

          {/* Status row */}
          <motion.div variants={reveal} initial="hidden" animate="show" custom={.05} className="hero-status">
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </span>
            <span className="hero-location">
              <MapPin size={12} /> Gujarat, India
            </span>
          </motion.div>

          {/* Name */}
          <h1 id="hero-title" className="hero-name">
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" variants={reveal} initial="hidden" animate="show" custom={.18}>
                Granth
              </motion.span>
            </span>{" "}
            <span className="block overflow-hidden pb-2">
              <motion.span className="hero-name-accent" variants={reveal} initial="hidden" animate="show" custom={.25}>
                Senjaliya
              </motion.span>
            </span>
          </h1>

          {/* Role pills */}
          <motion.div variants={reveal} initial="hidden" animate="show" custom={.32} className="hero-roles">
            <span className="hero-role-pill">CSE Student</span>
            <span className="hero-role-pill">Developer</span>
            <span className="hero-role-pill">IoT Builder</span>
          </motion.div>

          {/* Intro + buttons */}
          <motion.div variants={reveal} initial="hidden" animate="show" custom={.4} className="hero-intro">
            <p>
              CSE student at <strong>CHARUSAT University</strong>, building practical software and connected hardware—from responsive web experiences to <strong>ESP32-powered</strong> IoT systems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary" id="hero-view-work-btn">
                View Work <ArrowDown size={17} />
              </a>
              <a
                href="./Granth_Senjaliya_Resume.pdf"
                onClick={onOpenResume}
                className="btn-secondary"
                id="hero-resume-btn"
              >
                Resume <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right portrait ── */}
        <motion.div variants={reveal} initial="hidden" animate="show" custom={.22} className="hero-portrait">

          {/* Portrait image */}
          <motion.div
            ref={imageRef}
            onPointerMove={handlePointer}
            onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
            style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
            className="portrait-frame"
          >
            <img
              src={profileWebp}
              srcSet={`${profileSmall} 479w, ${profileWebp} 767w`}
              sizes="(min-width:1024px) 35vw, (min-width:540px) 500px, calc(100vw - 40px)"
              alt="Granth Senjaliya — CSE student and developer"
              width="767" height="1024"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="portrait-overlay-label">
              CSE student<br />Developer · IoT builder
            </div>
          </motion.div>

          {/* Caption row */}
          <div className="portrait-caption">
            <div className="tech-type">
              2022—Now
              <span>Learning by building</span>
            </div>
            <a
              href="https://github.com/GranthSenjaliya88"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Granth's GitHub profile"
            >
              <GitBranch size={16} /> GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
