import { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 2.5px;
  background: ${({ theme }) => theme.gradients.progress};
  z-index: 9999;
  transition: width 0.1s linear;
  pointer-events: none;
`;

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <ProgressBar
      style={{ width: `${width}%` }}
      role="progressbar"
      aria-valuenow={Math.round(width)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
