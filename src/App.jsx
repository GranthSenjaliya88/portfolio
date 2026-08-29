import { lazy, Suspense, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader/Loader";
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

function Portfolio() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const activeSection = useActiveNav();
  const scopeRef = useRef(null);
  useGsapReveal(scopeRef);

  return (
    <motion.div
      ref={scopeRef}
      className="new-portfolio-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .55, ease: "easeOut" }}
    >
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Navbar activeSection={activeSection} onOpenResume={() => setResumeOpen(true)} />
      <main id="main-content">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer onOpenResume={() => setResumeOpen(true)} />
      <BackToTop />
      <Suspense fallback={null}>
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </Suspense>
    </motion.div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <Loader key="loader" onLoaded={() => setLoaded(true)} />
      ) : (
        <Portfolio key="portfolio" />
      )}
    </AnimatePresence>
  );
}
