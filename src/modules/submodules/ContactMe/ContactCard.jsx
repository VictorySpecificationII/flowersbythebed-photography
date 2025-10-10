import React from "react";
import ContactInfoLine from "./ContactInfoLine";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import Headshot from "../../../images/Contact/Headshot.jpeg";

const ContactCard = ({ isHovered, setIsHovered }) => {
  return (
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
      <div style={{ flex: "0 0 40%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src={Headshot}
          alt="Headshot"
          style={{ width: "100%", maxWidth: "20vw", minWidth: "120px", height: "auto", borderRadius: 0, border: "none" }}
        />
      </div>

      {/* Right: Contact Info */}
      <div style={{ flex: 1, paddingLeft: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "0.5rem" }}>
        <h3 style={{ fontSize: "1.5rem", margin: 0 }}>Hello! <span role="img" aria-label="waving hand">👋</span></h3>
        <h2 style={{ fontSize: "2rem", margin: 0 }}>Andri Georgiou</h2>

        <ContactInfoLine icon={FaEnvelope} href="mailto:gadropdead@gmail.com">Send me an email</ContactInfoLine>
        <ContactInfoLine icon={FaInstagram} href="https://www.instagram.com/flowersbythebed/">@flowersbythebed</ContactInfoLine>

        <hr style={{ border: "1px solid rgba(255,255,255,0.5)", width: "50%", margin: "1rem 0" }} />

        <a href="/about" style={{ display: "inline-block", padding: "0.6rem 1.2rem", background: "white", color: "black", textDecoration: "none", borderRadius: "4px", fontWeight: "bold", textAlign: "center", width: "fit-content" }}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
