import { ArrowUpRight, Cpu, GitBranch, Sprout, Vote } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { projects } from "../../data/projects";

const icons = { iot: Cpu, web: Sprout, elec: Vote };

function ProjectVisual({ project }) {
  const Icon = icons[project.visualType] || Cpu;
  return (
    <div className={`project-visual project-visual--${project.visualType}`} data-cursor="View">
      <div className="project-visual-grid" />
      <Icon className="project-main-icon" strokeWidth={1.2} />
      <span className="tech-type project-visual-code">PRJ / 0{project.id}</span>
      <div className="project-signal"><span /><span /><span /></div>
      {project.visualType === "iot" && <div className="project-circuit"><i /><i /><i /><i /></div>}
      {project.visualType === "web" && <div className="project-browser"><b /><b /><b /><span>ખેડૂત માર્ગદર્શિકા</span></div>}
      {project.visualType === "elec" && <div className="project-counter"><span>0</span><span>1</span></div>}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell projects-section" aria-labelledby="projects-title">
      <SectionHeading light index="02" eyebrow="Selected work" title={<><span id="projects-title">Small systems.</span><br />Real problems.</>} description="Three projects across connected hardware, regional web access, and digital electronics—each built to turn a clear need into a working system." />

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.id}>
            <div className="project-meta">
              <span className="display-type project-number">0{project.id}</span>
              <span className="tech-type">{project.category}</span>
            </div>
            <ProjectVisual project={project} />
            <div className="project-copy">
              <div>
                {project.featured && <span className="tech-type featured-tag">Featured build</span>}
                <h3 className="display-type">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <dl className="project-notes">
                <div><dt className="tech-type">Why</dt><dd>{project.why}</dd></div>
                <div><dt className="tech-type">How</dt><dd>{project.how}</dd></div>
              </dl>
              <div className="project-footer">
                <ul aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li className="tech-type" key={tag}>{tag}</li>)}</ul>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Visit Granth's GitHub for ${project.title}`}><GitBranch size={17} /> GitHub <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <a className="all-work-link display-type gsap-reveal" href="https://github.com/GranthSenjaliya88" target="_blank" rel="noreferrer">Explore the GitHub profile <ArrowUpRight /></a>
    </section>
  );
}
