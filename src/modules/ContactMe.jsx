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

      {/* Translucent rectangle in the middle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // center horizontally and vertically
          width: "70%",
          maxWidth: "700px",
          minHeight: "300px",
          padding: "3rem 2rem",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "12px",
          textAlign: "center",
          zIndex: 3,
          color: "#111",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h2>
        <p style={{ fontSize: "1.2rem" }}>Get in touch! I'd love to hear from you.</p>
      </div>
    </section>
  );
};

export default ContactMe;
