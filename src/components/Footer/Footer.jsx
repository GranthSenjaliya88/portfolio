import styled from "styled-components";
import { Container } from "../UI/styled";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "dsa", label: "DSA" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const FooterElem = styled.footer`
  background: ${({ theme }) => theme.colors.bgDark};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3.5rem 0 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.5rem 0 1.5rem;
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const BrandCol = styled.div``;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
  width: fit-content;

  &:hover {
    opacity: 0.85;
  }
`;

const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const Dot = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const Tagline = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text3};
  margin-bottom: 0.4rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Bio = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text3};
  line-height: 1.65;
  max-width: 240px;
`;

const NavCol = styled.div``;

const ColTitle = styled.h3`
  font-size: 0.72rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text2};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.85rem;
`;

const LinksList = styled.ul``;

const FooterLink = styled.a`
  font-size: 0.83rem;
  color: ${({ theme }) => theme.colors.text3};
  display: block;
  padding: 0.2rem 0;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    transform: translateX(3px);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const CopyText = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.text3};
`;

const LocationText = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text3};
`;

const BrandMark = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="gsFootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6"/>
        <stop offset="50%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#22d3ee"/>
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="#06142d"/>
    <rect x="1.5" y="1.5" width="45" height="45" rx="11" fill="url(#gsFootGrad)" fillOpacity="0.15" stroke="url(#gsFootGrad)" strokeWidth="1.5"/>
    <path d="M 23 15 H 17 C 13.5 15 13.5 24 17 24 H 23 V 20" stroke="url(#gsFootGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 31 33 H 25 C 21.5 33 21.5 24 25 24 H 31 C 34.5 24 34.5 15 31 15 H 25" stroke="#F8FAFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FooterElem id="footerMain">
      <Container>
        <FooterTop>
          <BrandCol>
            <Logo href="#home" aria-label="Granth Senjaliya - Home" onClick={(e) => { e.preventDefault(); handleNav("home"); }}>
              <BrandMark />
              <LogoText>Granth<Dot>.</Dot></LogoText>
            </Logo>
            <Tagline>CSE Student · Developer · Builder</Tagline>
            <Bio>Turning concepts into code and hardware into smart systems.</Bio>
          </BrandCol>

          <NavCol>
            <ColTitle>Navigation</ColTitle>
            <LinksList>
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <FooterLink
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(l.id);
                    }}
                  >
                    {l.label}
                  </FooterLink>
                </li>
              ))}
            </LinksList>
          </NavCol>

          <NavCol>
            <ColTitle>Connect</ColTitle>
            <LinksList>
              <li><FooterLink href="https://github.com/GranthSenjaliya88" target="_blank" rel="noopener noreferrer">GitHub</FooterLink></li>
              <li><FooterLink href="https://leetcode.com/u/Granth88/" target="_blank" rel="noopener noreferrer">LeetCode</FooterLink></li>
              <li><FooterLink href="mailto:granthsenjaliya881@gmail.com">Email</FooterLink></li>
              <li><FooterLink href="tel:+919825106122">Phone</FooterLink></li>
            </LinksList>
          </NavCol>
        </FooterTop>
      </Container>
      <Divider aria-hidden="true" />
      <Container>
        <FooterBottom>
          <CopyText>© {new Date().getFullYear()} Granth Senjaliya. All rights reserved.</CopyText>
          <LocationText>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Gujarat, India
          </LocationText>
        </FooterBottom>
      </Container>
    </FooterElem>
  );
}
