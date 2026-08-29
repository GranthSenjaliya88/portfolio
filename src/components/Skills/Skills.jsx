import styled from "styled-components";
import { skillCategories } from "../../data/skills";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTilt } from "../../hooks/useTilt";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Container, Section } from "../UI/styled";

const CategoriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.75rem;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.35rem;
  }
`;

const CatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`;

const CatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.2);
  color: ${({ theme }) => theme.colors.accent};
`;

const CatTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.55rem;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  padding: 0.95rem 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  min-width: 0;
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;
  cursor: default;

  &:hover {
    background: rgba(20, 184, 166, 0.08);
    border-color: rgba(20, 184, 166, 0.35);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(20, 184, 166, 0.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.75rem 0.65rem;
  }
`;

const LogoBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  transition: transform ${({ theme }) => theme.transitions.default};

  ${Card}:hover & {
    transform: translateY(-2px) scale(1.06);
  }
`;

const SkillName = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text3};
  text-align: center;
  transition: color 0.2s;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Shine = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, 0.05) 50%, transparent 62%);
  transform: translateX(-100%);
  transition: transform 0.55s ease;
  pointer-events: none;

  ${Card}:hover & {
    transform: translateX(100%);
  }
`;

const categoryIcons = {
  programming: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  webdev: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  iot: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  tools: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

function SkillIcon({ skill }) {
  const color = skill.color || "#14b8a6";
  const label = skill.label || skill.name.slice(0, 5);

  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill={color} fillOpacity="0.15"/>
      <text x="18" y="23" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fontWeight="700" fill={color}>
        {label}
      </text>
    </svg>
  );
}

function SkillCardItem({ skill }) {
  const tiltRef = useTilt();

  return (
    <Card ref={tiltRef} aria-label={skill.name}>
      <LogoBox>
        <SkillIcon skill={skill} />
      </LogoBox>
      <SkillName>{skill.name}</SkillName>
      <Shine aria-hidden="true" />
    </Card>
  );
}

function CategoryBlock({ cat }) {
  const catRef = useScrollReveal();

  return (
    <CategoryCard ref={catRef} className="reveal">
      <CatHeader>
        <CatIcon aria-hidden="true">{categoryIcons[cat.id]}</CatIcon>
        <CatTitle id={`skills-${cat.id}`}>{cat.title}</CatTitle>
      </CatHeader>
      <Grid role="list" aria-labelledby={`skills-${cat.id}`}>
        {cat.skills.map((skill) => (
          <div key={skill.name} role="listitem">
            <SkillCardItem skill={skill} />
          </div>
        ))}
      </Grid>
    </CategoryCard>
  );
}

export default function Skills() {
  const headingRef = useScrollReveal();

  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <Container>
        <div ref={headingRef} className="reveal">
          <SectionHeading tag="Skills" title="My Tech Stack" subtitle="Authentic tools & technologies I engineer with" />
        </div>
        <CategoriesWrap>
          {skillCategories.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} />
          ))}
        </CategoriesWrap>
      </Container>
    </Section>
  );
}
