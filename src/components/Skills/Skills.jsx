import { Braces, CircuitBoard, Code2, PenTool, Wrench } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { skillCategories } from "../../data/skills";

const categoryIcons = { programming: Code2, webdev: Braces, iot: CircuitBoard, tools: Wrench };
const marquee = ["C++", "Java", "JavaScript", "ESP32", "Arduino", "DSA", "Git", "Figma", "HTML5", "CSS3"];

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-marquee" aria-hidden="true">
        <div>{[...marquee, ...marquee].map((item, index) => <span className="display-type" key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div>
      </div>

      <div className="section-shell">
        <SectionHeading index="03" eyebrow="Toolkit" title={<><span id="skills-title">Fundamentals first.</span><br />Tools with purpose.</>} description="A growing toolkit across programming, the web, and connected hardware—supported by regular problem-solving practice." />

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] || PenTool;
            return (
              <article className="skill-card gsap-reveal" key={category.id}>
                <div className="skill-card-head"><span className="tech-type">0{index + 1}</span><Icon size={25} strokeWidth={1.6} /></div>
                <h3 className="display-type">{category.title}</h3>
                <ul>{category.skills.map((skill) => <li key={skill.name}><span>{skill.name}</span><i style={{ backgroundColor: skill.color }} /></li>)}</ul>
              </article>
            );
          })}
        </div>

        <div className="practice-band gsap-reveal">
          <div><span className="tech-type">Current practice</span><h3 className="display-type">Data structures & algorithms</h3></div>
          <p>Arrays · Strings · Linked Lists · Searching · Sorting · Two Pointers · Recursion · Stack · Queue · Trees</p>
          <a href="https://leetcode.com/u/Granth88/" target="_blank" rel="noreferrer">LeetCode <ArrowUpRightIcon /></a>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg>;
}
