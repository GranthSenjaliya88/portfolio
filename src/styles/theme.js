export const theme = {
  colors: {
    bg: "#040d1a",
    bg2: "#071428",
    bgCard: "rgba(6, 20, 45, 0.72)",
    bgCardSolid: "#06142d",
    bgCardHover: "rgba(8, 24, 52, 0.88)",
    bgGlass: "rgba(6, 20, 45, 0.55)",
    bgDark: "rgba(3, 8, 20, 0.95)",
    bgModalOverlay: "rgba(0, 0, 0, 0.75)",

    border: "rgba(20, 184, 166, 0.12)",
    borderHover: "rgba(20, 184, 166, 0.30)",
    borderAccent: "rgba(6, 182, 212, 0.40)",
    borderLight: "rgba(255, 255, 255, 0.06)",

    accent: "#14b8a6",       // Teal Primary
    accentHover: "#0d9488",
    accentCyan: "#06b6d4",   // Cyan
    accentSky: "#22d3ee",    // Sky
    accentEmerald: "#34d399",// Green
    accentPink: "#f472b6",   // Pink
    accentAmber: "#fbbf24",  // Amber
    accentPurple: "#a855f7", // Purple

    text: "#e2eaf4",
    text2: "#94b8d4",
    text3: "#5a7d9a",
    textWhite: "#ffffff",

    error: "#ef4444",
    errorBg: "rgba(239, 68, 68, 0.08)",
    success: "#10b981",
    successBg: "rgba(16, 185, 129, 0.08)",
  },

  gradients: {
    primary: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
    full: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 45%, #22d3ee 100%)",
    subtle: "linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(6, 182, 212, 0.08))",
    cardHover: "linear-gradient(135deg, rgba(20, 184, 166, 0.06), rgba(6, 182, 212, 0.04))",
    progress: "linear-gradient(90deg, #14b8a6, #22d3ee)",
    timeline: "linear-gradient(to bottom, rgba(20, 184, 166, 0.45) 0%, rgba(6, 182, 212, 0.04) 100%)",
  },

  fonts: {
    body: "'Inter', system-ui, -apple-system, sans-serif",
    heading: "'Outfit', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  typography: {
    hero: "clamp(3.2rem, 6.5vw, 5.5rem)",
    h2: "clamp(1.9rem, 3.8vw, 2.65rem)",
    h3: "clamp(1.1rem, 2vw, 1.3rem)",
    body: "0.975rem",
    small: "0.85rem",
    xs: "0.75rem",
    tag: "0.68rem",
  },

  radii: {
    sm: "0.4rem",
    md: "0.625rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 2px 6px rgba(0, 0, 0, 0.4)",
    md: "0 6px 24px rgba(0, 0, 0, 0.5)",
    lg: "0 12px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(20, 184, 166, 0.08)",
    glow: "0 6px 28px rgba(20, 184, 166, 0.40)",
    glowLg: "0 0 40px rgba(20, 184, 166, 0.25)",
  },

  transitions: {
    spring: "cubic-bezier(0.16, 1, 0.3, 1)",
    easeOut: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    default: "0.28s cubic-bezier(0.16, 1, 0.3, 1)",
    fast: "0.15s ease",
  },

  breakpoints: {
    xs: "375px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  spacing: {
    container: "1180px",
    sectionPy: "7rem",
    sectionPyMobile: "4.5rem",
    navHeight: "72px",
  },
};
