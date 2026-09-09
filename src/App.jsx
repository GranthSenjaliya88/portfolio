import { lazy, Suspense, useCallback, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import { useActiveNav } from "./hooks/useActiveNav";
import { useGsapReveal } from "./hooks/useGsapReveal";

const ResumeModal = lazy(() => import("./components/ResumeModal/ResumeModal"));

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const returnFocusRef = useRef(null);
  const activeSection = useActiveNav();
  const scopeRef = useRef(null);
  useGsapReveal(scopeRef);
  const openResume = useCallback((event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    returnFocusRef.current = event.currentTarget;
    setResumeOpen(true);
  }, []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  return (
    <MotionConfig reducedMotion="user">
    <div ref={scopeRef} className="new-portfolio-shell">
      <div inert={resumeOpen || undefined}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SmoothScroll paused={resumeOpen} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar activeSection={activeSection} onOpenResume={openResume} />
      <main id="main-content" tabIndex={-1}>
        <Hero onOpenResume={openResume} />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer onOpenResume={openResume} />
      <BackToTop />
      </div>
      <Suspense fallback={null}>
        {resumeOpen && <ResumeModal isOpen onClose={closeResume} returnFocusRef={returnFocusRef} />}
      </Suspense>
    </div>
    </MotionConfig>
  );
}
