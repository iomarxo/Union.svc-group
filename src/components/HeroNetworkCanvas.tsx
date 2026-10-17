import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const HeroNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Mouse coordinates relative to hero container
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      active: false,
    };

    // Particles array
    const particles: Particle[] = [];
    const particleCount = 54; // Optimized for performance and quiet subtlety
    const maxLineDistance = 125;

    // Click shockwaves
    const shockwaves: Shockwave[] = [];

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-seed particles proportionally
      if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: Math.random() * 1.5 + 1,
            baseAlpha: Math.random() * 0.3 + 0.15,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Track mouse within hero container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (clickX >= 0 && clickX <= width && clickY >= 0 && clickY <= height) {
        shockwaves.push({
          x: clickX,
          y: clickY,
          radius: 10,
          maxRadius: 180,
          alpha: 0.6,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Pause canvas execution when hero scrolls out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let globalTick = 0;

    // Main render loop
    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);
        globalTick += 0.02;

        // Update shockwaves
        for (let s = shockwaves.length - 1; s >= 0; s--) {
          const sw = shockwaves[s];
          sw.radius += 3.5;
          sw.alpha *= 0.94;

          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(216, 180, 133, ${sw.alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          if (sw.alpha < 0.02 || sw.radius > sw.maxRadius) {
            shockwaves.splice(s, 1);
          }
        }

        // Update & draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.pulsePhase += 0.03;

          // Mouse proximity reaction (gentle magnetic deflection/pull)
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              // Slight gentle pull towards cursor with damping
              p.x += Math.cos(angle) * force * 0.7;
              p.y += Math.sin(angle) * force * 0.7;
            }
          }

          // Shockwave impulse reaction
          for (let s = 0; s < shockwaves.length; s++) {
            const sw = shockwaves[s];
            const dx = p.x - sw.x;
            const dy = p.y - sw.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (Math.abs(dist - sw.radius) < 25) {
              const angle = Math.atan2(dy, dx);
              p.x += Math.cos(angle) * 1.5;
              p.y += Math.sin(angle) * 1.5;
            }
          }

          // Natural autonomous drift
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bounce with dampening
          if (p.x < 0) {
            p.x = 0;
            p.vx *= -1;
          } else if (p.x > width) {
            p.x = width;
            p.vx *= -1;
          }

          if (p.y < 0) {
            p.y = 0;
            p.vy *= -1;
          } else if (p.y > height) {
            p.y = height;
            p.vy *= -1;
          }

          // Pulsing node glow
          const currentAlpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.12;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(216, 180, 133, ${Math.max(0.1, currentAlpha)})`;
          ctx.fill();

          // Connect with nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxLineDistance) {
              const alpha = (1 - dist / maxLineDistance) * 0.14;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(216, 180, 133, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();

              // Traveling real-time packet pulse dot between connected nodes
              if ((i + j) % 5 === 0) {
                const packetT = (Math.sin(globalTick + i) + 1) / 2;
                const px = p.x + (p2.x - p.x) * packetT;
                const py = p.y + (p2.y - p.y) * packetT;

                ctx.beginPath();
                ctx.arc(px, py, 1.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 2.5})`;
                ctx.fill();
              }
            }
          }

          // Connect particle to mouse if nearby
          if (mouse.active) {
            const dxM = p.x - mouse.x;
            const dyM = p.y - mouse.y;
            const distM = Math.sqrt(dxM * dxM + dyM * dyM);

            if (distM < mouse.radius) {
              const alphaM = (1 - distM / mouse.radius) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(216, 180, 133, ${alphaM})`;
              ctx.lineWidth = 0.9;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75"
      />
    </div>
  );
};
