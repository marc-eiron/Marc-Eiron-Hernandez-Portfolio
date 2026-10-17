import { useEffect, useRef, useState } from 'react';

function ProjectGallery({ title, images }) {
  const [index, setIndex] = useState(0);
  const activeThumbRef = useRef(null);
  const count = images.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
      if (event.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [count]);

  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [index]);

  return (
    <div className="gallery">
      <div className="modal-header">
        <h3>{title}</h3>
        <span className="gallery-counter">
          {index + 1} / {count}
        </span>
      </div>

      <div className="gallery-stage">
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1} of ${count}`}
          className="gallery-image"
        />
        {count > 1 && (
          <>
            <button type="button" className="gallery-nav gallery-nav-prev" onClick={prev} aria-label="Previous screenshot">
              ‹
            </button>
            <button type="button" className="gallery-nav gallery-nav-next" onClick={next} aria-label="Next screenshot">
              ›
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              ref={i === index ? activeThumbRef : null}
              className={`gallery-thumb${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
