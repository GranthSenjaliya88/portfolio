import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(scopeRef) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray(".gsap-reveal, .project-row").forEach((element) => {
        // Do not hide content that is already visible in the prerendered page.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        gsap.fromTo(
          element,
          { opacity: .65, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 94%", once: true },
          },
        );
      });

    }, scopeRef);
    media.add("(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const portrait = scopeRef.current?.querySelector(".about-portrait");
      if (portrait) {
        gsap.to(portrait, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: portrait, start: "top bottom", end: "bottom top", scrub: .4 },
        });
      }
    }, scopeRef);

    return () => media.revert();
  }, [scopeRef]);
}
