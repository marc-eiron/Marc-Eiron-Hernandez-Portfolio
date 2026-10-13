import { useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import ResumeView from './ResumeView';

const icons = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.3 8.75h3.28V21H3.3V8.75Zm6.2 0h3.14v1.68h.05c.44-.82 1.5-1.68 3.09-1.68 3.3 0 3.91 2.18 3.91 5v7.25h-3.28v-6.43c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4V21H9.5V8.75Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.36a2 2 0 0 1-.45 2.11L8.09 9.44a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.32 1.55.55 2.36.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 13h7M8.5 16h7M8.5 10h2.5" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  ),
};

function Contact({ email, phone, social, location }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const cards = [
    {
      key: 'email',
      icon: icons.mail,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
    {
      key: 'phone',
      icon: icons.phone,
      label: 'Phone',
      value: phone,
      href: `tel:${phone}`,
    },
    {
      key: 'github',
      icon: icons.github,
      label: 'GitHub',
      value: social.github.replace(/^https?:\/\//, ''),
      href: social.github,
      external: true,
    },
    {
      key: 'linkedin',
      icon: icons.linkedin,
      label: 'LinkedIn',
      value: social.linkedin.replace(/^https?:\/\//, '').replace(/^www\./, ''),
      href: social.linkedin.startsWith('http') ? social.linkedin : `https://${social.linkedin}`,
      external: true,
    },
    {
      key: 'facebook',
      icon: icons.facebook,
      label: 'Facebook',
      value: social.facebook.replace(/^https?:\/\//, '').replace(/^www\./, ''),
      href: social.facebook,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-content">
        <Reveal as="h2" className="section-title">
          Contact
        </Reveal>
        <Reveal delay={60}>
          <span className="availability-badge">
            <span className="availability-dot" />
            Open to new opportunities
          </span>
          <p className="contact-text">
            I'm open to new opportunities and interesting projects. Feel free to reach out —
            I usually reply within a day or two.
          </p>
          <span className="location-pill">
            <span className="location-pill-icon">{icons.pin}</span>
            {location}
          </span>
        </Reveal>

        <Reveal delay={140} className="resume-card-wrap">
          <div className="resume-card">
            <span className="resume-card-icon">{icons.file}</span>
            <span className="resume-card-info">
              <span className="resume-card-title">My Resume</span>
              <span className="resume-card-meta">PDF · View my full work history &amp; skills</span>
            </span>
            <span className="resume-card-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setIsResumeOpen(true)}
              >
                {icons.eye}
                View
              </button>
              <a
                href="/resume.pdf"
                download="Marc_Eiron_Hernandez_Resume.pdf"
                className="btn btn-primary btn-sm"
              >
                {icons.download}
                Download
              </a>
            </span>
          </div>
        </Reveal>

        <div className="contact-grid">
          {cards.map((card, index) => (
            <Reveal key={card.key} delay={120 + index * 80} className="contact-card-wrap">
              <a
                className="contact-card"
                href={card.href}
                {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-card-icon">{card.icon}</span>
                <span className="contact-card-text">
                  <span className="contact-card-label">{card.label}</span>
                  <span className="contact-card-value">{card.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} title="Resume">
        <div className="modal-header">
          <h3>Resume</h3>
          <a
            href="/resume.pdf"
            download="Marc_Eiron_Hernandez_Resume.pdf"
            className="btn btn-primary btn-sm"
          >
            {icons.download}
            Download PDF
          </a>
        </div>
        <div className="modal-body">
          <ResumeView />
        </div>
      </Modal>
    </section>
  );
}

export default Contact;
