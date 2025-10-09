import React, { useState } from "react";
import ContactMeImg from "../images/Contact/ContactMeBackground.jpeg";
import "../App.css";

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);

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
          backgroundImage: `url(${ContactMeImg})`,
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

      {/* Wider transparent rectangle */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)", // center
          width: "50vw",       // wider: 60% of viewport width
          height: "45vh",      // height relative to viewport
          maxWidth: "90%",
          maxHeight: "70%",
          background: isHovered
            ? "rgba(0,0,0,0.6)"
            : "rgba(0,0,0,0.4)",
          border: "2px solid white",
          borderRadius: "0px",
          textAlign: "left",
          color: "white",
          boxSizing: "border-box",
          padding: "2rem",
          zIndex: 3,
          transition: "background 0.3s, width 0.3s, height 0.3s",
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
          @media (max-width: 1024px) { /* tablets */
            #ContactMe div[style*="width: 60vw"] {
              width: 80vw;
              height: 50vh;
              padding: 1.5rem;
            }
          }

          @media (max-width: 768px) { /* mobiles */
            #ContactMe div[style*="width: 60vw"] {
              width: 90vw;
              height: 40vh;
              padding: 1rem;
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
