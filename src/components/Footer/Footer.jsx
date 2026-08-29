import { ArrowUpRight, FileText } from "lucide-react";

export default function Footer({ onOpenResume }) {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const links = ["about", "projects", "skills", "education", "contact"];

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <button className="footer-brand display-type" onClick={() => goTo("home")}>GS<span>.</span></button>
          <p>Computer Science student, developer, problem solver, and IoT builder based in Gujarat.</p>
        </div>
        <div><span className="tech-type footer-label">Navigate</span>{links.map((link) => <button key={link} onClick={() => goTo(link)}>{link}</button>)}</div>
        <div><span className="tech-type footer-label">Connect</span><a href="mailto:granthsenjaliya881@gmail.com">Email <ArrowUpRight size={14} /></a><a href="https://github.com/GranthSenjaliya88" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://leetcode.com/u/Granth88/" target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={14} /></a><button onClick={onOpenResume}>Resume <FileText size={14} /></button></div>
      </div>
      <div className="footer-bottom tech-type"><span>© {new Date().getFullYear()} Granth Senjaliya</span><span>Designed with intent · Built with React</span><span>Gujarat / India</span></div>
    </footer>
  );
}
