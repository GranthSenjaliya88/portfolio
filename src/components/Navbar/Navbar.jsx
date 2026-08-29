import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "education", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`editorial-nav fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${scrolled ? "nav-glass" : ""}`}>
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12" aria-label="Main navigation">
        <button className="group flex items-center gap-3 text-left" onClick={() => goTo("home")} aria-label="Granth Senjaliya, home">
          <span className="display-type grid size-10 place-items-center rounded-full border-2 border-current text-base transition-transform duration-300 group-hover:rotate-[-10deg]">GS</span>
          <span className="hidden leading-none sm:block">
            <span className="display-type block text-sm font-extrabold uppercase tracking-[-.03em]">Granth Senjaliya</span>
            <span className="tech-type mt-1 block text-[9px] uppercase tracking-[.18em] opacity-60">Engineer / Builder</span>
          </span>
        </button>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.id}>
              <button className="signal-link tech-type text-[11px] font-bold uppercase tracking-[.14em]" data-active={activeSection === item.id} onClick={() => goTo(item.id)}>
                <span className="mr-1.5 opacity-40">0{index + 1}</span>{item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={onOpenResume} className="tech-type flex items-center gap-2 rounded-full border border-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition-colors hover:bg-black hover:text-white">
            <FileText size={14} /> Resume
          </button>
          <a href="mailto:granthsenjaliya881@gmail.com" className="grid size-10 place-items-center rounded-full bg-[var(--signal)] text-white transition-transform hover:rotate-12" aria-label="Email Granth">
            <ArrowUpRight size={18} />
          </a>
        </div>

        <button className="grid size-11 place-items-center rounded-full border border-black/25 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="absolute inset-x-3 top-[76px] rounded-2xl border border-black/15 bg-[var(--ink)] p-4 text-[var(--paper)] shadow-2xl lg:hidden">
            {NAV_ITEMS.map((item, index) => (
              <button key={item.id} onClick={() => goTo(item.id)} className="display-type flex w-full items-center justify-between border-b border-white/15 px-2 py-4 text-2xl uppercase last:border-0">
                {item.label}<span className="tech-type text-[10px] opacity-50">0{index + 1}</span>
              </button>
            ))}
            <button onClick={() => { setMenuOpen(false); onOpenResume(); }} className="tech-type mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--signal)] px-4 py-4 text-xs font-bold uppercase tracking-[.14em]">
              <FileText size={16} /> Open resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
