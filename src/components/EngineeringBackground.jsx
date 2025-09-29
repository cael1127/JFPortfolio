import React, { useEffect, useRef } from 'react';

// Animated blueprint grid with drifting gear/bolt glyphs using brand colors
const EngineeringBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rafId;

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const gearGlyphs = ['⚙️','🔩','🔧'];
    const items = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      s: Math.random() * 0.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.002,
      g: gearGlyphs[Math.floor(Math.random() * gearGlyphs.length)],
    }));

    const drawGrid = () => {
      const spacing = 40;
      ctx.save();
      // Very light blueprint-like background
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, '#fbfbff');
      gradient.addColorStop(1, '#a1f6ff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.strokeStyle = 'rgba(0,111,159,0.15)'; // primary with low alpha
      ctx.lineWidth = 1;
      for (let x = 0; x < window.innerWidth; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }
      for (let y = 0; y < window.innerHeight; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }
      ctx.restore();
    };

    const animate = () => {
      drawGrid();
      // Drift glyphs
      items.forEach(it => {
        it.x += it.vx; it.y += it.vy; it.r += it.vr;
        if (it.x < -20) it.x = window.innerWidth + 20;
        if (it.x > window.innerWidth + 20) it.x = -20;
        if (it.y < -20) it.y = window.innerHeight + 20;
        if (it.y > window.innerHeight + 20) it.y = -20;

        ctx.save();
        ctx.translate(it.x, it.y);
        ctx.rotate(it.r);
        ctx.font = `${18 * it.s}px system-ui, sans-serif`;
        ctx.fillStyle = '#2ca8bb'; // secondary
        ctx.globalAlpha = 0.7;
        ctx.fillText(it.g, 0, 0);
        ctx.restore();
      });
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }} />;
};

export default EngineeringBackground;


