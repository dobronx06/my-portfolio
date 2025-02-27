// Animation utility functions

/**
 * Typed text animation effect
 * @param {string} text - The text to animate
 * @param {function} setText - setState function to update the text
 * @param {number} speed - Typing speed in milliseconds
 * @param {function} onComplete - Callback when animation completes
 * @returns {function} - Cleanup function
 */
export const typeText = (text, setText, speed = 50, onComplete = () => {}) => {
    let index = 0;
    let interval;
    
    // Clear any existing text
    setText('');
    
    // Start typing animation
    interval = setInterval(() => {
      if (index < text.length) {
        setText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, speed);
    
    // Cleanup function
    return () => clearInterval(interval);
  };
  
  /**
   * Text reveal animation with split characters
   * @param {string} selector - CSS selector for the target element
   * @param {number} duration - Animation duration in milliseconds
   * @param {number} delay - Delay between each character in milliseconds
   * @param {string} easing - CSS easing function
   */
  export const revealText = (selector, duration = 800, delay = 30, easing = 'cubic-bezier(0.5, 0, 0.5, 1)') => {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const text = element.innerText;
    element.innerHTML = '';
    element.style.visibility = 'visible';
    
    // Split text into characters and create spans
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
      span.style.transitionDelay = `${index * delay}ms`;
      
      element.appendChild(span);
      
      // Trigger animation in the next frame
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 10);
    });
  };
  
  /**
   * Animate number counting
   * @param {HTMLElement} element - Target element
   * @param {number} start - Start value
   * @param {number} end - End value
   * @param {number} duration - Animation duration in milliseconds
   * @param {string} prefix - Text to display before the number
   * @param {string} suffix - Text to display after the number
   * @param {number} decimals - Number of decimal places
   */
  export const countUp = (element, start = 0, end = 100, duration = 2000, prefix = '', suffix = '', decimals = 0) => {
    if (!element) return;
    
    const startTime = performance.now();
    const updateCount = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentCount = start + (end - start) * easedProgress;
      
      element.textContent = `${prefix}${currentCount.toFixed(decimals)}${suffix}`;
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };
  
  // Easing functions
  export const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  export const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
  export const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  
  /**
   * Create a staggered animation for multiple elements
   * @param {string} selector - CSS selector for the target elements
   * @param {string} animationClass - CSS class with the animation
   * @param {number} staggerDelay - Delay between each element in milliseconds
   * @param {number} initialDelay - Initial delay before starting animations
   * @param {function} callback - Optional callback after all animations
   */
  export const staggerAnimation = (selector, animationClass, staggerDelay = 100, initialDelay = 0, callback = null) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add(animationClass);
        
        // If this is the last element and a callback was provided
        if (i === elements.length - 1 && callback) {
          // Wait for the animation to complete
          const animDuration = getComputedStyle(el).transitionDuration;
          const duration = parseFloat(animDuration) * 1000;
          setTimeout(callback, duration);
        }
      }, initialDelay + i * staggerDelay);
    });
  };
  
  /**
   * Parallax effect for elements based on mouse movement or scroll
   * @param {string} selector - CSS selector for the target elements
   * @param {number} intensity - Effect intensity (0-1)
   * @param {boolean} useMouseMove - Whether to use mouse movement (true) or scroll (false)
   */
  export const setupParallax = (selector, intensity = 0.1, useMouseMove = true) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    
    if (useMouseMove) {
      // Mouse movement parallax
      document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        elements.forEach((el, index) => {
          // Add some variation based on element index
          const factor = intensity * (1 + (index % 3) * 0.2);
          const depthX = el.getAttribute('data-depth-x') || factor;
          const depthY = el.getAttribute('data-depth-y') || factor;
          
          const x = mouseX * depthX * 100;
          const y = mouseY * depthY * 100;
          
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
      });
    } else {
      // Scroll parallax
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        elements.forEach((el, index) => {
          const factor = intensity * (1 + (index % 3) * 0.2);
          const speed = el.getAttribute('data-speed') || factor;
          const yPos = -scrollTop * speed;
          
          el.style.transform = `translateY(${yPos}px)`;
        });
      });
    }
  };
  
  // Export as default object as well
  export default {
    typeText,
    revealText,
    countUp,
    staggerAnimation,
    setupParallax,
    easing: {
      easeInOutQuad,
      easeOutQuart,
      easeInOutCubic
    }
  };