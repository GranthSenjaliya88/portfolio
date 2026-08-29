import { useEffect, useState, useCallback } from "react";

const SECTIONS = ["home", "about", "skills", "projects", "dsa", "education", "contact"];

export function useActiveNav() {
  const [activeSection, setActiveSection] = useState("home");

  const updateActive = useCallback(() => {
    const pos = window.scrollY + 120;
    let current = "home";
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  return activeSection;
}
