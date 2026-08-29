import { useState } from "react";
import styled, { css } from "styled-components";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Container, SectionAlt, GradientText, Button, ButtonLink } from "../UI/styled";
import { spinAnim } from "../../styles/GlobalStyles";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCol = styled.div``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.95rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: 0.65rem;
  transition: all 0.25s ${({ theme }) => theme.transitions.spring};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    transform: translateX(3px);
  }
`;

const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.18);
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.accent};
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const ItemLabel = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.text3};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const ItemValue = styled.span`
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s;

  a&, & a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;

    a {
      justify-content: center;
    }
  }
`;

const SocialSection = styled.div`
  margin-top: 1.25rem;
`;

const SocialLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.xs};
  color: ${({ theme }) => theme.colors.text3};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const SocialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const SocialPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.38rem 0.85rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text2};
  transition: all 0.22s ${({ theme }) => theme.transitions.spring};
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`;

const FormWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Label = styled.label`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text2};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.68rem 0.95rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.small};
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text3};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
    background: rgba(20, 184, 166, 0.03);
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.error};
      box-shadow: 0 0 0 3px ${theme.colors.errorBg};
    `}
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.68rem 0.95rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.small};
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  outline: none;
  resize: vertical;
  min-height: 110px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text3};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
    background: rgba(20, 184, 166, 0.03);
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.error};
      box-shadow: 0 0 0 3px ${theme.colors.errorBg};
    `}
`;

const ErrorText = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.error};
`;

const Spinner = styled.svg`
  animation: ${spinAnim} 0.9s linear infinite;
`;

const FeedbackMsg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.9rem 1.1rem;
  background: ${({ theme }) => theme.colors.successBg};
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.small};

  .feedback-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.accentEmerald};
    font-weight: 700;
  }

  .feedback-desc {
    color: ${({ theme }) => theme.colors.text2};
    font-size: 0.82rem;
    line-height: 1.5;
  }

  .mailto-fallback {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    text-decoration: underline;
  }
`;

const INIT = { name: "", email: "", subject: "", message: "" };
const ERRS = { name: "", email: "", subject: "", message: "" };

function validate(fields) {
  const errs = { ...ERRS };
  if (!fields.name.trim()) errs.name = "Name is required.";
  if (!fields.email.trim()) errs.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Enter a valid email address.";
  if (!fields.subject.trim()) errs.subject = "Subject is required.";
  if (!fields.message.trim()) errs.message = "Message is required.";
  else if (fields.message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
  return errs;
}

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [errs, setErrs] = useState(ERRS);
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errs[name]) setErrs((er) => ({ ...er, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const partial = validate(form);
    setErrs((er) => ({ ...er, [name]: partial[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrs = validate(form);
    setErrs(newErrs);
    if (Object.values(newErrs).some(Boolean)) return;

    setSubmitting(true);
    // Simulated form validation check
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmittedData({ ...form });
    setForm(INIT);
  };

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "Email",
      value: "granthsenjaliya881@gmail.com",
      href: "mailto:granthsenjaliya881@gmail.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.84 2 2 0 0 1 3.62 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"/>
        </svg>
      ),
      label: "Phone",
      value: "+91 98251 06122",
      href: "tel:+919825106122",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: "Location",
      value: "CHARUSAT, Gujarat, India",
      href: null,
    },
  ];

  return (
    <SectionAlt id="contact" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          tag="Contact"
          title={
            <>
              Let's Build Something<br />
              <GradientText>Great Together.</GradientText>
            </>
          }
          subtitle="Have a project idea, internship opportunity, or technical inquiry? Reach out directly."
        />
        <ContactGrid>
          <InfoCol ref={infoRef} className="reveal">
            {contactItems.map((item) => (
              <ContactItem key={item.label}>
                <ItemIcon>{item.icon}</ItemIcon>
                <ItemText>
                  <ItemLabel>{item.label}</ItemLabel>
                  <ItemValue>
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </ItemValue>
                </ItemText>
              </ContactItem>
            ))}

            <ContactButtons>
              <ButtonLink $variant="primary" href="mailto:granthsenjaliya881@gmail.com">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Me
              </ButtonLink>
              <ButtonLink $variant="secondary" href="tel:+919825106122">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.84 2 2 0 0 1 3.62 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"/>
                </svg>
                Call Me
              </ButtonLink>
            </ContactButtons>

            <SocialSection>
              <SocialLabel>Profiles</SocialLabel>
              <SocialList>
                <SocialPill href="https://github.com/GranthSenjaliya88" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </SocialPill>
                <SocialPill href="https://leetcode.com/u/Granth88/" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                  LeetCode
                </SocialPill>
              </SocialList>
            </SocialSection>
          </InfoCol>

          <FormWrap ref={formRef} className="reveal">
            <Form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <FormRow>
                <FormGroup>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    type="text"
                    id="contact-name"
                    name="name"
                    $hasError={!!errs.name}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-describedby={errs.name ? "err-name" : undefined}
                    aria-invalid={!!errs.name}
                  />
                  {errs.name && <ErrorText id="err-name" role="alert">{errs.name}</ErrorText>}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    type="email"
                    id="contact-email"
                    name="email"
                    $hasError={!!errs.email}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-describedby={errs.email ? "err-email" : undefined}
                    aria-invalid={!!errs.email}
                  />
                  {errs.email && <ErrorText id="err-email" role="alert">{errs.email}</ErrorText>}
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  $hasError={!!errs.subject}
                  placeholder="What is this regarding?"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-describedby={errs.subject ? "err-subject" : undefined}
                  aria-invalid={!!errs.subject}
                />
                {errs.subject && <ErrorText id="err-subject" role="alert">{errs.subject}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  $hasError={!!errs.message}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-describedby={errs.message ? "err-message" : undefined}
                  aria-invalid={!!errs.message}
                />
                {errs.message && <ErrorText id="err-message" role="alert">{errs.message}</ErrorText>}
              </FormGroup>

              <Button
                $variant="primary"
                $fullWidth
                type="submit"
                disabled={submitting}
                id="submitBtn"
              >
                {submitting ? (
                  <>
                    <Spinner width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </Spinner>
                    Validating…
                  </>
                ) : (
                  <>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </Button>

              {submittedData && (
                <FeedbackMsg role="status" aria-live="polite">
                  <div className="feedback-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Form validation successful!</span>
                  </div>
                  <div className="feedback-desc">
                    Client-side validation passed for <strong>{submittedData.name}</strong> ({submittedData.email}). Since this is a static site without an active email backend, click below to send directly:
                  </div>
                  <a
                    className="mailto-fallback"
                    href={`mailto:granthsenjaliya881@gmail.com?subject=${encodeURIComponent(submittedData.subject)}&body=${encodeURIComponent(`From: ${submittedData.name} (${submittedData.email})\n\n${submittedData.message}`)}`}
                  >
                    Open in your email client →
                  </a>
                </FeedbackMsg>
              )}
            </Form>
          </FormWrap>
        </ContactGrid>
      </Container>
    </SectionAlt>
  );
}
