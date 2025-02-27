import React, { useEffect, useRef } from 'react';

const FluidBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Particle class to create fluid-like movement
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 30 + 10;
      }
      
      // Update particle position based on mouse interaction
      update(mouse) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        // Repulsion effect when mouse is close
        if (distance < 100) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = 100;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        }
        
        // Return to base position
        this.x += (this.baseX - this.x) * 0.05;
        this.y += (this.baseY - this.y) * 0.05;
      }
      
      // Draw particle
      draw(ctx) {
        ctx.fillStyle = 'rgba(135, 206, 235, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Mouse tracking
    const mouse = {
      x: null,
      y: null
    };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    // Particles array
    let particlesArray = [];
    
    // Initialize particles
    const initParticles = () => {
      particlesArray = [];
      const gridSizeX = 50;
      const gridSizeY = 30;
      
      for (let y = 0; y < gridSizeY; y++) {
        for (let x = 0; x < gridSizeX; x++) {
          let positionX = canvas.width / (gridSizeX + 1) * (x + 1);
          let positionY = canvas.height / (gridSizeY + 1) * (y + 1);
          particlesArray.push(new Particle(positionX, positionY));
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Connect particles with lines when close
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 20) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(135, 206, 235, 0.2)';
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particlesArray.forEach(particle => {
        particle.update(mouse);
        particle.draw(ctx);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Set up canvas and start animation
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Initialize particles and start animation
    initParticles();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fluid-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default FluidBackground;