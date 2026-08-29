import styled, { css } from "styled-components";
import { projects } from "../../data/projects";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTilt } from "../../hooks/useTilt";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Container, SectionAlt, SectionCta, ButtonLink } from "../UI/styled";
import { nodePulseAnim, shimmerAnim } from "../../styles/GlobalStyles";

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.32s ${({ theme }) => theme.transitions.spring};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  ${({ $isFeatured }) =>
    $isFeatured &&
    css`
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: stretch;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-column: 1;
        grid-template-columns: 1fr;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

const ImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  height: 240px;
  flex: 1;
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.55s ${({ theme }) => theme.transitions.spring};

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }

  ${({ $visualType }) =>
    $visualType === "iot" &&
    css`
      background: linear-gradient(135deg, #040d1a, #06203a);
    `}

  ${({ $visualType }) =>
    $visualType === "web" &&
    css`
      background: linear-gradient(135deg, #071428, #052636);
    `}

  ${({ $visualType }) =>
    $visualType === "elec" &&
    css`
      background: linear-gradient(135deg, #040d1a, #1a0b2e);
    `}

  ${({ $isFeatured }) =>
    $isFeatured &&
    css`
      height: 100%;
      min-height: 280px;
    `}
`;

const ImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(4, 13, 26, 0.4), transparent);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const NumBadge = styled.div`
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  z-index: 5;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text3};
  background: rgba(4, 13, 26, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.18rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  backdrop-filter: blur(8px);
`;

const FeaturedTag = styled.div`
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  z-index: 5;
  background: ${({ theme }) => theme.gradients.primary};
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.22rem 0.65rem;
  border-radius: ${({ theme }) => theme.radii.full};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Content = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.15rem;
  }
`;

const CategoryTag = styled.div`
  font-size: ${({ theme }) => theme.typography.tag};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.text3};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.28;
  letter-spacing: -0.02em;
`;

const Desc = styled.p`
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.text2};
  line-height: 1.65;
`;

const WwhBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.85rem 0.95rem;
  background: rgba(6, 20, 45, 0.6);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const WwhItem = styled.div`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.text2};
  line-height: 1.5;

  strong {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.68rem;
    color: ${({ theme }) => theme.colors.accentSky};
    background: rgba(6, 182, 212, 0.08);
    border: 1px solid rgba(6, 182, 212, 0.2);
    padding: 0.08rem 0.38rem;
    border-radius: 0.25rem;
    letter-spacing: 0.04em;
    margin-right: 0.35rem;
  }
`;

const TagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
`;

const Tag = styled.span`
  font-size: ${({ theme }) => theme.typography.tag};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};
  padding: 0.2rem 0.55rem;
  border-radius: ${({ theme }) => theme.radii.full};
  letter-spacing: 0.03em;

  ${({ $type }) =>
    $type === "iot" &&
    css`
      background: rgba(6, 182, 212, 0.08);
      color: #22d3ee;
      border: 1px solid rgba(6, 182, 212, 0.2);
    `}

  ${({ $type }) =>
    $type === "web" &&
    css`
      background: rgba(251, 191, 36, 0.08);
      color: #fbbf24;
      border: 1px solid rgba(251, 191, 36, 0.2);
    `}

  ${({ $type }) =>
    $type === "elec" &&
    css`
      background: rgba(168, 85, 247, 0.08);
      color: #c084fc;
      border: 1px solid rgba(168, 85, 247, 0.2);
    `}
`;

const Actions = styled.div`
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  align-items: center;
`;

const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.42rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.78rem;
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.default};
  text-decoration: none;

  ${({ $variant, theme }) =>
    $variant === "github" &&
    css`
      background: rgba(255, 255, 255, 0.04);
      color: ${theme.colors.text2};
      border: 1px solid rgba(255, 255, 255, 0.08);

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        color: ${theme.colors.text};
        border-color: rgba(255, 255, 255, 0.18);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === "demo" &&
    css`
      background: rgba(20, 184, 166, 0.08);
      color: ${theme.colors.accent};
      border: 1px solid rgba(20, 184, 166, 0.2);

      &:hover {
        background: rgba(20, 184, 166, 0.18);
        border-color: ${theme.colors.accent};
      }
    `}
`;

const TypePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.74rem;
  color: ${({ theme }) => theme.colors.text3};
  padding: 0.42rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

/* ── Custom Visuals ──────────────────────── */

const IotWrap = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  z-index: 2;
`;

const IotNode = styled.div`
  position: absolute;
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: ${({ theme }) => theme.colors.accentSky};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.64rem;
  font-weight: 700;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  white-space: nowrap;
  animation: ${nodePulseAnim} 3.5s ease-in-out infinite;

  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(20, 184, 166, 0.15);
    border-color: rgba(20, 184, 166, 0.45);
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.72rem;
  }

  &.top {
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0.5s;
  }

  &.right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    animation-delay: 1s;
  }

  &.bottom {
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 1.5s;
  }

  &.left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    animation-delay: 2s;
  }
`;

const IotSvgLines = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function IotVisual() {
  return (
    <IotWrap aria-hidden="true">
      <IotNode className="center">ESP32</IotNode>
      <IotNode className="top">Voice</IotNode>
      <IotNode className="right">Wi-Fi</IotNode>
      <IotNode className="bottom">Relay</IotNode>
      <IotNode className="left">Device</IotNode>
      <IotSvgLines viewBox="0 0 200 200">
        <line x1="100" y1="100" x2="100" y2="40" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 2" opacity="0.6"/>
        <line x1="100" y1="100" x2="155" y2="100" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 2" opacity="0.6"/>
        <line x1="100" y1="100" x2="100" y2="160" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 2" opacity="0.6"/>
        <line x1="100" y1="100" x2="45" y2="100" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 2" opacity="0.6"/>
      </IotSvgLines>
    </IotWrap>
  );
}

const WebWrap = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.55rem;
  width: 240px;
  overflow: hidden;
`;

const BrowserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 0.7rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;

  &.red { background: #ff5f57; }
  &.yellow { background: #febc2e; }
  &.green { background: #28c840; }
`;

const BrowserUrl = styled.span`
  margin-left: 0.4rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.63rem;
  color: ${({ theme }) => theme.colors.text3};
  flex: 1;
  text-align: center;
`;

const BrowserBody = styled.div`
  padding: 0.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ShimmerLine = styled.div`
  height: 7px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: rgba(255, 255, 255, 0.045);
  animation: ${shimmerAnim} 2.5s ease-in-out infinite;
  width: ${({ $width }) => $width || "100%"};
`;

const BrowserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3rem;
`;

const BrowserBlock = styled.div`
  height: 28px;
  background: rgba(20, 184, 166, 0.06);
  border: 1px solid rgba(20, 184, 166, 0.1);
  border-radius: 0.35rem;
  animation: ${shimmerAnim} 2.5s ease-in-out infinite;
`;

function WebVisual() {
  return (
    <WebWrap aria-hidden="true">
      <BrowserBar>
        <Dot className="red"/><Dot className="yellow"/><Dot className="green"/>
        <BrowserUrl>farmer-guide.local</BrowserUrl>
      </BrowserBar>
      <BrowserBody>
        <ShimmerLine $width="90%"/>
        <ShimmerLine $width="65%"/>
        <BrowserGrid>
          <BrowserBlock/><BrowserBlock/><BrowserBlock/>
        </BrowserGrid>
        <ShimmerLine $width="40%"/>
      </BrowserBody>
    </WebWrap>
  );
}

const ElecWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  z-index: 2;
`;

const SegWrap = styled.div`
  display: flex;
  gap: 0.45rem;
`;

const ElecLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.63rem;
  color: ${({ theme }) => theme.colors.accentSky};
  letter-spacing: 0.06em;
`;

function ElecVisual() {
  return (
    <ElecWrap aria-hidden="true">
      <SegWrap>
        <svg viewBox="0 0 60 90" width="50" height="75">
          <rect x="8" y="2" width="44" height="8" rx="4" fill="#06B6D4" opacity="0.9"/>
          <rect x="2" y="8" width="8" height="36" rx="4" fill="#7C3AED" opacity="0.7"/>
          <rect x="50" y="8" width="8" height="36" rx="4" fill="#7C3AED" opacity="0.9"/>
          <rect x="8" y="41" width="44" height="8" rx="4" fill="#06B6D4" opacity="0.8"/>
          <rect x="2" y="46" width="8" height="36" rx="4" fill="#06B6D4" opacity="0.6"/>
          <rect x="50" y="46" width="8" height="36" rx="4" fill="#06B6D4" opacity="0.9"/>
          <rect x="8" y="80" width="44" height="8" rx="4" fill="#7C3AED" opacity="0.7"/>
        </svg>
        <svg viewBox="0 0 60 90" width="50" height="75">
          <rect x="8" y="2" width="44" height="8" rx="4" fill="#06B6D4" opacity="0.5"/>
          <rect x="2" y="8" width="8" height="36" rx="4" fill="#7C3AED" opacity="0.9"/>
          <rect x="50" y="8" width="8" height="36" rx="4" fill="#7C3AED" opacity="0.6"/>
          <rect x="8" y="41" width="44" height="8" rx="4" fill="#06B6D4" opacity="0.9"/>
          <rect x="2" y="46" width="8" height="36" rx="4" fill="#06B6D4" opacity="0.9"/>
          <rect x="50" y="46" width="8" height="36" rx="4" fill="#06B6D4" opacity="0.4"/>
          <rect x="8" y="80" width="44" height="8" rx="4" fill="#7C3AED" opacity="0.9"/>
        </svg>
      </SegWrap>
      <ElecLabel>CD4026 Counter</ElecLabel>
    </ElecWrap>
  );
}

const visualMap = { iot: IotVisual, web: WebVisual, elec: ElecVisual };

function ProjectItem({ project, isFeatured }) {
  const cardRef = useTilt();
  const revealRef = useScrollReveal();
  const Visual = visualMap[project.visualType] || (() => null);

  const setRefs = (node) => {
    cardRef.current = node;
    revealRef.current = node;
  };

  return (
    <ProjectCard ref={setRefs} $isFeatured={isFeatured} className="reveal" aria-label={project.title}>
      <ImageWrap>
        <ImageBox $visualType={project.visualType} $isFeatured={isFeatured}>
          <ImgOverlay aria-hidden="true" />
          <Visual />
        </ImageBox>
        <NumBadge aria-hidden="true">{String(project.id).padStart(2, "0")}</NumBadge>
        {isFeatured && <FeaturedTag>Featured</FeaturedTag>}
      </ImageWrap>

      <Content>
        <CategoryTag>{project.category}</CategoryTag>
        <Title>{project.title}</Title>
        <Desc>{project.description}</Desc>
        <WwhBox>
          <WwhItem><strong>WHAT:</strong> {project.what}</WwhItem>
          <WwhItem><strong>WHY:</strong> {project.why}</WwhItem>
          <WwhItem><strong>HOW:</strong> {project.how}</WwhItem>
        </WwhBox>
        <TagsWrap>
          {project.tags.map((t) => (
            <Tag key={t} $type={project.tagType}>{t}</Tag>
          ))}
        </TagsWrap>
        <Actions>
          {project.githubUrl && (
            <ActionBtn $variant="github" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View Code
            </ActionBtn>
          )}
          {project.liveUrl && (
            <ActionBtn $variant="demo" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </ActionBtn>
          )}
          <TypePill>
            {project.typeIcon === "hardware" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              </svg>
            )}
            {project.typeLabel}
          </TypePill>
        </Actions>
      </Content>
    </ProjectCard>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal();
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionAlt id="projects" aria-labelledby="projects-heading">
      <Container>
        <div ref={headingRef} className="reveal">
          <SectionHeading tag="Projects" title="What I Have Built" subtitle="Real-world applications engineered for impact" />
        </div>
        <ProjectsGrid>
          {featured && <ProjectItem project={featured} isFeatured={true} />}
          {others.map((p) => (
            <ProjectItem key={p.id} project={p} isFeatured={false} />
          ))}
        </ProjectsGrid>
        <SectionCta>
          <ButtonLink
            $variant="outline"
            href="https://github.com/GranthSenjaliya88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </ButtonLink>
        </SectionCta>
      </Container>
    </SectionAlt>
  );
}
