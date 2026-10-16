import { resume } from '../data/resumeData';

function ResumeView() {
  return (
    <div className="resume-view">
      <header className="resume-view-header">
        <h2>{resume.name}</h2>
        <p className="resume-view-headline">{resume.headline}</p>
        <p className="resume-view-contact">{resume.contactLine}</p>
        <p className="resume-view-contact">
          Portfolio:{' '}
          <a href={resume.portfolioUrl} target="_blank" rel="noopener noreferrer">
            {resume.portfolioUrl}
          </a>
        </p>
      </header>

      <section className="resume-view-section">
        <h3>Professional Summary</h3>
        <p>{resume.summary}</p>
      </section>

      <section className="resume-view-section">
        <h3>Technical Skills</h3>
        <dl className="resume-skill-groups">
          {resume.skillGroups.map((group) => (
            <div key={group.label} className="resume-skill-group">
              <dt>{group.label}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="resume-view-section">
        <h3>Internship Accomplishments</h3>
        {resume.experience.map((job) => (
          <article key={job.company} className="resume-entry">
            <div className="resume-entry-header">
              <h4>
                {job.role} <span className="resume-entry-sep">|</span> {job.company}
              </h4>
              <span className="resume-entry-period">{job.period}</span>
            </div>
            <ul>
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-view-section">
        <h3>Projects</h3>
        {resume.projects.map((project) => (
          <article key={project.title} className="resume-entry">
            <div className="resume-entry-header">
              <h4>
                {project.title}
                {project.subtitle && (
                  <>
                    {' '}
                    <span className="resume-entry-sep">|</span> {project.subtitle}
                  </>
                )}
              </h4>
            </div>
            {project.tech && (
              <p className="resume-entry-tech">{project.tech.join(' · ')}</p>
            )}
            <ul>
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-view-section">
        <h3>Education</h3>
        {resume.education.map((entry) => (
          <div key={`${entry.school}-${entry.period}`} className="resume-entry resume-education-entry">
            <div className="resume-entry-header">
              <h4>{entry.school}</h4>
              <span className="resume-entry-period">{entry.period}</span>
            </div>
            <p className="resume-entry-detail">{entry.detail}</p>
          </div>
        ))}
      </section>

      <section className="resume-view-section">
        <h3>Certifications &amp; Training</h3>
        <ul>
          {resume.certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="resume-view-section">
        <h3>Organization</h3>
        <ul>
          {resume.organizations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="resume-view-section">
        <h3>Character References</h3>
        <ul className="resume-references">
          {resume.references.map((ref) => (
            <li key={ref.name}>
              <strong>{ref.name}</strong> — {ref.title}
              <span className="resume-reference-contact">
                Email: <a href={`mailto:${ref.email}`}>{ref.email}</a> · Phone: {ref.phone}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ResumeView;
