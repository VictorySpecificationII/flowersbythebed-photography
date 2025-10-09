import React from "react";
import AboutImg from "../images/About/About.jpeg";
import "../App.css";

const ContactMe = () => {
  return (
    <section
      id="ContactMe"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background image: visible in top half */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%", // only top half
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax effect
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
          height: "50%", // bottom half
          background: "white",
          zIndex: 2,
        }}
      ></div>

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem",
          top: "25%", // roughly center content in top half
          textAlign: "center",
          color: "#111",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact Me</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Reach out for collaborations, projects, or any questions!
        </p>
      </div>
    </section>
  );
};

export default ContactMe;

