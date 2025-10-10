import React from "react";
import ContactInfoLine from "./ContactInfoLine";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import Headshot from "../../../images/Contact/Headshot.jpeg";
import "./ContactMe.css";

const ContactCard = ({ isHovered, setIsHovered }) => {
  return (
    <div
      className="contact-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background: isHovered ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)" }}
    >
      <div className="contact-card-left">
        <img src={Headshot} alt="Headshot" />
      </div>

      <div className="contact-card-right">
        <h3>Hello! <span role="img" aria-label="waving hand">👋</span></h3>
        <h2>Andri Georgiou</h2>

        <ContactInfoLine icon={FaEnvelope} href="mailto:gadropdead@gmail.com">
          Send me an email
        </ContactInfoLine>
        <ContactInfoLine icon={FaInstagram} href="https://www.instagram.com/flowersbythebed/">
          @flowersbythebed
        </ContactInfoLine>

        <hr />
        <a href="/about" className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default ContactCard;
