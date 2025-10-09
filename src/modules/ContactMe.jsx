import React, { useState } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
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
          alignItems: "flex-start",
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
            flex: "0 0 40%",
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
              maxWidth: "20vw",
              minWidth: "120px",
              height: "auto",
              borderRadius: "0",
              border: "none",
            }}
          />
        </div>

        {/* Right: Structured contact info */}
        <div
          style={{
            flex: "1",
            paddingLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", margin: 0 }}>
            Hello! <span role="img" aria-label="waving hand">👋</span>
          </h3>
          <h2 style={{ fontSize: "2rem", margin: 0 }}>Andri Georgiou</h2>

          {/* Email line with React icon */}
          <p
            style={{
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              margin: 0,
            }}
          >
            <FaEnvelope style={{ marginRight: "0.5rem" }} />
            <a
              href="mailto:youremail@example.com"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Send me an email
            </a>
          </p>

          {/* Instagram handle line with React icon */}
          <p
            style={{
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              margin: 0,
            }}
          >
            <FaInstagram style={{ marginRight: "0.5rem" }} />
            <a
              href="https://www.instagram.com/worthlesspalehands/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "underline" }}
            >
              @worthlesspalehands
            </a>
          </p>

          {/* Separator line */}
          <hr
            style={{
              border: "1px solid rgba(255,255,255,0.5)",
              width: "50%",
              margin: "1rem 0",
            }}
          />

          {/* Read More button */}
          <a
            href="/about"
            style={{
              display: "inline-block",
              padding: "0.6rem 1.2rem",
              background: "white",
              color: "black",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              textAlign: "center",
              width: "fit-content",
            }}
          >
            Read More
          </a>
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

            #ContactMe h3 {
              font-size: 1.2rem;
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
