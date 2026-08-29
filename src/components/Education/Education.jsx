import styled, { css } from "styled-components";
import { educationItems } from "../../data/education";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Container, SectionAlt } from "../UI/styled";
import { dotPulse2Anim } from "../../styles/GlobalStyles";

const Timeline = styled.div`
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  padding-left: 2.75rem;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.gradients.timeline};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 2.25rem;
    max-width: 100%;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 1.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -2.55rem;
  top: 1.5rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgCardSolid};
  border: 2px solid ${({ theme }) => theme.colors.text3};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      border-color: ${theme.colors.accent};
      background: rgba(20, 184, 166, 0.2);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: -2.05rem;
  }
`;

const PulseDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${dotPulse2Anim} 2.5s ease-in-out infinite;
`;

const TimelineCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1.4rem;
  transition: all 0.3s ${({ theme }) => theme.transitions.spring};
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    transform: translateX(5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      border-left-color: ${theme.colors.accent};
    `}
`;

const YearBadge = styled.div`
  position: absolute;
  top: 1.15rem;
  right: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text3};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.18rem 0.55rem;
  border-radius: ${({ theme }) => theme.radii.full};
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const IconBox = styled.div`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.18);
  color: ${({ theme }) => theme.colors.accent};
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
`;

const DegreeType = styled.span`
  font-size: 0.74rem;
  color: ${({ theme }) => theme.colors.text3};
  font-weight: 500;
`;

const StatusPill = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.tag};
  font-weight: 700;
  padding: 0.16rem 0.55rem;
  border-radius: ${({ theme }) => theme.radii.full};
  letter-spacing: 0.05em;
  width: fit-content;

  ${({ $status, theme }) =>
    $status === "active"
      ? css`
          background: rgba(52, 211, 153, 0.1);
          color: ${theme.colors.accentEmerald};
          border: 1px solid rgba(52, 211, 153, 0.25);
        `
      : css`
          background: rgba(148, 163, 184, 0.05);
          color: ${theme.colors.text3};
          border: 1px solid rgba(148, 163, 184, 0.12);
        `}
`;

const Institution = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
`;

const FieldName = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text2};
  margin-bottom: 0.15rem;
`;

const BatchInfo = styled.p`
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.text3};
  font-family: ${({ theme }) => theme.fonts.mono};
  margin-bottom: 0.65rem;

  strong {
    color: ${({ theme }) => theme.colors.accentEmerald};
  }
`;

const HighlightsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const EduTag = styled.span`
  font-size: ${({ theme }) => theme.typography.tag};
  font-weight: 600;
  padding: 0.16rem 0.5rem;
  background: rgba(20, 184, 166, 0.06);
  border: 1px solid rgba(20, 184, 166, 0.14);
  color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.full};
`;

const UniversityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const SchoolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export default function Education() {
  const headingRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  return (
    <SectionAlt id="education" aria-labelledby="education-heading">
      <Container>
        <div ref={headingRef} className="reveal">
          <SectionHeading tag="Education" title="Academic Journey" subtitle="Verified academic qualifications" />
        </div>
        <Timeline ref={timelineRef} className="reveal" role="list" aria-label="Education timeline">
          {educationItems.map((item) => (
            <TimelineItem key={item.id} role="listitem">
              <TimelineDot $isActive={item.status === "active"} aria-hidden="true">
                {item.status === "active" && <PulseDot />}
              </TimelineDot>
              <div>
                <TimelineCard $isActive={item.status === "active"}>
                  <YearBadge>{item.period}</YearBadge>
                  <ItemHeader>
                    <IconBox aria-hidden="true">
                      {item.type === "university" ? <UniversityIcon /> : <SchoolIcon />}
                    </IconBox>
                    <Meta>
                      <DegreeType>{item.degree}</DegreeType>
                      <StatusPill $status={item.status}>{item.statusLabel}</StatusPill>
                    </Meta>
                  </ItemHeader>
                  <Institution>{item.institution}</Institution>
                  <FieldName>{item.field}</FieldName>
                  <BatchInfo>
                    {item.score ? (
                      <>
                        {item.batch.split(":")[0]}: <strong>{item.score}</strong>
                      </>
                    ) : (
                      item.batch
                    )}
                  </BatchInfo>
                  {item.highlights.length > 0 && (
                    <HighlightsWrap role="list" aria-label="Areas of study">
                      {item.highlights.map((h) => (
                        <EduTag key={h} role="listitem">{h}</EduTag>
                      ))}
                    </HighlightsWrap>
                  )}
                </TimelineCard>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </SectionAlt>
  );
}
