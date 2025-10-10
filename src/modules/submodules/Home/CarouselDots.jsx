import React from "react";
import "./CarouselDots.css";

const CarouselDots = ({ count, current }) => {
  return (
    <div className="home-carousel-dots">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`home-carousel-dot ${idx === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
