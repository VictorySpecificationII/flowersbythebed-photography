import React, { useState } from "react";
import ContactMeImg from "../images/Contact/ContactMeBackground.jpeg";
import Headshot from "../images/Contact/Headshot.jpeg";
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

      {/* Transparent rectangle with flex layout */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          height: "45vh",
          maxWidth: "90%",
          maxHeight: "70%",
          background: isHovered ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)",
          border: "2px solid white",
          borderRadius: "0px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "2rem",
          textAlign: "left",
          color: "white",
          boxSizing: "border-box",
          zIndex: 3,
          transition: "background 0.3s, width 0.3s, height 0.3s",
        }}
      >
        {/* Left: Headshot */}
        <div
          style={{
            flex: "0 0 40%", // more space for the image
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Headshot}
            alt="Headshot"
            style={{
              width: "100%",
              maxWidth: "20vw", // scales with viewport width
              minWidth: "120px", // doesn't get too small on mobile
              height: "auto",
              borderRadius: "0",
              border: "none",
            }}
          />
        </div>

        {/* Right: Contact info */}
        <div
          style={{
            flex: "1",
            paddingLeft: "2rem",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Contact Me
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Email: youremail@example.com
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Phone: +123 456 7890
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            Feel free to reach out for collaborations or questions!
          </p>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>
        {`
          @media (max-width: 1024px) {
            #ContactMe div[style*="flex-direction: row"] {
              flex-direction: column;
              width: 80vw;
              height: 50vh;
              padding: 1.5rem;
            }

            #ContactMe div[style*="paddingLeft: 2rem"] {
              padding-left: 0;
              margin-top: 1rem;
            }
          }

          @media (max-width: 768px) {
            #ContactMe div[style*="flex-direction: row"] {
              width: 90vw;
              height: auto;
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

