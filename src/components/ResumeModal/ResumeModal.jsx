import { useEffect, useRef } from "react";
import styled from "styled-components";
import { scaleInAnim, fadeUpAnim } from "../../styles/GlobalStyles";
import { ButtonLink } from "../UI/styled";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9001;
  background: ${({ theme }) => theme.colors.bgModalOverlay};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: ${scaleInAnim} 0.25s ${({ theme }) => theme.transitions.spring};

  @media print {
    position: static;
    background: none;
    backdrop-filter: none;
    padding: 0;
    display: block;
  }
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.bg2};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  width: 100%;
  max-width: 720px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.75);
  animation: ${fadeUpAnim} 0.3s ${({ theme }) => theme.transitions.spring};

  @media print {
    background: #ffffff !important;
    color: #111827 !important;
    border: none !important;
    box-shadow: none !important;
    max-height: none !important;
    max-width: 100% !important;
    border-radius: 0 !important;
    display: block !important;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.75rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  gap: 1rem;
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.06), transparent);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media print {
    border-bottom: 2px solid #14b8a6;
    padding: 0 0 1rem 0;
    background: none;
  }
`;

const HeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};

  @media print {
    color: #0f172a !important;
    font-size: 1.8rem;
  }
`;

const HeaderSub = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.text3};
  margin-top: 0.2rem;

  @media print {
    color: #475569 !important;
    font-size: 0.9rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media print {
    display: none !important;
  }
`;

const PrintButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text2};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all 0.2s;
  background: none;
  cursor: pointer;

  &:hover {
    border-color: rgba(20, 184, 166, 0.3);
    color: ${({ theme }) => theme.colors.text};
    background: rgba(20, 184, 166, 0.08);
  }
`;

const CloseButton = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.text3};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.errorBg};
    border-color: rgba(239, 68, 68, 0.3);
    color: ${({ theme }) => theme.colors.error};
  }
`;

const Body = styled.div`
  overflow-y: auto;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media print {
    padding: 1rem 0;
    overflow: visible;
    gap: 1rem;
  }
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text2};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      text-decoration: underline;
    }
  }

  @media print {
    color: #334155 !important;
    gap: 0.5rem 1rem;

    svg {
      color: #0f766e !important;
    }

    a {
      color: #0f766e !important;
      text-decoration: none;
    }
  }
`;

const SectionBlock = styled.section``;

const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid rgba(20, 184, 166, 0.15);

  @media print {
    color: #0f766e !important;
    border-bottom: 1px solid #cbd5e1 !important;
    font-size: 0.85rem;
  }
`;

const EduRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-bottom: 0.55rem;
  font-size: 0.85rem;

  strong {
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ theme }) => theme.colors.text3};
    font-size: 0.78rem;
  }

  @media print {
    strong {
      color: #0f172a !important;
    }
    span {
      color: #64748b !important;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem 1.5rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.text2};

  strong {
    color: ${({ theme }) => theme.colors.text3};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }

  @media print {
    color: #334155 !important;
    strong {
      color: #0f172a !important;
    }
  }
`;

const ProjRow = styled.div`
  margin-bottom: 0.75rem;
  font-size: 0.85rem;

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.15rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text2};
  }

  @media print {
    strong {
      color: #0f172a !important;
    }
    p {
      color: #334155 !important;
    }
  }
`;

const Note = styled.p`
  font-size: 0.74rem;
  color: ${({ theme }) => theme.colors.text3};
  font-style: italic;
  text-align: center;

  @media print {
    display: none;
  }
`;

export default function ResumeModal({ isOpen, onClose, openerRef }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const el = dialogRef.current;
    if (!el) return;

    const focusable = el.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    setTimeout(() => closeRef.current?.focus(), 60);

    const trap = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", trap);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", trap);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen && openerRef?.current) openerRef.current.focus();
  }, [isOpen, openerRef]);

  if (!isOpen) return null;

  return (
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="resume-dialog-title"
      ref={dialogRef}
      id="resume-dialog-overlay"
    >
      <Modal role="document">
        <Header>
          <div>
            <HeaderTitle id="resume-dialog-title">Granth Senjaliya</HeaderTitle>
            <HeaderSub>CSE Student · CHARUSAT · Gujarat, India</HeaderSub>
          </div>
          <HeaderActions>
            <ButtonLink
              $variant="primary"
              $size="sm"
              href={`${import.meta.env.BASE_URL}Granth_Senjaliya_Resume.pdf`}
              download="Granth_Senjaliya_Resume.pdf"
              aria-label="Download PDF Resume"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </ButtonLink>
            <PrintButton onClick={() => window.print()} aria-label="Print resume">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
              Print
            </PrintButton>
            <CloseButton onClick={onClose} ref={closeRef} aria-label="Close resume preview">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </CloseButton>
          </HeaderActions>
        </Header>

        <Body>
          <ContactRow>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              granthsenjaliya881@gmail.com
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.84 2 2 0 0 1 3.62 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"/></svg>
              +91 98251 06122
            </span>
            <span>
              <a href="https://github.com/GranthSenjaliya88" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
            <span>
              <a href="https://leetcode.com/u/Granth88/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </span>
          </ContactRow>

          <SectionBlock aria-labelledby="r-edu-title">
            <SectionTitle id="r-edu-title">Education</SectionTitle>
            <EduRow>
              <strong>Bachelor of Engineering – Computer Science</strong>
              <span>CHARUSAT · 2022–Present (2025 Batch)</span>
            </EduRow>
            <EduRow>
              <strong>12th – Science Stream (GSEB)</strong>
              <span>Aspire Public School · 2023–2025</span>
            </EduRow>
            <EduRow>
              <strong>10th – GSEB · 87%</strong>
              <span>Aspire Public School · Passed 2023</span>
            </EduRow>
          </SectionBlock>

          <SectionBlock aria-labelledby="r-skills-title">
            <SectionTitle id="r-skills-title">Technical Skills</SectionTitle>
            <SkillsGrid>
              <div><strong>Languages:</strong> C, C++, Java, JavaScript</div>
              <div><strong>Web:</strong> HTML5, CSS3, JavaScript</div>
              <div><strong>IoT/HW:</strong> Arduino, ESP32, ESP8266, Sensors</div>
              <div><strong>DSA:</strong> Arrays, Linked Lists, Sorting, Searching, Recursion, Stack, Queue, Trees</div>
              <div><strong>Tools:</strong> Git, GitHub, VS Code, Figma, Arduino IDE</div>
            </SkillsGrid>
          </SectionBlock>

          <SectionBlock aria-labelledby="r-proj-title">
            <SectionTitle id="r-proj-title">Projects</SectionTitle>
            <ProjRow>
              <strong>ESP32 Voice Controlled Home Automation</strong>
              <p>IoT-based home automation using ESP32 and voice commands over Wi-Fi with relay switching.</p>
            </ProjRow>
            <ProjRow>
              <strong>Farmer Guide Website</strong>
              <p>Gujarati-language farming guide covering crops, pest management, fertilizers, and government schemes.</p>
            </ProjRow>
            <ProjRow>
              <strong>Digital Voting System</strong>
              <p>Hardware vote counter using CD4026 IC, logic gates, push buttons, and 7-segment displays.</p>
            </ProjRow>
          </SectionBlock>

          <Note>For the official PDF version, click the Download button above.</Note>
        </Body>
      </Modal>
    </Overlay>
  );
}
