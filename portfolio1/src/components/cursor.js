import { useEffect, useRef } from "react";
import "./cursor.css";

const CursorEffect = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    if (!circles.length) return;

    const colors = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
      "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
      "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
      "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
      "#48005f", "#3d005e"
    ];

    circles.forEach((circle, index) => {
      circle.style.backgroundColor = colors[index % colors.length];
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const handleClick = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      document.body.appendChild(ripple);

      const size = Math.max(window.innerWidth, window.innerHeight);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - size / 2}px`;
      ripple.style.top = `${e.clientY - size / 2}px`;

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(200)].map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default CursorEffect;