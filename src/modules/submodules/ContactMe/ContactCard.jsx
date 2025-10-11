import React from "react";
import ContactInfoLine from "./ContactInfoLine";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import Headshot from "../../../images/Contact/Headshot.jpeg";
import { useNavigate } from "react-router-dom"; // for navigation
import "./ContactMe.css";

const ContactCard = ({ isHovered, setIsHovered, setPageFade }) => {
  const navigate = useNavigate();

  const handleReadMore = (e) => {
    e.preventDefault();
    if (!setPageFade) return navigate("/about"); // fallback if no fade function

    setPageFade(true); // trigger fade-out
    setTimeout(() => {
      navigate("/about");
      setPageFade(false); // reset fade for new page
    }, 400); // match your CSS transition duration
  };

  return (
    <div
      className={`contact-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="contact-card-left">
        <img src={Headshot} alt="Headshot" />
      </div>

      <div className="contact-card-right">
        <h3>Hello! <span role="img" aria-label="waving hand">👋</span></h3>
        <h2>Andri Georgiou</h2>

        <ContactInfoLine icon={FaEnvelope} href="mailto:andri@flowersbythebed.photography">
          Send me an email
        </ContactInfoLine>
        <ContactInfoLine icon={FaInstagram} href="https://www.instagram.com/flowersbythebed/">
          @flowersbythebed
        </ContactInfoLine>

        <hr />
        <button onClick={handleReadMore} className="read-more">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ContactCard;

