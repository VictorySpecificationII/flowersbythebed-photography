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
      setCurrent((prev) => (prev + 1) % images.length);
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

      {/* Artist card overlay - larger and square corners */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          padding: "6rem 18rem",       // larger padding for a bigger rectangle
          background: "rgba(0,0,0,0.4)", // subtle dark transparent background
          border: "2px solid white",   // white outline
          borderRadius: "0px",         // square corners
          minWidth: "500px",           // larger minimum width
          maxWidth: "90%",
          textAlign: "left",
          color: "white",
        }}
      >
        {/* Artist name */}
        <h1 style={{ margin: 0, paddingBottom: "6px" }}>Artist Name</h1>

        {/* Separator line */}
        <div
          style={{
            height: "2px",
            width: "fit-content",
            backgroundColor: "white",
            marginBottom: "12px",
          }}
        />

        {/* Roles */}
        <p style={{ margin: 0, fontSize: "1rem", letterSpacing: "1px" }}>
          | Photographer | Creator | Manager |
        </p>
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
          bottom: "40px",
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
