import Reveal from './Reveal';

function Experience({ experience }) {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Experience
        </Reveal>
        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              as="article"
              delay={index * 100}
              className="timeline-item"
            >
              <div className="timeline-header">
                <h3 className="timeline-role">{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-company">{job.company}</p>
              {job.highlights ? (
                <ul className="timeline-highlights">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="timeline-description">{job.description}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
