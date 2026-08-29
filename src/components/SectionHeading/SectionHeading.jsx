import styled from "styled-components";

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 2.75rem;
  }
`;

const Tag = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.tag};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.2);
  padding: 0.25rem 0.8rem;
  border-radius: ${({ theme }) => theme.radii.full};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.typography.h2};
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.035em;
  margin-bottom: 0.55rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text3};
  font-size: ${({ theme }) => theme.typography.body};
  max-width: 460px;
  margin: 0 auto;
  line-height: 1.65;
`;

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <Header>
      {tag && <Tag>{tag}</Tag>}
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Header>
  );
}
