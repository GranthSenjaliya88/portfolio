import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "dsa", label: "DSA" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.4s ${({ theme }) => theme.transitions.easeOut},
              border-color 0.4s,
              box-shadow 0.4s;

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      background: rgba(4, 13, 26, 0.92);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border-bottom: 1px solid ${theme.colors.border};
      box-shadow: ${theme.shadows.md};
    `}
`;

const Nav = styled.nav`
  max-width: ${({ theme }) => theme.spacing.container};
  margin: 0 auto;
  padding: 0.85rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.75rem 1.25rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-shrink: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
`;

const LogoDot = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    width: min(300px, 85vw);
    height: 100vh;
    background: rgba(4, 13, 26, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    gap: 0;
    padding: 5rem 2rem 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    z-index: 999;
    align-items: flex-start;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

    li {
      width: 100%;
    }
  }
`;

const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.text3};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: 500;
  padding: 0.45rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  letter-spacing: 0.01em;
  transition: color 0.2s, background 0.2s;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    right: 50%;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radii.full};
    transition: left 0.3s ${({ theme }) => theme.transitions.spring},
                right 0.3s ${({ theme }) => theme.transitions.spring};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};

    &::after {
      left: 12px;
      right: 12px;
    }
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      color: ${theme.colors.text};
      background: rgba(20, 184, 166, 0.1);

      &::after {
        left: 12px;
        right: 12px;
        opacity: 0.9;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    padding: 0.85rem 0;
    font-size: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    width: 100%;

    &::after {
      display: none;
    }

    ${({ $isActive }) =>
      $isActive &&
      css`
        background: transparent;
        color: ${({ theme }) => theme.colors.accent};
      `}
  }
`;

const Actions = styled.div`
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const ResumeBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.42rem 0.95rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text2};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all ${({ theme }) => theme.transitions.default};
  background: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const MobileResumeWrap = styled.li`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    padding: 1rem 0;
    width: 100%;
  }
`;

const MobileResumeBtn = styled(ResumeBtn)`
  width: 100%;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.gradients.primary};
  color: #ffffff;
  border: none;
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: background 0.15s;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text2};
    border-radius: ${({ theme }) => theme.radii.full};
    transition: all 0.35s ${({ theme }) => theme.transitions.spring};
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    margin-left: auto;
  }
`;

const Backdrop = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const BrandMark = () => (
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="gsNavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="#06142d" />
    <rect x="1.5" y="1.5" width="45" height="45" rx="11" fill="url(#gsNavGrad)" fillOpacity="0.15" stroke="url(#gsNavGrad)" strokeWidth="1.5" />
    <path d="M 23 15 H 17 C 13.5 15 13.5 24 17 24 H 23 V 20" stroke="url(#gsNavGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 31 33 H 25 C 21.5 33 21.5 24 25 24 H 31 C 34.5 24 34.5 15 31 15 H 25" stroke="#F8FAFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar({ activeSection, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const menuId = "nav-mobile-menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
    if (!next) hamburgerRef.current?.focus();
  };

  const handleNavClick = (id) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    const onOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
    };
  }, [menuOpen]);

  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);

  return (
    <Header $scrolled={scrolled} id="navHeader" role="banner" ref={navRef}>
      <Nav aria-label="Main navigation">
        <Logo href="#home" aria-label="Granth Senjaliya Home" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}>
          <BrandMark />
          <LogoText>Granth<LogoDot>.</LogoDot></LogoText>
        </Logo>

        <NavLinks id={menuId} $isOpen={menuOpen} role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                href={`#${item.id}`}
                $isActive={activeSection === item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <MobileResumeWrap>
            <MobileResumeBtn onClick={() => { onOpenResume(); closeMenu(); }}>
              Resume
            </MobileResumeBtn>
          </MobileResumeWrap>
        </NavLinks>

        <Actions>
          <ResumeBtn onClick={onOpenResume} aria-label="Open Resume Preview">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Resume
          </ResumeBtn>
        </Actions>

        <Hamburger
          $isOpen={menuOpen}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          ref={hamburgerRef}
        >
          <span /><span /><span />
        </Hamburger>
      </Nav>
      {menuOpen && <Backdrop onClick={closeMenu} aria-hidden="true" />}
    </Header>
  );
}
