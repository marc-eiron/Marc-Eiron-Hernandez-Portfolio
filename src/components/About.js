import Reveal from './Reveal';

function About({ about }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          About
        </Reveal>
        <Reveal delay={100}>
          <p className="about-text">{about}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
