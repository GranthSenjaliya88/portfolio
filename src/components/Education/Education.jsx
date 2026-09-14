import { ArrowUpRight, CheckCircle2, GraduationCap, School, Sparkles } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { educationItems } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="section-shell journey-section" aria-labelledby="journey-title">
      <SectionHeading
        index="04"
        eyebrow="Academic Journey"
        title={<><span id="journey-title">Continuous learning.</span><br />Hands-on practice.</>}
        description="Formal computer science education and the hands-on engineering running alongside it."
      />

      <div className="journey-layout">
        {/* Academic Progression Cards */}
        <div className="education-stack">
          {educationItems.map((item) => {
            const isActive = item.status === "active";
            return (
              <article
                className="education-card gsap-reveal"
                data-active={isActive}
                key={item.id}
              >
                <div className="education-card-header">
                  <div className="education-card-icon-wrap">
                    {item.type === "university" ? (
                      <GraduationCap size={22} className="text-purple-400" />
                    ) : (
                      <School size={20} className="text-blue-400" />
                    )}
                  </div>
                  <div className="education-card-title-group">
                    <div className="education-header-top">
                      <h3 className="display-type education-institution">
                        {item.institution}
                      </h3>
                      <span className="education-date-badge tech-type">
                        {item.period}
                      </span>
                    </div>
                    <p className="education-degree-text">
                      {item.degree} · <span className="text-gray-300">{item.field}</span>
                    </p>
                  </div>
                </div>

                <div className="education-card-body">
                  <div className="education-status-row">
                    <span className="education-status-pill tech-type">
                      {isActive ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-emerald-300">{item.statusLabel}</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={13} className="text-cyan-400" />
                          <span className="text-cyan-300">{item.statusLabel}</span>
                        </>
                      )}
                    </span>
                    <span className="education-batch-badge tech-type">
                      {item.batch}
                    </span>
                  </div>

                  {item.highlights?.length > 0 && (
                    <ul className="education-tags" aria-label={`${item.institution} key coursework`}>
                      {item.highlights.map((highlight) => (
                        <li className="education-tag-pill tech-type" key={highlight}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Aside Theory & Practice Card */}
        <aside className="journey-aside gsap-reveal">
          <div className="journey-aside-icon">
            <School size={38} strokeWidth={1.6} />
          </div>
          <span className="tech-type journey-aside-kicker">
            <Sparkles size={14} className="text-pink-400" /> Continuous Practice
          </span>
          <h3 className="display-type">
            Theory becomes useful when it survives contact with a project.
          </h3>
          <p>
            Coursework, algorithmic problem solving, web engineering, and embedded IoT builds all live in the same continuous loop: understand concepts, build implementations, test constraints, and refine.
          </p>
          <a
            href="https://leetcode.com/u/Granth88/"
            target="_blank"
            rel="noreferrer"
            className="journey-aside-btn"
          >
            <GraduationCap size={18} /> Problem-Solving Profile <ArrowUpRight size={17} />
          </a>
        </aside>
      </div>
    </section>
  );
}
