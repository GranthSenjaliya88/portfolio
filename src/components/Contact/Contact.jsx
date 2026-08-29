import { useState } from "react";
import { ArrowUpRight, GitBranch, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (event) => {
    event.preventDefault();
    const subject = form.subject || `Portfolio enquiry from ${form.name}`;
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
    window.location.href = `mailto:granthsenjaliya881@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-top section-shell">
        <div className="contact-kicker tech-type gsap-reveal"><span>05</span><span>Contact / Opportunities</span></div>
        <h2 id="contact-title" className="display-type contact-title gsap-reveal">Let’s build<br /><em>something useful.</em></h2>

        <div className="contact-grid">
          <div className="contact-details gsap-reveal">
            <p>I’m open to internships, project collaborations, and conversations about software, hardware, or ideas worth making real.</p>
            <ul>
              <li><Mail size={19} /><div><span className="tech-type">Email</span><a href="mailto:granthsenjaliya881@gmail.com">granthsenjaliya881@gmail.com</a></div></li>
              <li><Phone size={19} /><div><span className="tech-type">Phone</span><a href="tel:+919825106122">+91 98251 06122</a></div></li>
              <li><MapPin size={19} /><div><span className="tech-type">Based in</span><strong>Gujarat, India</strong></div></li>
            </ul>
            <div className="contact-socials">
              <a href="https://github.com/GranthSenjaliya88" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub <ArrowUpRight size={15} /></a>
              <a href="https://leetcode.com/u/Granth88/" target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={15} /></a>
            </div>
          </div>

          <form className="contact-form gsap-reveal" onSubmit={submit}>
            <div className="form-row">
              <label><span className="tech-type">Your name *</span><input name="name" value={form.name} onChange={change} placeholder="What should I call you?" autoComplete="name" required /></label>
              <label><span className="tech-type">Email address *</span><input type="email" name="email" value={form.email} onChange={change} placeholder="you@example.com" autoComplete="email" required /></label>
            </div>
            <label><span className="tech-type">Subject</span><input name="subject" value={form.subject} onChange={change} placeholder="Project, opportunity, or hello" /></label>
            <label><span className="tech-type">Message *</span><textarea name="message" value={form.message} onChange={change} placeholder="Tell me a little about what you have in mind…" rows="5" required /></label>
            <button type="submit">Compose email <Send size={18} /></button>
            <small>This opens your email app with the message pre-filled. No form data is stored.</small>
          </form>
        </div>
      </div>
    </section>
  );
}
