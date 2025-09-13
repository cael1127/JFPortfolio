import React, { useEffect, useRef } from 'react';

const FloatingParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Physics + symbol rendering for engineering/math glyphs
    const engineeringSymbols = [
      '∑', '∫', 'π', 'θ', 'μ', 'σ', 'Δ', '≈', '→', '√', '∞', '±', '∇', 'ℏ', 'Ω', 'τ', 'λ', 'φ', 'ψ', 'dx/dt', 'F=ma'
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.hue = Math.random() * 60 + 160; // Teal to green range
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.originalSize = this.size;
        this.symbol = engineeringSymbols[Math.floor(Math.random() * engineeringSymbols.length)];
        this.fontSize = Math.floor(Math.random() * 10) + 12; // 12-22px
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.002;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges with smooth transition
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.y > canvas.height + 10) this.y = -10;
        if (this.y < -10) this.y = canvas.height + 10;

        // Enhanced breathing effect with pulse
        this.pulse += this.pulseSpeed;
        this.size = this.originalSize + Math.sin(this.pulse) * 0.5;
        this.opacity = Math.max(0.15, Math.min(0.5, this.opacity + Math.sin(this.pulse * 2) * 0.01));
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        const color = `hsl(${this.hue}, 70%, 40%)`;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 6;

        // Render symbol text with slight rotation
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.fontSize}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.symbol, 0, 0);

        // Remove shadow
        ctx.shadowBlur = 0;
        ctx.restore();
      }
    }

    // Create particles - tuned count for performance
    const particles = Array.from({ length: 28 }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Subtle connections with gradient and performance optimization
      const maxConnections = 2; // Limit connections per particle for performance
      
      particles.forEach((particle, i) => {
        let connectionCount = 0;
        particles.slice(i + 1).forEach(otherParticle => {
          if (connectionCount >= maxConnections) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 90 && distance > 25) {
            connectionCount++;
            ctx.save();
            
            // Create gradient connection
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 50%, ${(100 - distance) / 100 * 0.2})`);
            gradient.addColorStop(1, `hsla(${otherParticle.hue}, 70%, 50%, ${(100 - distance) / 100 * 0.2})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.35;
            ctx.lineCap = 'round';
            ctx.globalAlpha = (100 - distance) / 100 * 0.25;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FloatingParticles;
