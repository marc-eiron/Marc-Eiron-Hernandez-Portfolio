import { useEffect, useState } from 'react';

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_TIME = 1600;

function RoleCycler({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (phase === 'typing') {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), HOLD_TIME);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED);
      } else {
        setPhase('typing');
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <span className="role-cycler">
      {text}
      <span className="role-cycler-cursor" aria-hidden="true" />
    </span>
  );
}

export default RoleCycler;
