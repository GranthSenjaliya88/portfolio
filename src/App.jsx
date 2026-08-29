import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { SkipLink } from "./components/UI/styled";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import DSA from "./components/DSA/DSA";
import Education from "./components/Education/Education";
import ResumeBanner from "./components/ResumeBanner/ResumeBanner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ResumeModal from "./components/ResumeModal/ResumeModal";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

import { useActiveNav } from "./hooks/useActiveNav";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const activeSection = useActiveNav();
  const resumeOpenerRef = useRef(null);

  const openResume = (e) => {
    if (e?.currentTarget) resumeOpenerRef.current = e.currentTarget;
    setResumeOpen(true);
  };
  const closeResume = () => setResumeOpen(false);

  useEffect(() => {
    document.title = "Granth Senjaliya | CSE Student & Developer";
  }, []);

  if (!loaded) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Loader onLoaded={() => setLoaded(true)} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <ScrollProgress />
      <Navbar activeSection={activeSection} onOpenResume={openResume} />
      <main id="main-content">
        <Hero onOpenResume={openResume} />
        <About />
        <Skills />
        <Projects />
        <DSA />
        <Education />
        <ResumeBanner onOpenResume={openResume} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ResumeModal isOpen={resumeOpen} onClose={closeResume} openerRef={resumeOpenerRef} />
    </ThemeProvider>
  );
}
