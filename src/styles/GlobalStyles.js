import { createGlobalStyle, keyframes } from "styled-components";

export const spinAnim = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const fadeUpAnim = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const scaleInAnim = keyframes`
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const dotPulseAnim = keyframes`
  0%, 100% { opacity: 1; box-shadow: 0 0 6px #34d399; }
  50% { opacity: 0.6; box-shadow: 0 0 14px #34d399; }
`;

export const floatGlowAnim = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(15px, -15px) scale(1.03); }
`;

export const floatBadgeAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`;

export const rotateSlowAnim = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const glowPulseAnim = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.04); }
`;

export const roleRotateAnim = keyframes`
  0% { opacity: 0; filter: blur(8px); transform: translateY(10px); }
  4%, 22% { opacity: 1; filter: blur(0px); transform: translateY(0); }
  26%, 100% { opacity: 0; filter: blur(8px); transform: translateY(-10px); }
`;

export const scrollWheelAnim = keyframes`
  0% { opacity: 1; top: 5px; }
  100% { opacity: 0; top: 18px; }
`;

export const nodePulseAnim = keyframes`
  0%, 100% { opacity: 0.75; }
  50% { opacity: 1; box-shadow: 0 0 10px rgba(6, 182, 212, 0.25); }
`;

export const shimmerAnim = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
`;

export const blinkAnim = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const dotPulse2Anim = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
`;

export const loaderPopAnim = keyframes`
  from { transform: scale(0.6); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;600;700;800;900&display=swap");

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 76px;
    font-size: 16px;
    scrollbar-gutter: stable;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.005em;
    cursor: default;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Scroll reveal utilities */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(4px);
    transition: opacity 0.7s ${({ theme }) => theme.transitions.spring},
                transform 0.7s ${({ theme }) => theme.transitions.spring},
                filter 0.7s ${({ theme }) => theme.transitions.spring};
    will-change: opacity, transform, filter;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html {
      scroll-behavior: auto;
    }
    .reveal {
      opacity: 1;
      transform: none;
      filter: none;
    }
  }
`;
