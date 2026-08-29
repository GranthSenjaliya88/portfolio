import { ArrowUpRight, BookOpen, Check, School } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { educationItems } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="section-shell journey-section" aria-labelledby="journey-title">
      <SectionHeading light index="04" eyebrow="Journey" title={<><span id="journey-title">Still learning.</span><br />Always making.</>} description="My formal education and the hands-on practice running alongside it." />

      <div className="journey-layout">
        <div className="timeline">
          {educationItems.map((item, index) => (
            <article className="timeline-item gsap-reveal" key={item.id}>
              <div className="timeline-marker"><span>{item.status === "active" ? <BookOpen size={17} /> : <Check size={17} />}</span></div>
              <div className="timeline-date tech-type">{item.period}</div>
              <div className="timeline-content">
                <span className="tech-type timeline-status">{item.statusLabel}</span>
                <h3 className="display-type">{item.institution}</h3>
                <p>{item.degree} · {item.field}</p>
                <small>{item.batch}</small>
                {item.highlights?.length > 0 && <ul>{item.highlights.map((highlight) => <li className="tech-type" key={highlight}>{highlight}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>

        <aside className="journey-aside gsap-reveal">
          <div className="journey-aside-icon"><School size={34} strokeWidth={1.4} /></div>
          <span className="tech-type">Learning log / Active</span>
          <h3 className="display-type">Theory becomes useful when it survives contact with a project.</h3>
          <p>That is why my coursework, LeetCode practice, web experiments, and embedded builds all live in the same loop: understand, implement, test, improve.</p>
          <a href="https://leetcode.com/u/Granth88/" target="_blank" rel="noreferrer">View problem-solving profile <ArrowUpRight size={17} /></a>
        </aside>
      </div>
    </section>
  );
}
