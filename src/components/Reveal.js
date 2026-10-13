import { useScrollReveal } from '../hooks/useScrollReveal';

function Reveal({ children, delay = 0, as = 'div', className = '' }) {
  const [ref, isVisible] = useScrollReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
