import { ArrowDownRight, CircuitBoard, Code2, GraduationCap, Workflow } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import profileWebp from "../../assets/images/granth-profile.webp";

const facts = [
  { icon: GraduationCap, label: "CSE student", value: "CHARUSAT · 2025 Batch" },
  { icon: Code2, label: "Software", value: "C · C++ · Java · Web" },
  { icon: CircuitBoard, label: "Hardware", value: "Arduino · ESP32 · Sensors" },
  { icon: Workflow, label: "Practice", value: "DSA · Problem Solving" },
];

export default function About() {
  return (
    <section id="about" className="section-shell about-section" aria-labelledby="about-title">
      <SectionHeading index="01" eyebrow="About" title={<><span id="about-title">Curious by nature.</span><br />Practical by choice.</>} description="I learn the fastest when an idea becomes something real—code you can use, hardware you can touch, and systems you can understand." />

      <div className="about-grid">
        <div className="about-copy gsap-reveal">
          <p className="about-lead display-type">I’m Granth, a Computer Science Engineering student who enjoys working where <em>software meets the physical world.</em></p>
          <div className="about-body">
            <p>At CHARUSAT, I’m building strong foundations in data structures, algorithms, web technologies, and digital electronics. Outside class, I experiment with Arduino and ESP32 systems and turn problems into small, useful projects.</p>
            <p>My approach is simple: understand the system, make the logic clear, and keep improving the result. I care about clean code, thoughtful interfaces, and technology that solves an actual problem.</p>
          </div>
          <a className="text-link" href="#projects">See how that looks in practice <ArrowDownRight size={18} /></a>
        </div>

        <div className="about-visual gsap-reveal">
          <div className="about-image-wrap">
            <img className="about-portrait" src={profileWebp} alt="Granth Senjaliya in a mountain landscape" loading="lazy" width="768" height="1024" />
            <span className="tech-type about-image-label">Portrait / Himachal</span>
          </div>
          <div className="about-stamp display-type">Build<br />to learn</div>
        </div>
      </div>

      <div className="facts-grid gsap-reveal">
        {facts.map(({ icon: Icon, label, value }, index) => (
          <article className="fact-card" key={label}>
            <span className="tech-type fact-index">0{index + 1}</span>
            <Icon size={24} strokeWidth={1.7} />
            <div><strong>{label}</strong><span>{value}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
