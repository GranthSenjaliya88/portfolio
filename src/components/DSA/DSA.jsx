import styled from "styled-components";
import { dsaTopics } from "../../data/dsaTopics";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Container, Section } from "../UI/styled";
import { blinkAnim } from "../../styles/GlobalStyles";

const DsaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const TerminalCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const TermHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  &.red { background: #ff5f57; }
  &.yellow { background: #febc2e; }
  &.green { background: #28c840; }
`;

const TermTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.text3};
  margin-left: 0.5rem;
`;

const TermBody = styled.div`
  padding: 1.25rem 1.35rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.82rem;
  line-height: 1.8;
  background: rgba(4, 13, 26, 0.6);
`;

const CodeLine = styled.div`
  white-space: pre-wrap;
`;

const CodeComment = styled.span`
  color: #5a6373;
  font-style: italic;
`;

const CodeKw = styled.span`
  color: #c792ea;
  font-weight: 600;
`;

const CodeStr = styled.span`
  color: #c3e88d;
`;

const CodeVar = styled.span`
  color: #80deea;
`;

const CodeFn = styled.span`
  color: #82aaff;
  font-weight: 600;
`;

const CodeNum = styled.span`
  color: #f78c6c;
`;

const BlinkingCursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background: ${({ theme }) => theme.colors.accentSky};
  vertical-align: middle;
  animation: ${blinkAnim} 1.1s step-end infinite;
`;

const RightCol = styled.div``;

const PlatformCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1.15rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: 1.25rem;
  transition: all ${({ theme }) => theme.transitions.default};
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const PlatformLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(255, 161, 22, 0.08);
  color: #ffa11a;
`;

const PlatformInfo = styled.div`
  h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.15rem;
  }

  p {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.text3};
  }
`;

const PlatformLink = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 0.3rem;
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TopicItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.45rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text2};
  transition: all 0.22s ${({ theme }) => theme.transitions.spring};

  svg {
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }

  &:hover {
    border-color: rgba(20, 184, 166, 0.3);
    color: ${({ theme }) => theme.colors.text};
    transform: translateX(3px);
  }
`;

const TopicIcon = ({ type }) => {
  const icons = {
    list: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    link: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    search: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    sort: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/>
      </svg>
    ),
    twoptr: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
    recurse: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
      </svg>
    ),
    wave: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    tree: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 1-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function DSA() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <Section id="dsa" aria-labelledby="dsa-heading">
      <Container>
        <SectionHeading tag="Coding" title="DSA & Problem Solving" subtitle="Core computer science fundamentals & problem solving" />
        <DsaGrid>
          <div ref={leftRef} className="reveal">
            <TerminalCard>
              <TermHeader aria-hidden="true">
                <Dot className="red"/><Dot className="yellow"/><Dot className="green"/>
                <TermTitle>problem_solve.cpp</TermTitle>
              </TermHeader>
              <TermBody role="img" aria-label="Code snippet showing DSA practice in C++">
                <CodeLine><CodeComment>{"// Actively practicing DSA"}</CodeComment></CodeLine>
                <CodeLine><CodeKw>#include</CodeKw> <CodeStr>&lt;bits/stdc++.h&gt;</CodeStr></CodeLine>
                <CodeLine><CodeKw>using namespace</CodeKw> <CodeVar>std</CodeVar>;</CodeLine>
                <CodeLine>&nbsp;</CodeLine>
                <CodeLine><CodeComment>{"// Topics covered:"}</CodeComment></CodeLine>
                <CodeLine><CodeComment>{"// Arrays · Strings · Linked Lists"}</CodeComment></CodeLine>
                <CodeLine><CodeComment>{"// Sorting · Searching · Two Pointers"}</CodeComment></CodeLine>
                <CodeLine><CodeComment>{"// Recursion · Stack · Queue"}</CodeComment></CodeLine>
                <CodeLine>&nbsp;</CodeLine>
                <CodeLine><CodeKw>int</CodeKw> <CodeFn>main</CodeFn>() {"{"}</CodeLine>
                <CodeLine>&nbsp;&nbsp;<CodeVar>keep_learning</CodeVar>();</CodeLine>
                <CodeLine>&nbsp;&nbsp;<CodeKw>return</CodeKw> <CodeNum>0</CodeNum>;</CodeLine>
                <CodeLine>{"}"}</CodeLine>
                <CodeLine><BlinkingCursor aria-hidden="true" /></CodeLine>
              </TermBody>
            </TerminalCard>
          </div>

          <RightCol ref={rightRef} className="reveal">
            <PlatformCard href="https://leetcode.com/u/Granth88/" target="_blank" rel="noopener noreferrer">
              <PlatformLogo aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </PlatformLogo>
              <PlatformInfo>
                <h4>LeetCode Profile</h4>
                <p>Practicing algorithmic problem solving</p>
                <PlatformLink>View Profile →</PlatformLink>
              </PlatformInfo>
            </PlatformCard>

            <TopicsGrid role="list" aria-label="DSA topics covered">
              {dsaTopics.map((t) => (
                <TopicItem key={t.id} role="listitem">
                  <TopicIcon type={t.iconType} />
                  <span>{t.label}</span>
                </TopicItem>
              ))}
            </TopicsGrid>
          </RightCol>
        </DsaGrid>
      </Container>
    </Section>
  );
}
