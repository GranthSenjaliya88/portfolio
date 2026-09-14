import { Braces, CircuitBoard, Code2, PenTool, Wrench } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { skillCategories } from "../../data/skills";

const categoryIcons = { programming: Code2, webdev: Braces, iot: CircuitBoard, tools: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Technical Stack"
          title={<><span id="skills-title">Core technologies.</span><br />Practical tools.</>}
          description="A structured skill set spanning low-level programming, web engineering, and connected embedded hardware."
        />

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] || PenTool;
            return (
              <article
                className="skill-card group gsap-reveal"
                data-category={category.id}
                key={category.id}
              >
                {/* Glowing Top Shimmer Beam */}
                <div className="skill-card-beam" aria-hidden="true" />

                <div className="skill-card-head">
                  <span className="tech-type skill-card-num">
                    0{index + 1} <span className="text-gray-500">/</span> {category.title}
                  </span>
                  <div className="skill-card-icon-wrap">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="display-type">{category.title}</h3>

                <ul>
                  {category.skills.map((skill) => (
                    <li
                      className="skill-pill group/pill"
                      key={skill.name}
                      style={{ "--skill-color": skill.color || "#818CF8" }}
                    >
                      <span
                        className="skill-pill-dot"
                        style={{ backgroundColor: skill.color || "#818CF8", color: skill.color || "#818CF8" }}
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="practice-band gsap-reveal">
          <div>
            <span className="tech-type">Problem Solving</span>
            <h3 className="display-type">Data Structures &amp; Algorithms</h3>
          </div>
          <p>
            Continuous practice across Arrays, Strings, Linked Lists, Trees, Two Pointers, Stacks, Queues, and Recursion.
          </p>
          <a href="https://leetcode.com/u/Granth88/" target="_blank" rel="noreferrer" className="group">
            LeetCode Profile <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}
