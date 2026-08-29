import { useEffect, useRef } from "react";
import styled from "styled-components";
import { loaderPopAnim } from "../../styles/GlobalStyles";

const LoaderOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
`;

const LoaderInner = styled.div`
  text-align: center;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  animation: ${loaderPopAnim} 0.6s ${({ theme }) => theme.transitions.spring} forwards;
  filter: drop-shadow(0 0 20px rgba(20, 184, 166, 0.4));
`;

const LoaderName = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text3};
  letter-spacing: 0.03em;
  margin-bottom: 1.25rem;
`;

const BarWrap = styled.div`
  width: 140px;
  height: 2.5px;
  background: rgba(20, 184, 166, 0.12);
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  margin: 0 auto 0.75rem;
`;

const Fill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  width: 0;
  transition: width 0.05s linear;
`;

const Pct = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.typography.xs};
  color: ${({ theme }) => theme.colors.text3};
`;

const BrandSVG = () => (
  <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="gsLoadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="14" fill="#06142d" />
    <rect x="1.5" y="1.5" width="45" height="45" rx="12.5" fill="url(#gsLoadGrad)" fillOpacity="0.12" stroke="url(#gsLoadGrad)" strokeWidth="1.5" />
    <path d="M 23 15 H 17 C 13.5 15 13.5 24 17 24 H 23 V 20" stroke="url(#gsLoadGrad)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 31 33 H 25 C 21.5 33 21.5 24 25 24 H 31 C 34.5 24 34.5 15 31 15 H 25" stroke="#F8FAFC" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Loader({ onLoaded }) {
  const fillRef = useRef(null);
  const pctRef = useRef(null);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 18;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      if (fillRef.current) fillRef.current.style.width = `${progress}%`;
      if (pctRef.current) pctRef.current.textContent = `${Math.floor(progress)}%`;
    }, 80);

    const onLoad = () => {
      clearInterval(interval);
      if (fillRef.current) fillRef.current.style.width = "100%";
      if (pctRef.current) pctRef.current.textContent = "100%";
      setTimeout(onLoaded, 500);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", onLoad);
    };
  }, [onLoaded]);

  return (
    <LoaderOverlay aria-hidden="true" role="presentation">
      <LoaderInner>
        <LogoWrap><BrandSVG /></LogoWrap>
        <LoaderName>Granth Senjaliya</LoaderName>
        <BarWrap>
          <Fill ref={fillRef} />
        </BarWrap>
        <Pct ref={pctRef}>0%</Pct>
      </LoaderInner>
    </LoaderOverlay>
  );
}
