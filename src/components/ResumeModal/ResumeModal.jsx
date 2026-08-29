import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => event.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="resume-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
          <motion.div className="resume-dialog" role="dialog" aria-modal="true" aria-labelledby="resume-title" initial={{ opacity: 0, y: 40, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: .98 }} transition={{ ease: [.16, 1, .3, 1] }}>
            <div className="resume-dialog-head">
              <div><span className="tech-type">Résumé / Profile</span><h2 id="resume-title" className="display-type">Granth Senjaliya</h2></div>
              <button ref={closeRef} onClick={onClose} aria-label="Close resume"><X /></button>
            </div>
            <div className="resume-dialog-body">
              <p className="resume-intro">Computer Science Engineering student at CHARUSAT, focused on programming, web development, data structures, and connected hardware.</p>
              <div className="resume-columns">
                <div><span className="tech-type resume-label">Education</span><strong>CHARUSAT University</strong><p>Bachelor of Engineering · Computer Science</p><small>2022—Present · 2025 Batch</small></div>
                <div><span className="tech-type resume-label">Core stack</span><p>C · C++ · Java · JavaScript · HTML5 · CSS3 · Arduino · ESP32 · Git · Figma</p></div>
              </div>
              <div><span className="tech-type resume-label">Selected work</span><ol className="resume-project-list"><li>ESP32 Voice Controlled Home Automation</li><li>Farmer Guide Website</li><li>Digital Voting System</li></ol></div>
            </div>
            <div className="resume-dialog-actions">
              <a href={`${import.meta.env.BASE_URL}Granth_Senjaliya_Resume.pdf`} download><Download size={17} /> Download PDF</a>
              <a href={`${import.meta.env.BASE_URL}Granth_Senjaliya_Resume.pdf`} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Open PDF</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
