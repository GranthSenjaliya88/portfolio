import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "about", "skills", "projects", "education", "contact"];

export function useActiveNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const checkActive = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      // Bottom edge check (activate contact)
      if (scrollY + viewportHeight >= scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // Top edge check (activate home)
      if (scrollY < 80) {
        setActiveSection("home");
        return;
      }

      // Active evaluation line: 120px from top (right below navbar in active viewing area)
      const threshold = Math.min(160, Math.max(100, viewportHeight * 0.22));

      let matched = null;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Section is in viewing focus if its top is at or above threshold, and its bottom is still below threshold
        if (rect.top <= threshold && rect.bottom > threshold) {
          matched = id;
          break;
        }
      }

      // If no exact match (e.g. between boundaries or fast scrolling), fallback to the lowest passed section
      if (!matched) {
        for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTION_IDS[i]);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            matched = SECTION_IDS[i];
            break;
          }
        }
      }

      if (matched) {
        setActiveSection(matched);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkActive();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", checkActive);

    const timer = setInterval(checkActive, 200);
    const stopTimer = setTimeout(() => clearInterval(timer), 2000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", checkActive);
      clearInterval(timer);
      clearTimeout(stopTimer);
    };
  }, []);

  return activeSection;
}
