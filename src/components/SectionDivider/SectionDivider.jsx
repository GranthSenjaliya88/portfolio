export default function SectionDivider({ accent = "purple" }) {
  const gradientMap = {
    purple: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.6) 30%, rgba(236,72,153,0.8) 50%, rgba(6,182,212,0.6) 70%, transparent 100%)",
    cyan:   "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.6) 30%, rgba(16,185,129,0.8) 50%, rgba(139,92,246,0.6) 70%, transparent 100%)",
    orange: "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.6) 30%, rgba(236,72,153,0.8) 50%, rgba(245,158,11,0.6) 70%, transparent 100%)",
    pink:   "linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.6) 30%, rgba(139,92,246,0.8) 50%, rgba(6,182,212,0.6) 70%, transparent 100%)",
  };

  const gradient = gradientMap[accent] || gradientMap.purple;

  return (
    <div className="section-divider-wrap" aria-hidden="true">
      <div className="section-divider-glow" style={{ background: gradient }} />
      <div className="section-divider-line" style={{ background: gradient }} />
      <div className="section-divider-beam" />
    </div>
  );
}
