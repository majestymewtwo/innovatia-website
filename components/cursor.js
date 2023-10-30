"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const trailCount = 40;
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".custom-cursor");
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      setTrails((prev) => [
        { x: e.pageX, y: e.pageY },
        ...prev.slice(0, trailCount - 1),
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <img className='custom-cursor' src="./rocket-cursor.png" />
      {trails.map((trail, index) => (
        <span
          key={index}
          className='cursor-trail'
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (trailCount - index) / trailCount, // Fade out older trails
          }}></span>
      ))}
    </>
  );
};

export default CustomCursor;
