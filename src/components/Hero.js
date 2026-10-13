import RoleCycler from './RoleCycler';
import profilePhoto from '../assets/profile.jpg';

const codeFragments = [
  { text: 'const', x: '8%', y: '15%', delay: '0s', dur: '18s' },
  { text: '=>', x: '85%', y: '20%', delay: '-4s', dur: '22s' },
  { text: '{ }', x: '12%', y: '72%', delay: '-8s', dur: '20s' },
  { text: '</>', x: '88%', y: '68%', delay: '-2s', dur: '16s' },
  { text: 'async', x: '5%', y: '45%', delay: '-12s', dur: '24s' },
  { text: '/**/', x: '92%', y: '42%', delay: '-6s', dur: '19s' },
  { text: 'npm run', x: '15%', y: '88%', delay: '-10s', dur: '21s' },
  { text: '0xFF', x: '82%', y: '85%', delay: '-3s', dur: '17s' },
];

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '19', label: 'Tech Skills' },
  { value: '324', label: 'Intern Hours' },
];

function Hero({ name, roles, tagline }) {
  return (
    <section id="home" className="hero">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      {codeFragments.map((frag, i) => (
        <span
          key={i}
          className="hero-float-code"
          aria-hidden="true"
          style={{
            left: frag.x,
            top: frag.y,
            animationDelay: frag.delay,
            animationDuration: frag.dur,
          }}
        >
          {frag.text}
        </span>
      ))}

      <div className="container hero-grid">
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <div className="hero-scan-line" aria-hidden="true" />
            <img src={profilePhoto} alt={name} className="hero-photo" />
          </div>
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-title">
            <RoleCycler roles={roles} />
          </h2>
          <p className="hero-tagline">{tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat-card">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
