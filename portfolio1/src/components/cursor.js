import { useEffect, useRef } from "react";
import "./cursor.css";

const CursorEffect = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    if (!circles.length) return;

    const colors = [
      "#ffffff", // Pure white
      "#fafafa",
      "#f5f5f5",
      "#f0f0f0",
      "#ebebeb",
      "#e6e6e6",
      "#e1e1e1",
      "#dcdcdc",
      "#d7d7d7",
      "#d2d2d2",
      "#cdcdcd",
      "#c8c8c8",
      "#c3c3c3",
      "#bebebe",
      "#b9b9b9",
      "#b4b4b4",
      "#afafaf",
      "#aaaaaa",
      "#a5a5a5",
      "#a0a0a0",
      "#9b9b9b",
      "#969696",
      "#919191",
      "#8c8c8c",
      "#878787",
      "#828282",
      "#7d7d7d",
      "#787878",
      "#737373",
      "#6e6e6e",
      "#696969",
      "#646464",
      "#5f5f5f",
      "#5a5a5a",
      "#555555",
      "#505050",
      "#4b4b4b",
      "#464646",
      "#414141",
      "#3c3c3c",
      "#373737",
      "#323232",
      "#2d2d2d",
      "#282828",
      "#232323",
      "#1e1e1e",
      "#191919",
      "#141414",
      "#0f0f0f",
      "#0a0a0a",
      "#050505",
      "#000000"  // Pure black
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

      const size = 100;
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
      {[...Array(36)].map((_, index) => (
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