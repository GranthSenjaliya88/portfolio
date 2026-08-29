import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import profileWebp from "../../assets/images/granth-profile.webp";
import profileJpg from "../../assets/images/granth-profile.jpg";
import {
  fadeUpAnim,
  dotPulseAnim,
  floatGlowAnim,
  floatBadgeAnim,
  rotateSlowAnim,
  glowPulseAnim,
  roleRotateAnim,
  scrollWheelAnim,
} from "../../styles/GlobalStyles";
import { Container, ButtonLink } from "../UI/styled";

const ROLES = ["CSE Student", "Developer", "Problem Solver", "IoT Enthusiast"];

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 5.5rem 0 4rem;
`;

const BackgroundWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const NoiseOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-image: linear-gradient(rgba(20, 184, 166, 0.035) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(20, 184, 166, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 65% at 50% 45%, black, transparent);
  -webkit-mask-image: radial-gradient(ellipse 70% 65% at 50% 45%, black, transparent);
  pointer-events: none;
`;

const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  pointer-events: none;
  animation: ${floatGlowAnim} 12s ease-in-out infinite;
  max-width: 100%;

  &.glow1 {
    width: min(480px, 65vw);
    height: min(480px, 65vw);
    background: rgba(20, 184, 166, 0.09);
    top: -200px;
    right: 30px;
  }

  &.glow2 {
    width: min(340px, 60vw);
    height: min(340px, 60vw);
    background: rgba(6, 182, 212, 0.08);
    bottom: -100px;
    left: 0;
    animation-delay: 4s;
  }

  &.glow3 {
    width: min(240px, 50vw);
    height: min(240px, 50vw);
    background: rgba(34, 211, 238, 0.06);
    top: 45%;
    left: 42%;
    animation-delay: 7s;
  }
`;

const HeroGrid = styled(Container)`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
  min-height: 82vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: unset;
    padding-top: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: center;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text3};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 0.32rem 0.9rem;
  width: fit-content;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeUpAnim} 0.75s ${({ theme }) => theme.transitions.spring} forwards;
  animation-delay: 0.1s;
`;

const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentEmerald};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.accentEmerald};
  animation: ${dotPulseAnim} 2.5s ease-in-out infinite;
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.typography.hero};
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 0.95;
  display: flex;
  flex-direction: column;
  gap: 0.04em;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeUpAnim} 0.75s ${({ theme }) => theme.transitions.spring} forwards;
  animation-delay: 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: clamp(2.6rem, 11vw, 3.8rem);
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: clamp(2.2rem, 12vw, 3rem);
  }
`;

const NameHi = styled.span`
  font-size: 0.2em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text3};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const NameLine = styled.span`
  display: block;

  &.gradient {
    background: ${({ theme }) => theme.gradients.full};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const NamePeriod = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeUpAnim} 0.75s ${({ theme }) => theme.transitions.spring} forwards;
  animation-delay: 0.38s;
`;

const RoleRotator = styled.div`
  position: relative;
  min-height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const RoleItem = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.accentSky};
  animation: ${roleRotateAnim} 0.6s ${({ theme }) => theme.transitions.spring};
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.text2};
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 1.78;
  max-width: 490px;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeUpAnim} 0.75s ${({ theme }) => theme.transitions.spring} forwards;
  animation-delay: 0.52s;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 520px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeUpAnim} 0.75s ${({ theme }) => theme.transitions.spring} forwards;
  animation-delay: 0.66s;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeUpAnim} 0.75s ${({ theme }) => theme.transitions.spring} forwards;
  animation-delay: 0.82s;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.colors.text3};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: rgba(20, 184, 166, 0.35);
    background: rgba(20, 184, 166, 0.08);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(20, 184, 166, 0.2);
  }
`;

const SocialDivider = styled.div`
  width: 1px;
  height: 18px;
  background: ${({ theme }) => theme.colors.border};
  margin: 0 0.15rem;
`;

const SocialLoc = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.74rem;
  color: ${({ theme }) => theme.colors.text3};
`;

const PhotoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: -1;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 195px;
    height: 195px;
  }
`;

const Ring = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: ${rotateSlowAnim} 18s linear infinite;

  &.ring1 {
    border: 1px solid rgba(20, 184, 166, 0.2);
  }

  &.ring2 {
    inset: -14px;
    border: 1px dashed rgba(6, 182, 212, 0.15);
    animation-duration: 26s;
    animation-direction: reverse;
  }
`;

const PhotoGlow = styled.div`
  position: absolute;
  inset: -24px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%);
  animation: ${glowPulseAnim} 5s ease-in-out infinite;
`;

const PhotoFrame = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(20, 184, 166, 0.32);
  background: ${({ theme }) => theme.colors.bgCardSolid};
  box-shadow: 0 0 40px rgba(20, 184, 166, 0.15), inset 0 0 24px rgba(0, 0, 0, 0.35);
  transition: border-color 0.4s, box-shadow 0.4s;

  &:hover {
    border-color: rgba(20, 184, 166, 0.6);
    box-shadow: 0 0 60px rgba(20, 184, 166, 0.25), inset 0 0 24px rgba(0, 0, 0, 0.35);
  }

  picture, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.7s ${({ theme }) => theme.transitions.spring};
  }

  ${PhotoContainer}:hover & img {
    transform: scale(1.04);
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(6, 20, 45, 0.92);
  border: 1px solid rgba(20, 184, 166, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0.38rem 0.8rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.md};
  animation: ${floatBadgeAnim} 4s ease-in-out infinite;

  &.tr {
    top: 8%;
    right: -4%;
    animation-delay: 0s;
  }

  &.bl {
    bottom: 13%;
    left: -4%;
    animation-delay: 2s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const CodeSnippet = styled.div`
  position: absolute;
  bottom: -4%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(6, 20, 45, 0.92);
  border: 1px solid rgba(20, 184, 166, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0.3rem 0.8rem;
  border-radius: 0.45rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  color: ${({ theme }) => theme.colors.accentSky};
  white-space: nowrap;
  animation: ${floatBadgeAnim} 4.5s ease-in-out infinite;
  animation-delay: 1s;

  span {
    color: ${({ theme }) => theme.colors.text3};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const ScrollIndicator = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
`;

const ScrollMouse = styled.div`
  width: 20px;
  height: 32px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  position: relative;
`;

const ScrollWheel = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 6px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.full};
  animation: ${scrollWheelAnim} 2.2s ease-in-out infinite;
`;

function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let pts = [];
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const init = () => {
      const n = Math.floor((canvas.width * canvas.height) / 22000);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.1 + 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        o: Math.random() * 0.35 + 0.06,
      }));
    };
    init();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 184, 166, ${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.06 * (1 - d / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize, { passive: true });

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <Canvas ref={canvasRef} aria-hidden="true" />;
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const photoFrameRef = useRef(null);
  const photoWrapRef = useRef(null);

  useEffect(() => {
    const iv = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const frame = photoFrameRef.current;
    const wrap = photoWrapRef.current;
    if (!frame || !wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e) => {
      if (window.innerWidth < 1024) return;
      const rect = wrap.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2)));
      frame.style.transition = "transform 120ms cubic-bezier(0.16,1,0.3,1)";
      frame.style.transform = `perspective(1000px) rotateX(${(dy * -5).toFixed(2)}deg) rotateY(${(dx * 5).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      frame.style.transition = "transform 600ms cubic-bezier(0.16,1,0.3,1)";
      frame.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    document.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection id="home" aria-label="Introduction">
      <BackgroundWrap aria-hidden="true">
        <ParticlesCanvas />
        <NoiseOverlay />
        <GridOverlay />
        <Glow className="glow1" />
        <Glow className="glow2" />
        <Glow className="glow3" />
      </BackgroundWrap>

      <HeroGrid>
        <Content>
          <Badge>
            <BadgeDot aria-hidden="true" />
            <span>Available for opportunities</span>
          </Badge>

          <Name>
            <NameHi>Hello, I am</NameHi>
            <NameLine>Granth</NameLine>
            <NameLine className="gradient">
              Senjaliya<NamePeriod aria-hidden="true">.</NamePeriod>
            </NameLine>
          </Name>

          <Subtitle>
            <RoleRotator aria-live="polite" aria-label={`Current role: ${ROLES[roleIdx]}`}>
              <RoleItem key={roleIdx}>{ROLES[roleIdx]}</RoleItem>
            </RoleRotator>
          </Subtitle>

          <Desc>
            Computer Science Engineering student at <strong>CHARUSAT</strong> passionate about programming, web development, problem solving, and IoT. I turn ideas into practical projects and continuously sharpen my technical skills.
          </Desc>

          <Actions>
            <ButtonLink
              $variant="primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("projects");
              }}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </ButtonLink>
            <ButtonLink
              $variant="outline"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contact");
              }}
            >
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </ButtonLink>
          </Actions>

          <Social>
            <SocialIcon href="https://github.com/GranthSenjaliya88" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://leetcode.com/u/Granth88/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="mailto:granthsenjaliya881@gmail.com" aria-label="Send email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </SocialIcon>
            <SocialDivider aria-hidden="true" />
            <SocialLoc>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Gujarat, India
            </SocialLoc>
          </Social>
        </Content>

        <PhotoWrap ref={photoWrapRef} aria-hidden="true">
          <PhotoContainer>
            <Ring className="ring1" />
            <Ring className="ring2" />
            <PhotoGlow />
            <PhotoFrame ref={photoFrameRef}>
              <picture>
                <source type="image/webp" srcSet={profileWebp} />
                <img src={profileJpg} alt="Granth Senjaliya — CSE Student and Developer" width="340" height="340" loading="eager" />
              </picture>
            </PhotoFrame>
            <FloatingBadge className="tr">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              Developer
            </FloatingBadge>
            <FloatingBadge className="bl">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="2"/>
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49"/>
              </svg>
              IoT Builder
            </FloatingBadge>
            <CodeSnippet aria-hidden="true">
              <span>// keep_learning();</span>
            </CodeSnippet>
          </PhotoContainer>
        </PhotoWrap>
      </HeroGrid>

      <ScrollIndicator
        href="#about"
        aria-label="Scroll down to About section"
        onClick={(e) => {
          e.preventDefault();
          handleScrollTo("about");
        }}
      >
        <ScrollMouse>
          <ScrollWheel />
        </ScrollMouse>
      </ScrollIndicator>
    </HeroSection>
  );
}
