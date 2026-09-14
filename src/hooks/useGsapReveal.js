import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(scopeRef) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Section Headings Animation
      gsap.utils.toArray(".section-heading").forEach((heading) => {
        if (heading.getBoundingClientRect().top < window.innerHeight) return;
        const kicker = heading.querySelector(".section-kicker");
        const title = heading.querySelector("h2");
        const desc = heading.querySelector("p");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            once: true,
          },
        });

        if (kicker) {
          tl.fromTo(kicker, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
        }
        if (title) {
          tl.fromTo(title, { opacity: 0, y: 30, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" }, "-=0.35");
        }
        if (desc) {
          tl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
        }
      });

      // 2. Generic GSAP Reveals (About copy, visual, etc.)
      gsap.utils.toArray(".about-copy, .about-visual").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      // 3. Fact cards staggered cascade
      const factsGrid = scopeRef.current?.querySelector(".facts-grid");
      if (factsGrid && factsGrid.getBoundingClientRect().top >= window.innerHeight) {
        gsap.fromTo(
          factsGrid.querySelectorAll(".fact-card"),
          { opacity: 0, y: 30, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: factsGrid, start: "top 90%", once: true },
          },
        );
      }

      // 4. Skills cards staggered cascade
      const skillsGrid = scopeRef.current?.querySelector(".skills-grid");
      if (skillsGrid && skillsGrid.getBoundingClientRect().top >= window.innerHeight) {
        gsap.fromTo(
          skillsGrid.querySelectorAll(".skill-card"),
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: skillsGrid, start: "top 88%", once: true },
          },
        );
      }

      // 5. Practice Band reveal
      const practiceBand = scopeRef.current?.querySelector(".practice-band");
      if (practiceBand && practiceBand.getBoundingClientRect().top >= window.innerHeight) {
        gsap.fromTo(
          practiceBand,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: practiceBand, start: "top 90%", once: true },
          },
        );
      }

      // 6. Project cards staggered cascade
      const projectList = scopeRef.current?.querySelector(".project-list");
      if (projectList && projectList.getBoundingClientRect().top >= window.innerHeight) {
        gsap.fromTo(
          projectList.querySelectorAll(".project-row"),
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: { trigger: projectList, start: "top 88%", once: true },
          },
        );
      }

      // 7. Education cards sequential cascade
      const educationStack = scopeRef.current?.querySelector(".education-stack, .timeline");
      if (educationStack) {
        educationStack.querySelectorAll(".education-card, .timeline-item").forEach((item) => {
          if (item.getBoundingClientRect().top < window.innerHeight) return;
          gsap.fromTo(
            item,
            { opacity: 0, y: 35, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 88%", once: true },
            },
          );
        });
      }

      // 8. Contact Section Left/Right smooth slide
      const contactGrid = scopeRef.current?.querySelector(".contact-grid");
      if (contactGrid && contactGrid.getBoundingClientRect().top >= window.innerHeight) {
        const details = contactGrid.querySelector(".contact-details");
        const form = contactGrid.querySelector(".contact-form");
        if (details) {
          gsap.fromTo(
            details,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: contactGrid, start: "top 85%", once: true },
            },
          );
        }
        if (form) {
          gsap.fromTo(
            form,
            { opacity: 0, x: 30, scale: 0.97 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: contactGrid, start: "top 85%", once: true },
            },
          );
        }
      }

      // 9. Parallax depth on background orbs & portrait
      const portrait = scopeRef.current?.querySelector(".about-portrait");
      if (portrait) {
        gsap.to(portrait, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: portrait, start: "top bottom", end: "bottom top", scrub: 0.5 },
        });
      }

      const heroBg = scopeRef.current?.querySelector(".hero-bg");
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 20,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 0.5 },
        });
      }
    }, scopeRef);

    return () => media.revert();
  }, [scopeRef]);
}
