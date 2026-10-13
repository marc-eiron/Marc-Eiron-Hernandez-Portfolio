import { useState } from 'react';
import Reveal from './Reveal';

function handleTilt(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  const rotateX = (0.5 - y) * 10;
  const rotateY = (x - 0.5) * 10;

  card.style.setProperty('--rotate-x', `${rotateX}deg`);
  card.style.setProperty('--rotate-y', `${rotateY}deg`);
  card.style.setProperty('--spot-x', `${x * 100}%`);
  card.style.setProperty('--spot-y', `${y * 100}%`);
}

function resetTilt(event) {
  const card = event.currentTarget;
  card.style.setProperty('--rotate-x', '0deg');
  card.style.setProperty('--rotate-y', '0deg');
}

const VISIBLE_COUNT = 3;

function Projects({ projects }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const hasMore = projects.length > VISIBLE_COUNT;

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Projects
        </Reveal>
        <div className="projects-grid">
          {visible.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article
                className="project-card"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <div className="project-card-spot" aria-hidden="true" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live demo
                    </a>
                  )}
                  {project.repoUrl && project.repoUrl !== '#' && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Source code
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {hasMore && (
          <div className="projects-toggle">
            <button
              className="btn btn-secondary"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show less' : 'View more'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
