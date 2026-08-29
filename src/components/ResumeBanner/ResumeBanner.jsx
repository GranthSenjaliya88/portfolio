import styled from "styled-components";
import { Container, Section, Button, ButtonLink } from "../UI/styled";

const BannerCard = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 3rem 3.5rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.75rem 1.25rem;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: min(500px, 90vw);
  height: 350px;
  background: radial-gradient(ellipse, rgba(20, 184, 166, 0.08) 0%, transparent 70%);
  pointer-events: none;
`;

const IconWrap = styled.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 auto;
  }
`;

const TextCol = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;

  p {
    color: ${({ theme }) => theme.colors.text2};
    font-size: 0.9rem;
    line-height: 1.65;
  }
`;

const BannerTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.4rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;

    button, a {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default function ResumeBanner({ onOpenResume }) {
  return (
    <Section id="resume" aria-labelledby="resume-banner-heading">
      <Container>
        <BannerCard>
          <GlowEffect aria-hidden="true" />
          <IconWrap aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </IconWrap>
          <TextCol>
            <BannerTitle id="resume-banner-heading">Professional Resume</BannerTitle>
            <p>Explore my detailed academic record, project achievements, technical competencies, and background.</p>
          </TextCol>
          <Actions>
            <Button
              $variant="secondary"
              type="button"
              onClick={onOpenResume}
              aria-label="View Interactive Resume"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
              View Interactive Resume
            </Button>
            <ButtonLink
              $variant="primary"
              href={`${import.meta.env.BASE_URL}Granth_Senjaliya_Resume.pdf`}
              download="Granth_Senjaliya_Resume.pdf"
              aria-label="Download PDF Resume"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF Resume
            </ButtonLink>
          </Actions>
        </BannerCard>
      </Container>
    </Section>
  );
}
