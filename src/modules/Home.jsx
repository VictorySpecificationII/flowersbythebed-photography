import React, { useState, useEffect } from "react";

import img1 from "../images/Home/Home.jpeg";
import img2 from "../images/Home/Home2.jpeg";
import img3 from "../images/Home/Home3.jpeg";
import img4 from "../images/Home/Home4.jpeg";

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  // Cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Image fade gallery */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1.5s ease-in-out",
            opacity: idx === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 2,
          padding: "1rem 2rem",
          background: "rgba(31, 31, 31, 0.4)",
          backdropFilter: "blur(8px)",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ margin: 0 }}>Home</h1>
        <p style={{ margin: 0 }}>Welcome to my portfolio!</p>
      </div>

      {/* Down arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "120px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "3rem",
          color: "white",
          animation: "jump 1s infinite alternate",
          zIndex: 3,
          cursor: "pointer",
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        ↓
      </div>

      {/* Image dots */}
      <div
        style={{
          position: "absolute",
          bottom: "40px", // slightly below the arrow
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 3,
        }}
      >
        {images.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: idx === current ? "white" : "rgba(255,255,255,0.5)",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>

      {/* Keyframes for jump animation */}
      <style>
        {`
          @keyframes jump {
            0% { transform: translateX(-50%) translateY(0); }
            100% { transform: translateX(-50%) translateY(-15px); }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
