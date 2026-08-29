import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing.container};
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPy} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sectionPyMobile} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3.5rem 0;
  }
`;

export const SectionAlt = styled(Section)`
  background: ${({ theme }) => theme.colors.bg2};
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradients.full};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: 600;
  letter-spacing: -0.005em;
  transition: all ${({ theme }) => theme.transitions.default};
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  border: none;
  font-family: inherit;
  text-decoration: none;

  &:active {
    transform: scale(0.97);
  }

  svg {
    flex-shrink: 0;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  &:hover svg.arrow {
    transform: translateX(4px);
  }

  ${({ $variant, theme }) =>
    $variant === "primary" &&
    css`
      background: ${theme.gradients.primary};
      color: #ffffff;
      border: 1px solid rgba(20, 184, 166, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.glow};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === "secondary" &&
    css`
      background: rgba(6, 182, 212, 0.08);
      color: ${theme.colors.accentSky};
      border: 1px solid rgba(6, 182, 212, 0.2);

      &:hover {
        background: rgba(6, 182, 212, 0.15);
        border-color: rgba(6, 182, 212, 0.4);
        transform: translateY(-2px);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === "outline" &&
    css`
      background: transparent;
      color: ${theme.colors.text2};
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        border-color: rgba(20, 184, 166, 0.4);
        color: ${theme.colors.text};
        background: rgba(20, 184, 166, 0.06);
        transform: translateY(-2px);
      }
    `}

  ${({ $size }) =>
    $size === "lg" &&
    css`
      padding: 0.9rem 1.8rem;
      font-size: 0.95rem;
    `}

  ${({ $size }) =>
    $size === "sm" &&
    css`
      padding: 0.42rem 0.9rem;
      font-size: 0.8rem;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: 600;
  letter-spacing: -0.005em;
  transition: all ${({ theme }) => theme.transitions.default};
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  border: none;
  font-family: inherit;
  text-decoration: none;

  &:active {
    transform: scale(0.97);
  }

  svg {
    flex-shrink: 0;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  &:hover svg.arrow {
    transform: translateX(4px);
  }

  ${({ $variant, theme }) =>
    $variant === "primary" &&
    css`
      background: ${theme.gradients.primary};
      color: #ffffff;
      border: 1px solid rgba(20, 184, 166, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.glow};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === "secondary" &&
    css`
      background: rgba(6, 182, 212, 0.08);
      color: ${theme.colors.accentSky};
      border: 1px solid rgba(6, 182, 212, 0.2);

      &:hover {
        background: rgba(6, 182, 212, 0.15);
        border-color: rgba(6, 182, 212, 0.4);
        transform: translateY(-2px);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === "outline" &&
    css`
      background: transparent;
      color: ${theme.colors.text2};
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        border-color: rgba(20, 184, 166, 0.4);
        color: ${theme.colors.text};
        background: rgba(20, 184, 166, 0.06);
        transform: translateY(-2px);
      }
    `}

  ${({ $size }) =>
    $size === "lg" &&
    css`
      padding: 0.9rem 1.8rem;
      font-size: 0.95rem;
    `}

  ${({ $size }) =>
    $size === "sm" &&
    css`
      padding: 0.42rem 0.9rem;
      font-size: 0.8rem;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

export const SkipLink = styled.a`
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 99999;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg};
  padding: 0.5rem 1rem;
  border-radius: 0 0 ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md};
  font-weight: 700;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

export const SectionCta = styled.div`
  text-align: center;
  margin-top: 2.75rem;
`;
