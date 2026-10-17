import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import ProjectGallery from './ProjectGallery';

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

function Projects({ projects }) {
  const [galleryProject, setGalleryProject] = useState(null);
  const trackRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScroll({
      left: track.scrollLeft > 4,
      right: track.scrollLeft + track.clientWidth < track.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState, projects.length]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header">
          <Reveal as="h2" className="section-title">
            Projects
          </Reveal>
          {(canScroll.left || canScroll.right) && (
            <div className="projects-nav">
              <button
                type="button"
                className="projects-nav-btn"
                onClick={() => scrollByCard(-1)}
                disabled={!canScroll.left}
                aria-label="Previous projects"
              >
                ‹
              </button>
              <button
                type="button"
                className="projects-nav-btn"
                onClick={() => scrollByCard(1)}
                disabled={!canScroll.right}
                aria-label="Next projects"
              >
                ›
              </button>
            </div>
          )}
        </div>
        <Reveal delay={90}>
          <div
            className="projects-track"
            ref={trackRef}
            onScroll={updateScrollState}
            tabIndex={0}
            aria-label="Projects, scroll horizontally to see more"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <div className="project-card-spot" aria-hidden="true" />
                {project.images?.length > 0 && (
                  <button
                    type="button"
                    className="project-cover"
                    onClick={() => setGalleryProject(project)}
                    aria-label={`View ${project.images.length} screenshots of ${project.title}`}
                  >
                    <img src={project.images[0]} alt="" loading="lazy" />
                    <span className="project-cover-badge">
                      View {project.images.length} screenshots
                    </span>
                  </button>
                )}
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
            ))}
          </div>
        </Reveal>
      </div>
      <Modal
        isOpen={galleryProject !== null}
        onClose={() => setGalleryProject(null)}
        title={galleryProject ? `${galleryProject.title} screenshots` : ''}
        className="modal-panel-wide"
      >
        {galleryProject && (
          <ProjectGallery title={galleryProject.title} images={galleryProject.images} />
        )}
      </Modal>
    </section>
  );
}

export default Projects;
