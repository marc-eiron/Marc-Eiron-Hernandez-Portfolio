import { useEffect, useRef } from 'react';

const CELL = 60;
const PULSE_COUNT = 18;
const PULSE_SPEED = 0.6;

function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = reduceMotionQuery.matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let nodes = [];
    let pulses = [];
    let animationId = null;
    let visible = !document.hidden;

    function getThemeVars() {
      const style = getComputedStyle(document.documentElement);
      return {
        rgb: style.getPropertyValue('--color-particle-rgb').trim() || '110, 168, 254',
        gridOpacity: parseFloat(style.getPropertyValue('--grid-line-opacity')) || 0.06,
        nodeOpacity: parseFloat(style.getPropertyValue('--grid-node-opacity')) || 0.35,
        pulseOpacity: parseFloat(style.getPropertyValue('--grid-pulse-opacity')) || 0.7,
      };
    }

    let tv = getThemeVars();

    function buildGrid() {
      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;
      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.3) {
            nodes.push({
              x: c * CELL,
              y: r * CELL,
              pulse: Math.random() * Math.PI * 2,
              size: Math.random() < 0.15 ? 2.5 : 1.5,
            });
          }
        }
      }
      buildPulses();
    }

    function buildPulses() {
      pulses = [];
      for (let i = 0; i < PULSE_COUNT; i++) {
        pulses.push(newPulse());
      }
    }

    function newPulse() {
      const horizontal = Math.random() < 0.5;
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      return {
        x: col * CELL,
        y: row * CELL,
        horizontal,
        dir: Math.random() < 0.5 ? 1 : -1,
        length: CELL * (2 + Math.floor(Math.random() * 3)),
        progress: 0,
        speed: PULSE_SPEED + Math.random() * 0.4,
        life: 1,
      };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    }

    let time = 0;

    function render() {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      const { rgb, gridOpacity, nodeOpacity, pulseOpacity } = tv;

      ctx.strokeStyle = `rgba(${rgb}, ${gridOpacity})`;
      ctx.lineWidth = 0.5;
      for (let c = 0; c <= cols; c++) {
        const x = c * CELL;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let r = 0; r <= rows; r++) {
        const y = r * CELL;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (const node of nodes) {
        const glow = 0.5 + 0.5 * Math.sin(node.pulse + time * 1.2);
        const alpha = nodeOpacity * (0.4 + 0.6 * glow);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fill();

        if (node.size > 2) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.2})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        for (let i = 0; i < pulses.length; i++) {
          const p = pulses[i];
          p.progress += p.speed;

          if (p.progress > p.length) {
            pulses[i] = newPulse();
            continue;
          }

          const ratio = p.progress / p.length;
          const fade = ratio < 0.2 ? ratio / 0.2 : ratio > 0.8 ? (1 - ratio) / 0.2 : 1;
          const headPos = p.progress;
          const tailPos = Math.max(0, p.progress - CELL * 1.5);

          let x1, y1, x2, y2;
          if (p.horizontal) {
            x1 = p.x + tailPos * p.dir;
            x2 = p.x + headPos * p.dir;
            y1 = y2 = p.y;
          } else {
            y1 = p.y + tailPos * p.dir;
            y2 = p.y + headPos * p.dir;
            x1 = x2 = p.x;
          }

          const grad = ctx.createLinearGradient(x1, y1, x2, y2);
          grad.addColorStop(0, `rgba(${rgb}, 0)`);
          grad.addColorStop(1, `rgba(${rgb}, ${pulseOpacity * fade})`);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(x2, y2, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb}, ${pulseOpacity * fade})`;
          ctx.fill();
        }
      }
    }

    function tick() {
      render();
      if (!prefersReducedMotion && visible) {
        animationId = requestAnimationFrame(tick);
      }
    }

    function start() {
      if (animationId === null) tick();
    }

    function stop() {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }

    function handleResize() {
      resize();
      render();
    }

    function handleVisibility() {
      visible = !document.hidden;
      if (visible) start();
      else stop();
    }

    function handleMotionChange(event) {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion) {
        stop();
        render();
      } else {
        start();
      }
    }

    const themeObserver = new MutationObserver(() => {
      tv = getThemeVars();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    resize();
    tick();

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    reduceMotionQuery.addEventListener('change', handleMotionChange);

    return () => {
      stop();
      themeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      reduceMotionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-fx" aria-hidden="true" />;
}

export default BackgroundFX;
