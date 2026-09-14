import { ArrowDownRight, Binary, CircuitBoard, Code2, Cpu, Globe, GraduationCap, Layers, Workflow, Zap } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE · CHARUSAT (2022–2026)" },
  { icon: Code2, label: "Software Engineering", value: "C, C++, Java, JavaScript, Full-Stack Web" },
  { icon: CircuitBoard, label: "Embedded & IoT", value: "ESP32, ESP8266, Arduino & Sensor Systems" },
  { icon: Workflow, label: "CS Fundamentals", value: "DSA, OOP, OS & Database Management" },
];

export default function About() {
  return (
    <section id="about" className="section-shell about-section" aria-labelledby="about-title">
      <SectionHeading
        index="01"
        eyebrow="Engineering Philosophy"
        title={<><span id="about-title">Engineering mindset.</span><br />Hands-on implementation.</>}
        description="Bridging core computer science fundamentals with practical embedded systems and responsive web engineering."
      />

      <div className="about-grid">
        {/* ── Left Column: Engineering Narrative ── */}
        <div className="about-copy gsap-reveal">
          <p className="about-lead display-type">
            Turning <em>software algorithms and hardware logic into reliable, practical digital systems.</em>
          </p>
          <div className="about-body">
            <p>
              At CHARUSAT University, my academic foundation is anchored in fundamental computer science: data structures, algorithmic design, object-oriented programming, operating systems, database management, and digital electronics.
            </p>
            <p>
              Beyond the classroom, I engineer connected IoT prototypes with ESP32 microcontrollers and build responsive web applications. I focus on clean architecture, understanding low-level system constraints, and writing maintainable code that solves practical problems.
            </p>
          </div>
          <a className="text-link group" href="#projects">
            Explore engineering projects <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>

        {/* ── Right Column: Animated Engineering System Architecture Console ── */}
        <div className="about-visual gsap-reveal">
          <div className="about-architecture-card">
            <div className="about-arch-head">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-purple-400" />
                <span className="tech-type text-xs font-bold text-gray-200 uppercase tracking-wider">
                  Full-Stack &amp; Embedded Flow
                </span>
              </div>
              <div className="flex items-center gap-1.5 tech-type text-[10px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Loop
              </div>
            </div>

            <div className="about-arch-layers">
              {/* Layer 1: Web Interface */}
              <div className="arch-layer-box arch-layer-box--web group">
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                    <Globe size={14} className="group-hover:rotate-12 transition-transform" /> 01 · Web &amp; Interface Layer
                  </span>
                  <span className="tech-type text-[10px] text-gray-400">Frontend / UI</span>
                </div>
                <p className="text-xs text-gray-300 m-0">
                  Responsive UI, Semantic HTML5, CSS3, DOM Logic &amp; REST Integration
                </p>
              </div>

              {/* Animated Connector 1 */}
              <div className="arch-connector">
                <span className="arch-connector-line" />
                <span className="tech-type text-[9px] text-purple-400 uppercase tracking-wider flex items-center gap-1">
                  <Zap size={10} className="animate-bounce" /> Signals &amp; APIs
                </span>
                <span className="arch-connector-line" />
              </div>

              {/* Layer 2: Core Algorithmic Logic */}
              <div className="arch-layer-box arch-layer-box--logic group">
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
                    <Binary size={14} className="group-hover:scale-110 transition-transform" /> 02 · Algorithmic Core
                  </span>
                  <span className="tech-type text-[10px] text-gray-400">DSA &amp; Logic</span>
                </div>
                <p className="text-xs text-gray-300 m-0">
                  Data Structures, OOP Design Patterns, Memory Efficiency &amp; Optimization
                </p>
              </div>

              {/* Animated Connector 2 */}
              <div className="arch-connector">
                <span className="arch-connector-line" />
                <span className="tech-type text-[9px] text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Zap size={10} className="animate-bounce" /> GPIO / Hardware Bus
                </span>
                <span className="arch-connector-line" />
              </div>

              {/* Layer 3: Embedded & Hardware */}
              <div className="arch-layer-box arch-layer-box--iot group">
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Cpu size={14} className="group-hover:rotate-45 transition-transform" /> 03 · Embedded &amp; Hardware Layer
                  </span>
                  <span className="tech-type text-[10px] text-gray-400">ESP32 / Digital</span>
                </div>
                <p className="text-xs text-gray-300 m-0">
                  ESP32 Microcontrollers, Sensors, Digital Electronics &amp; Relay Matrix
                </p>
              </div>
            </div>

            <div className="about-arch-foot">
              <span className="tech-type text-[11px] text-gray-400">
                Philosophy: Understand Fundamentals → Build Reliable Systems
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4-Pillar Capability Grid with Interactive Hover ── */}
      <div className="facts-grid gsap-reveal">
        {facts.map(({ icon: Icon, label, value }) => (
          <article className="fact-card group" key={label}>
            <Icon size={22} strokeWidth={1.75} className="group-hover:scale-110 group-hover:text-cyan-300 transition-all" />
            <div>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
