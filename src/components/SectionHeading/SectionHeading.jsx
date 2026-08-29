export default function SectionHeading({ index, eyebrow, title, description, light = false }) {
  return (
    <header className={`section-heading gsap-reveal ${light ? "section-heading--light" : ""}`}>
      <div className="section-kicker tech-type">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-grid">
        <h2 className="display-type">{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}
