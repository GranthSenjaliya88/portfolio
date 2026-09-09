import { ArrowUpRight, FileText } from "lucide-react";

export default function Footer({ onOpenResume }) {
  const links = ["about", "projects", "skills", "education", "contact"];

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="footer-brand display-type" href="#home" aria-label="Granth Senjaliya, home">GS<span>.</span></a>
          <p>Granth Senjaliya — CSE student, developer, problem solver, and IoT builder based in Gujarat.</p>
        </div>
        <div><span className="tech-type footer-label">Navigate</span>{links.map((link) => <a key={link} href={`#${link}`}>{link}</a>)}</div>
        <div><span className="tech-type footer-label">Connect</span><a href="mailto:granthsenjaliya881@gmail.com">Email <ArrowUpRight size={14} /></a><a href="https://github.com/GranthSenjaliya88" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://leetcode.com/u/Granth88/" target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={14} /></a><a href="./Granth_Senjaliya_Resume.pdf" onClick={onOpenResume}>Resume <FileText size={14} /></a></div>
      </div>
      <div className="footer-bottom tech-type"><span>© {new Date().getFullYear()} Granth Senjaliya</span><span>Designed with intent · Built with React</span><span>Gujarat / India</span></div>
    </footer>
  );
}
