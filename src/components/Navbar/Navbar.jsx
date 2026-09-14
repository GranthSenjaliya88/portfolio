import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about",     label: "About"     },
  { id: "skills",    label: "Skills"    },
  { id: "projects",  label: "Projects"  },
  { id: "education", label: "Education" },
  { id: "contact",   label: "Contact"   },
];

export default function Navbar({ activeSection, onOpenResume }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    const closeOnEscape  = (e) => { if (e.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); } };
    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className={`editorial-nav fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${scrolled ? "nav-glass" : ""}`}>
      <nav className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12" aria-label="Main navigation">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-left"
          onClick={() => setMenuOpen(false)}
          aria-label="Granth Senjaliya, home"
        >
          <span className="nav-logo-mark">GS</span>
          <span className="hidden leading-none sm:block">
            <span className="display-type block text-sm font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
              Granth Senjaliya
            </span>
            <span className="tech-type mt-0.5 block text-[9px] tracking-[.16em] uppercase" style={{ color: "var(--text-4)" }}>
              Engineer · Builder
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="signal-link tech-type text-[11px] font-bold uppercase tracking-[.14em]"
                data-active={activeSection === item.id}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                <span className="mr-1.5" style={{ color: "var(--text-4)" }}>0{index + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="./Granth_Senjaliya_Resume.pdf"
            onClick={onOpenResume}
            className="nav-resume-btn"
          >
            <FileText size={15} /> Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          ref={menuButtonRef}
          className="mobile-menu-btn lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: .98 }}
            transition={{ duration: .22, ease: [.22, 1, .36, 1] }}
            className="absolute inset-x-3 top-[80px] lg:hidden"
          >
            {NAV_ITEMS.map((item, index) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                onClick={() => setMenuOpen(false)}
                className="mobile-menu-link"
              >
                {item.label}
                <span className="tech-type text-[10px]" style={{ color: "var(--text-4)" }}>0{index + 1}</span>
              </a>
            ))}
            <a
              href="./Granth_Senjaliya_Resume.pdf"
              onClick={(e) => { setMenuOpen(false); onOpenResume(e); }}
              className="mobile-resume-btn"
            >
              <FileText size={15} /> Open Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
