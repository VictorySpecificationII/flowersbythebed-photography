import React, { useState } from "react";
import AboutImg from "../images/About/About.jpeg";
import "../App.css";

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Set the square size for desktop
  const squareSize = "500px"; // you can adjust this

  return (
    <section
      id="ContactMe"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background image: top half */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%",
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      ></div>

      {/* Bottom white half */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%",
          background: "white",
          zIndex: 2,
        }}
      ></div>

      {/* Dark transparent square */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // perfectly center
          width: squareSize,
          height: squareSize, // make it a square
          maxWidth: "90%",     // responsive fallback
          maxHeight: "90%",    // responsive fallback
          background: isHovered
            ? "rgba(0,0,0,0.6)"
            : "rgba(0,0,0,0.4)",
          border: "2px solid white",
          borderRadius: "0px",
          textAlign: "left",
          color: "white",
          boxSizing: "border-box",
          padding: "2rem", // padding inside the square
          zIndex: 3,
          transition: "background 0.3s, padding 0.3s",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h2>
        <p style={{ fontSize: "1.2rem" }}>
          Get in touch! I'd love to hear from you.
        </p>
      </div>

      {/* Inline responsive styling */}
      <style>
        {`
          @media (max-width: 768px) { /* mobile */
            #ContactMe div[style*="width: 500px"] {
              width: 80vw;
              height: 80vw;
              padding: 1.5rem;
            }

            #ContactMe h2 {
              font-size: 1.5rem;
            }

            #ContactMe p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactMe;
