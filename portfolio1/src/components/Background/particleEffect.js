import React, { useEffect, useRef, useCallback } from 'react';

const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: undefined, y: undefined });
  const clickedRef = useRef(false);
  const ballArrayRef = useRef([]);
  const animationFrameRef = useRef(null);

  const randomIntFromRange = useCallback((min, max, decimal) => {
    if (!decimal) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return Math.random() * max + min;
  }, []);

  const getDistance = useCallback((x1, y1, x2, y2) => {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }, []);

  // Ball class wrapped in useCallback
  const createBall = useCallback((x, y, dx, dy, radius, color, ctx) => {
    return {
      x,
      y,
      dx,
      dy,
      radius,
      color,
      opacity: 1,
      distance: randomIntFromRange(100, 200, false),
      ctx,

      draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
      },

      update(balls) {
        this.draw();

        // Connect to other balls
        for (let i = 0; i < balls.length; i++) {
          if (getDistance(this.x, this.y + this.radius, balls[i].x, balls[i].y) < this.distance) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(balls[i].x, balls[i].y);
            this.ctx.strokeStyle = this.color;
            this.ctx.save();
            this.ctx.globalAlpha = 0.15;
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx.closePath();
          }
        }

        // Connect to mouse
        if (mouseRef.current.x && mouseRef.current.y &&
            getDistance(this.x, this.y, mouseRef.current.x, mouseRef.current.y) < this.distance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.x, this.y);
          this.ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          this.ctx.strokeStyle = this.color;
          this.ctx.save();
          this.ctx.globalAlpha = 0.3;
          this.ctx.stroke();
          this.ctx.restore();
          this.ctx.closePath();
        }

        // Bounce off walls
        if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth) {
          this.dx = -this.dx;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > window.innerHeight) {
          this.dy = -this.dy;
        }

        // Move
        this.x += this.dx * 2;
        this.y += this.dy * 2;
      }
    };
  }, [getDistance, randomIntFromRange]);

  const init = useCallback((ctx) => {
    ballArrayRef.current = [];
    for (let i = 0; i < 200; i++) {
      const radius = 3;
      const x = randomIntFromRange(radius, window.innerWidth - radius, true);
      const y = randomIntFromRange(radius, window.innerHeight - radius, true);
      const dx = randomIntFromRange(-0.3, 0.5, true);
      const dy = randomIntFromRange(-0.3, 0.5, true);
      ballArrayRef.current.push(createBall(x, y, dx, dy, radius, 'grey', ctx));
    }
  }, [randomIntFromRange, createBall]);

  const animate = useCallback((ctx) => {
    animationFrameRef.current = requestAnimationFrame(() => animate(ctx));
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (clickedRef.current === true) {
      for (let i = 0; i < 4; i++) {
        const radius = 3;
        const dx = randomIntFromRange(-0.5, 1, true);
        const dy = randomIntFromRange(-0.5, 1, true);
        ballArrayRef.current.push(
          createBall(mouseRef.current.x, mouseRef.current.y, dx, dy, radius, 'grey', ctx)
        );
        ballArrayRef.current.splice(1, 1);
      }
      clickedRef.current = false;
    }

    for (let i = 0; i < ballArrayRef.current.length; i++) {
      ballArrayRef.current[i].update(ballArrayRef.current);
    }

    // Draw text
    ctx.font = "bold 80px Arial";
    ctx.fillStyle = "grey";
    ctx.textAlign = "center";
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 20;
  }, [randomIntFromRange, createBall]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(ctx);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      clickedRef.current = true;
    };

    const handleMouseUp = () => {
      clickedRef.current = false;
    };

    // Initial setup
    handleResize();
    animate(ctx);

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [init, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black -z-10"
    />
  );
};

export default NetworkAnimation;