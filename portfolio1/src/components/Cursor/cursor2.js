import React, { useEffect, useRef } from 'react';

const ParticleAnimation = ({ children }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    let angle = Math.PI/3;
    let length = 2;
    let particles = [];
    let mouseHasMoved = false;
    let animationFrameId;
    
    class Particle {
      constructor(pos) {
        this.pos = pos;
        this.vel = {
          x: (Math.random() * length + length * 0.5) * Math.cos(angle * Math.round(Math.random() * 360)),
          y: (Math.random() * length + length * 0.5) * Math.sin(angle * Math.round(Math.random() * 360))
        };
        this.hue = Math.random() * 60 + 90;
        this.sat = 100;
        this.val = 100;
        this.lifetime = Math.random() * 100 + 50;
        this.age = 0;
        particles.push(this);
      }
      
      update() {
        if (this.age >= this.lifetime) {
          particles.splice(particles.indexOf(this), 1);
          return;
        }
        this.age += 1;
        if (this.age % 10 === 0) {
          const rotation = Math.random() < 0.5 ? -angle : angle;
          const cos = Math.cos(rotation);
          const sin = Math.sin(rotation);
          const newX = this.vel.x * cos - this.vel.y * sin;
          const newY = this.vel.x * sin + this.vel.y * cos;
          this.vel.x = newX;
          this.vel.y = newY;
        }
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
      }
      
      draw() {
        ctx.save();
        ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.val}%, ${1 - this.age/this.lifetime})`;
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x - this.vel.x, this.pos.y - this.vel.y);
        ctx.stroke();
        ctx.restore();
      }
    }
    
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    
    const init = () => {
      resizeCanvas();
      for (let i = 0; i < 500; i++) {
        new Particle({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        });
      }
    };
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (!mouseHasMoved) {
        for (let i = 0; i < 5; i++) {
          new Particle({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
          });
        }
      }
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = window.requestAnimationFrame(draw);
    };
    
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseHasMoved = true;
      for (let i = 0; i < 5; i++) {
        new Particle({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    init();
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 -z-10" style={{ height: '100vh' }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParticleAnimation;