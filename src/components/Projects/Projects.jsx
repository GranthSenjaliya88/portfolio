import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Cpu, GitBranch, Globe, Radio, Sparkles, Terminal, Wifi, Zap } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { projects } from "../../data/projects";

function ProjectVisual({ project }) {
  const [{ relays, log }, setController] = useState({
    relays: { r1: true, r2: true, r3: false, r4: false },
    log: { pin: 22, name: "Lights", state: "HIGH" },
  });
  const [votes, setVotes] = useState({ a: 0, b: 1 });
  const [activeCrop, setActiveCrop] = useState(0);

  const toggleRelay = (key, pin, name) => {
    setController((prev) => {
      const nextState = !prev.relays[key];
      return {
        relays: { ...prev.relays, [key]: nextState },
        log: { pin, name, state: nextState ? "HIGH" : "LOW" },
      };
    });
  };

  if (project.visualType === "iot") {
    return (
      <div className="project-visual group" aria-label="ESP32 IoT Home Automation Controller Interface">
        <div className="iot-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="animate-pulse" /><span /><span />
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <Wifi size={12} className="text-cyan-400 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ESP32 Node · Serial Monitor
            </div>
          </div>

          <div className="font-mono text-[11px] text-gray-300 space-y-1.5 my-2.5">
            <p className="text-gray-400 flex items-center gap-1.5">
              <Terminal size={12} className="text-purple-400" />
              &gt; Voice Input Module: Initialized
            </p>
            <p className="text-cyan-300">
              &gt; Command: &quot;Toggle {log.name}&quot;
            </p>
            <p className="text-emerald-400 flex items-center gap-1 font-bold">
              &gt; GPIO {log.pin}: {log.state} ({log.name} relay state changed)
              <span className="terminal-cursor-blink">_</span>
            </p>
          </div>

          {/* Interactive Clickable Relay Boxes */}
          <div className="iot-relays-grid">
            <button
              type="button"
              onClick={() => toggleRelay("r1", 22, "Lights")}
              className="relay-card group/relay text-left cursor-pointer"
              data-active={relays.r1}
              aria-label="Toggle Relay 1 Lights"
            >
              <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                <Zap size={11} className={relays.r1 ? "text-amber-400 animate-bounce" : "text-gray-500"} />
                Relay 1 · Lights
              </span>
              <span className={`text-[10px] font-bold uppercase flex items-center gap-1 ${relays.r1 ? "text-emerald-400" : "text-gray-500"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${relays.r1 ? "bg-emerald-400 animate-pulse" : "bg-gray-600"}`} />
                {relays.r1 ? "ACTIVE" : "STANDBY"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => toggleRelay("r2", 23, "Fan")}
              className="relay-card group/relay text-left cursor-pointer"
              data-active={relays.r2}
              aria-label="Toggle Relay 2 Fan"
            >
              <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                <Zap size={11} className={relays.r2 ? "text-cyan-400 animate-bounce" : "text-gray-500"} />
                Relay 2 · Fan
              </span>
              <span className={`text-[10px] font-bold uppercase flex items-center gap-1 ${relays.r2 ? "text-emerald-400" : "text-gray-500"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${relays.r2 ? "bg-emerald-400 animate-pulse" : "bg-gray-600"}`} />
                {relays.r2 ? "ACTIVE" : "STANDBY"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => toggleRelay("r3", 19, "Appliance")}
              className="relay-card group/relay text-left cursor-pointer"
              data-active={relays.r3}
              aria-label="Toggle Relay 3 Appliance"
            >
              <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                <Zap size={11} className={relays.r3 ? "text-pink-400 animate-bounce" : "text-gray-500"} />
                Relay 3 · Appliance
              </span>
              <span className={`text-[10px] font-bold uppercase flex items-center gap-1 ${relays.r3 ? "text-emerald-400" : "text-gray-500"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${relays.r3 ? "bg-emerald-400 animate-pulse" : "bg-gray-600"}`} />
                {relays.r3 ? "ACTIVE" : "STANDBY"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => toggleRelay("r4", 18, "Outlet")}
              className="relay-card group/relay text-left cursor-pointer"
              data-active={relays.r4}
              aria-label="Toggle Relay 4 Outlet"
            >
              <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                <Zap size={11} className={relays.r4 ? "text-purple-400 animate-bounce" : "text-gray-500"} />
                Relay 4 · Outlet
              </span>
              <span className={`text-[10px] font-bold uppercase flex items-center gap-1 ${relays.r4 ? "text-emerald-400" : "text-gray-500"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${relays.r4 ? "bg-emerald-400 animate-pulse" : "bg-gray-600"}`} />
                {relays.r4 ? "ACTIVE" : "STANDBY"}
              </span>
            </button>
          </div>

          {/* Interactive Live Telemetry Bar */}
          <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/10 font-mono text-[10px] text-gray-400">
            <span className="text-cyan-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              RSSI: -52dBm
            </span>
            <span>Heap: 284KB</span>
            <span className="text-emerald-400 font-bold">● WebSocket Live</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.visualType === "web") {
    const cropDetails = [
      {
        title: "Crop Lifecycle Management",
        desc: "Wheat & Cotton sowing calendar, soil temperature tracking, and pest mitigation.",
        badge: "Verified Advisory",
        color: "emerald",
      },
      {
        title: "Fertilizer & Soil Calculator",
        desc: "Automated N-P-K nutrient ratio estimation based on soil pH and farm acreage.",
        badge: "Dosage Calculated",
        color: "cyan",
      },
      {
        title: "Government Subsidy Advisory",
        desc: "Direct benefit transfer eligibility, solar pump subsidies, and crop insurance guidance.",
        badge: "Official Schemes",
        color: "amber",
      },
    ];

    return (
      <div className="project-visual group" aria-label="Farmer Guide Web Portal Preview">
        <div className="web-mockup">
          <div className="web-mockup-bar">
            <Globe size={13} className="text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-xs">https://khedut-margdarshika.org</span>
            <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Web Portal
            </span>
          </div>

          <div className="web-content-preview">
            <button
              type="button"
              onClick={() => setActiveCrop(0)}
              onMouseEnter={() => setActiveCrop(0)}
              className={`mockup-item group/item text-left w-full cursor-pointer transition-all ${
                activeCrop === 0
                  ? "bg-emerald-500/20 border-emerald-400/50 shadow-[0_0_18px_rgba(16,185,129,0.3)] transform translate-x-1"
                  : "hover:bg-emerald-500/10"
              }`}
            >
              <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-xs">
                <span className={`w-2 h-2 rounded-full ${activeCrop === 0 ? "bg-emerald-400 animate-ping" : "bg-emerald-400"}`} />
                🌾 Crop Lifecycle &amp; Pest Management
              </span>
              <span className="text-gray-300 text-[10px] ml-auto font-mono">Crop Guidance</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCrop(1)}
              onMouseEnter={() => setActiveCrop(1)}
              className={`mockup-item group/item text-left w-full cursor-pointer transition-all ${
                activeCrop === 1
                  ? "bg-cyan-500/20 border-cyan-400/50 shadow-[0_0_18px_rgba(0,240,255,0.3)] transform translate-x-1"
                  : "hover:bg-cyan-500/10"
              }`}
            >
              <span className="text-cyan-400 font-bold flex items-center gap-1.5 text-xs">
                <span className={`w-2 h-2 rounded-full ${activeCrop === 1 ? "bg-cyan-400 animate-ping" : "bg-cyan-400"}`} />
                🧪 Fertilizer &amp; Soil Dosage Calculator
              </span>
              <span className="text-gray-300 text-[10px] ml-auto font-mono">Soil Dosage</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCrop(2)}
              onMouseEnter={() => setActiveCrop(2)}
              className={`mockup-item group/item text-left w-full cursor-pointer transition-all ${
                activeCrop === 2
                  ? "bg-amber-500/20 border-amber-400/50 shadow-[0_0_18px_rgba(245,158,11,0.3)] transform translate-x-1"
                  : "hover:bg-amber-500/10"
              }`}
            >
              <span className="text-amber-400 font-bold flex items-center gap-1.5 text-xs">
                <span className={`w-2 h-2 rounded-full ${activeCrop === 2 ? "bg-amber-400 animate-ping" : "bg-amber-400"}`} />
                📜 Government Agricultural Schemes
              </span>
              <span className="text-gray-300 text-[10px] ml-auto font-mono">Gov Schemes</span>
            </button>
          </div>

          {/* Interactive Live Detail Preview */}
          <div className="font-mono text-[11px] p-2.5 rounded-xl border border-white/10 bg-black/50 mt-1 transition-all">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-200 font-bold flex items-center gap-1.5 text-[11px]">
                <CheckCircle2 size={12} className="text-emerald-400" />
                {cropDetails[activeCrop].title}
              </span>
              <span
                className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-md border ${
                  activeCrop === 0
                    ? "text-emerald-400 border-emerald-400/30 bg-emerald-500/15 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                    : activeCrop === 1
                    ? "text-cyan-400 border-cyan-400/30 bg-cyan-500/15 shadow-[0_0_8px_rgba(0,240,255,0.3)]"
                    : "text-amber-400 border-amber-400/30 bg-amber-500/15 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                }`}
              >
                {cropDetails[activeCrop].badge}
              </span>
            </div>
            <p className="text-gray-400 text-[10px] m-0 leading-relaxed">
              {cropDetails[activeCrop].desc}
            </p>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="project-visual group" aria-label="Digital Voting Machine Circuit Simulation">
      <div className="elec-sim">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 pb-2 border-b border-white/10">
          <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
            <Cpu size={14} className="text-cyan-400 animate-pulse" /> IC CD4026B Decade Counters
          </span>
          <span className="text-emerald-400 flex items-center gap-1 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Debounced Clock
          </span>
        </div>

        <div className="counter-readout">
          <button
            type="button"
            onClick={() => setVotes((v) => ({ ...v, a: v.a + 1 }))}
            className="text-center group/btn cursor-pointer p-2 rounded-xl transition-all hover:bg-cyan-500/10 active:scale-95"
            aria-label="Increment Candidate A Vote"
          >
            <span className="text-[10px] font-mono text-gray-400 block mb-1 group-hover/btn:text-cyan-300 transition-colors">
              CANDIDATE A (Click to Vote)
            </span>
            <div className="counter-digit">{votes.a}</div>
          </button>
          <div className="text-purple-400 font-mono text-2xl animate-pulse">:</div>
          <button
            type="button"
            onClick={() => setVotes((v) => ({ ...v, b: v.b + 1 }))}
            className="text-center group/btn cursor-pointer p-2 rounded-xl transition-all hover:bg-emerald-500/10 active:scale-95"
            aria-label="Increment Candidate B Vote"
          >
            <span className="text-[10px] font-mono text-gray-400 block mb-1 group-hover/btn:text-emerald-300 transition-colors">
              CANDIDATE B (Click to Vote)
            </span>
            <div className="counter-digit text-emerald-400">{votes.b}</div>
          </button>
        </div>

        <div className="text-center text-[11px] font-mono text-gray-400">
          Hardware verified · 7-Segment Common Cathode (Interactive Simulation)
        </div>
      </div>
    </div>
  );
}


export default function Projects() {
  return (
    <section id="projects" className="section-shell projects-section" aria-labelledby="projects-title">
      <SectionHeading
        index="03"
        eyebrow="Engineering Projects"
        title={<><span id="projects-title">Practical systems.</span><br />Real-world implementation.</>}
        description="Engineering builds across IoT microcontrollers, regional web portals, and digital electronic hardware."
      />

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" data-featured={project.featured} key={project.id}>
            <div className="project-meta">
              <span className="display-type project-number">0{project.id}</span>
              <span className="tech-type">{project.category}</span>
            </div>
            <ProjectVisual project={project} />
            <div className="project-copy">
              <div>
                {project.featured && (
                  <span className="tech-type featured-tag flex items-center gap-1.5 w-fit">
                    <Sparkles size={12} className="animate-spin text-purple-300" style={{ animationDuration: "8s" }} />
                    Featured Build
                  </span>
                )}
                <h3 className="display-type">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <dl className="project-notes">
                <div><dt className="tech-type">Why Built</dt><dd>{project.why}</dd></div>
                <div><dt className="tech-type">Architecture</dt><dd>{project.how}</dd></div>
              </dl>
              <div className="project-footer">
                <ul aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li className="tech-type" key={tag}>{tag}</li>)}
                </ul>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Visit Granth's GitHub for ${project.title}`} className="group">
                    <GitBranch size={15} /> GitHub Repo <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>

            </div>
          </article>
        ))}
      </div>

      <a className="all-work-link display-type gsap-reveal group" href="https://github.com/GranthSenjaliya88" target="_blank" rel="noreferrer">
        <span>View full project archive on GitHub</span>
        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-purple-400" />
      </a>
    </section>
  );
}
