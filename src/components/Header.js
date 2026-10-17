import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Internship Accomplishments' },
  { href: '#contact', label: 'Contact' },
];

function Header({ name }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const lastHref = navLinks[navLinks.length - 1].href;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const atBottom =
        window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 4;

      if (atBottom) {
        setActiveSection(lastHref);
        return;
      }

      const refPoint = window.innerHeight * 0.35;
      let current = '';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= refPoint && rect.bottom > refPoint) {
          current = `#${section.id}`;
          break;
        }
      }
      if (!current) {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= refPoint) {
            current = `#${section.id}`;
          }
        }
      }
      setActiveSection(current || `#${sections[0].id}`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className={`header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo">
          {name}
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === link.href ? ' is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
