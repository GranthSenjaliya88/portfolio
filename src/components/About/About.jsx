import styled from "styled-components";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Container, SectionAlt } from "../UI/styled";

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

const TextBlock = styled.div``;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text2};
  margin-bottom: 1.1rem;
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 1.78;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const TagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.25rem;
`;

const TagPill = styled.span`
  font-size: 0.76rem;
  font-weight: 500;
  padding: 0.28rem 0.72rem;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.16);
  color: ${({ theme }) => theme.colors.text2};
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all 0.2s ${({ theme }) => theme.transitions.spring};

  &:hover {
    background: rgba(20, 184, 166, 0.16);
    color: ${({ theme }) => theme.colors.text};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1.15rem;
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    background: ${({ theme }) => theme.colors.bgCardHover};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const StatIcon = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.16);
  color: ${({ theme }) => theme.colors.accent};
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const StatSub = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.text3};
`;

const stats = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    label: "CSE Student",
    sub: "CHARUSAT · 2025 Batch",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    label: "Multiple Projects",
    sub: "Web, IoT & Electronics",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    label: "DSA Learner",
    sub: "Algorithms & Problem Solving",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="2"/>
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
      </svg>
    ),
    label: "IoT Enthusiast",
    sub: "Arduino · ESP32 · ESP8266",
  },
];

const tags = ["CHARUSAT", "CSE 2025", "Builder", "DSA", "IoT", "Web Dev"];

export default function About() {
  const textRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <SectionAlt id="about" aria-labelledby="about-heading">
      <Container>
        <SectionHeading tag="About Me" title="Who I Am" subtitle="A glimpse into my background & philosophy" />
        <AboutGrid>
          <TextBlock ref={textRef} className="reveal">
            <Paragraph>
              I am <strong>Granth Senjaliya</strong>, a Computer Science Engineering student at <strong>CHARUSAT</strong>. I am passionate about software development, data structures, web technologies, and IoT. I enjoy learning new technologies and building projects that solve real problems.
            </Paragraph>
            <Paragraph>
              Currently in my <strong>CSE 2025 batch</strong>, I am continuously levelling up — mastering algorithms, building web apps, and experimenting with embedded systems like Arduino and ESP32. I believe in clean code and solutions that truly matter.
            </Paragraph>
            <TagsWrap role="list" aria-label="Skills and interests">
              {tags.map((t) => (
                <TagPill key={t} role="listitem">{t}</TagPill>
              ))}
            </TagsWrap>
          </TextBlock>

          <StatsGrid ref={statsRef} className="reveal">
            {stats.map((s) => (
              <StatCard key={s.label}>
                <StatIcon aria-hidden="true">{s.icon}</StatIcon>
                <StatContent>
                  <StatLabel>{s.label}</StatLabel>
                  <StatSub>{s.sub}</StatSub>
                </StatContent>
              </StatCard>
            ))}
          </StatsGrid>
        </AboutGrid>
      </Container>
    </SectionAlt>
  );
}
