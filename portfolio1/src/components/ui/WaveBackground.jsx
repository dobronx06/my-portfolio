import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './InteractiveBackground.css';

const WaveBackground = () => {
  const canvasRef = useRef(null);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let wavePoints = [];
    let disturbances = []; // Array to store ripple disturbances
    let mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      prevX: canvas.width / 2,
      prevY: canvas.height / 2,
      velocityX: 0,
      velocityY: 0,
      down: false
    };
    
    // Resize handler for responsive canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initWaves(); // Reinitialize grid when resizing
    };
    
    // Mouse handlers
    const handleMouseMove = (e) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.velocityX = mouse.x - mouse.prevX;
      mouse.velocityY = mouse.y - mouse.prevY;
    };
    
    const handleMouseDown = (e) => {
      mouse.down = true;
      
      // Create a ripple disturbance at mouse position
      createDisturbance(e.clientX, e.clientY, 100, 30);
    };
    
    const handleMouseUp = () => {
      mouse.down = false;
    };
    
    const handleMouseLeave = () => {
      mouse.velocityX = 0;
      mouse.velocityY = 0;
    };
    
    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Wave point class
    class WavePoint {
      constructor(x, y, noiseOffset, waveIndex) {
        this.x = x;
        this.y = y;
        this.baseY = y;
        this.noiseOffset = noiseOffset;
        this.waveIndex = waveIndex;
        this.amplitude = Math.random() * 10 + 5;
        this.speed = Math.random() * 0.02 + 0.01;
        this.maxDisturbance = 200; // Max distance for mouse influence
        // Extra properties for interactions
        this.targetY = y;
        this.velocityY = 0;
        this.acceleration = 0;
        this.friction = 0.95;
        this.damping = 0.1;
        this.mass = 1 + Math.random() * 0.5; // Varied mass for natural movement
      }
      
      update(time) {
        // Natural wave motion
        const baseOffset = Math.sin(time * this.speed + this.noiseOffset) * this.amplitude;
        this.targetY = this.baseY + baseOffset;
        
        // Process disturbances
        for (const disturbance of disturbances) {
          const dx = this.x - disturbance.x;
          const dy = this.baseY - disturbance.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < disturbance.radius) {
            // Calculate wave effect based on distance from center of disturbance
            const distanceRatio = 1 - distance / disturbance.radius;
            const angle = (disturbance.age / disturbance.duration) * Math.PI * 8;
            const waveHeight = Math.sin(angle) * disturbance.strength * distanceRatio;
            
            // Apply disturbance to target position
            this.targetY += waveHeight;
          }
        }
        
        // Mouse movement influence
        if (mouse.down && this.waveIndex === 0) {
          const dx = this.x - mouse.x;
          const dy = this.baseY - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < this.maxDisturbance) {
            // Apply direct mouse influence for the top wave when dragging
            const influence = (1 - distance / this.maxDisturbance) * 2;
            this.targetY += mouse.velocityY * influence;
          }
        }
        
        // Spring physics simulation (add acceleration based on distance from target)
        const force = (this.targetY - this.y) * this.damping;
        this.acceleration = force / this.mass;
        
        // Update velocity with acceleration and friction
        this.velocityY += this.acceleration;
        this.velocityY *= this.friction;
        
        // Update position
        this.y += this.velocityY;
      }
    }
    
    // Disturbance class for ripples
    class Disturbance {
      constructor(x, y, radius, strength) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.strength = strength;
        this.age = 0;
        this.duration = 60; // Frames the disturbance lasts
      }
      
      // Return true if the disturbance is still active
      update() {
        this.age++;
        return this.age < this.duration;
      }
    }
    
    // Create a new disturbance (ripple)
    const createDisturbance = (x, y, radius, strength) => {
      disturbances.push(new Disturbance(x, y, radius, strength));
    };
    
    // Initialize waves
    const initWaves = () => {
      wavePoints = [];
      disturbances = [];
      
      const numberOfWaves = 5;
      const pointsPerWave = Math.ceil(canvas.width / 20);
      
      for (let w = 0; w < numberOfWaves; w++) {
        const wave = [];
        const waveY = canvas.height * (0.3 + w * 0.15); // Distribute waves vertically
        
        for (let i = 0; i <= pointsPerWave; i++) {
          const x = (canvas.width * i) / pointsPerWave;
          const noiseOffset = i * 0.2 + w * 10; // Different phase for each point and wave
          wave.push(new WavePoint(x, waveY, noiseOffset, w));
        }
        
        wavePoints.push(wave);
      }
    };
    
    // Draw a single ripple visualization
    const drawRipple = (disturbance) => {
      const progress = disturbance.age / disturbance.duration;
      const expandedRadius = disturbance.radius * (0.5 + progress * 0.5);
      const opacity = 1 - progress;
      
      ctx.beginPath();
      ctx.strokeStyle = isDarkMode 
        ? `rgba(79, 124, 250, ${opacity * 0.5})` 
        : `rgba(45, 91, 241, ${opacity * 0.5})`;
      ctx.lineWidth = 2;
      ctx.arc(disturbance.x, disturbance.y, expandedRadius, 0, Math.PI * 2);
      ctx.stroke();
    };
    
    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set colors based on theme
      const waveColors = isDarkMode 
        ? [
            'rgba(255, 255, 255, 0.03)',
            'rgba(255, 255, 255, 0.04)',
            'rgba(255, 255, 255, 0.05)',
            'rgba(255, 255, 255, 0.06)',
            'rgba(255, 255, 255, 0.07)'
          ]
        : [
            'rgba(0, 0, 0, 0.03)',
            'rgba(0, 0, 0, 0.04)',
            'rgba(0, 0, 0, 0.05)',
            'rgba(0, 0, 0, 0.06)',
            'rgba(0, 0, 0, 0.07)'
          ];
      
      // Update disturbances and remove inactive ones
      disturbances = disturbances.filter(d => d.update());
      
      // Draw ripples
      for (const disturbance of disturbances) {
        drawRipple(disturbance);
      }
      
      // Update each wave point
      for (let w = 0; w < wavePoints.length; w++) {
        const wave = wavePoints[w];
        
        for (let i = 0; i < wave.length; i++) {
          wave[i].update(time / 1000);
        }
      }
      
      // Draw each wave
      for (let w = 0; w < wavePoints.length; w++) {
        const wave = wavePoints[w];
        
        ctx.fillStyle = waveColors[w];
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        // First point
        ctx.lineTo(wave[0].x, wave[0].y);
        
        // Draw bezier curves between points
        for (let i = 0; i < wave.length - 1; i++) {
          const curr = wave[i];
          const next = wave[i + 1];
          
          // Control points for smooth curve
          const cpX = (curr.x + next.x) / 2;
          
          ctx.bezierCurveTo(
            cpX, curr.y,
            cpX, next.y,
            next.x, next.y
          );
        }
        
        // Close the path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }
      
      // Add interactive points on top wave for better visibility of interaction
      if (mouse.down) {
        const topWave = wavePoints[0];
        ctx.fillStyle = isDarkMode ? 'rgba(79, 124, 250, 0.5)' : 'rgba(45, 91, 241, 0.5)';
        
        for (let i = 0; i < topWave.length; i += 5) {
          ctx.beginPath();
          ctx.arc(topWave[i].x, topWave[i].y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Set up event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Initialize waves and start animation
    initWaves();
    animate(0);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);
  
  return (
    <canvas ref={canvasRef} className="interactive-background"></canvas>
  );
};

export default WaveBackground;