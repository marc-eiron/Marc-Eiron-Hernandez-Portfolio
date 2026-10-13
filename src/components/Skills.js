import Reveal from './Reveal';

function Skills({ skills }) {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Skills
        </Reveal>
        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <Reveal key={skill} as="li" delay={index * 35} className="skill-tag">
              {skill}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
