import { useEffect, useRef } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      el.classList.add("visible");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(el.dataset.revealDelay || 0);
            setTimeout(() => el.classList.add("visible"), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px", ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
