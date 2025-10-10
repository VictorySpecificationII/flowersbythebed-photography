import React from "react";
import ContactMeImg from "../../../images/Contact/ContactMeBackground.jpeg";
import "./ContactMe.css";

const ContactMeBackground = () => (
  <>
    <div
      className="contact-me-background-top"
      style={{ backgroundImage: `url(${ContactMeImg})` }}
    />
    <div className="contact-me-background-bottom" />
  </>
);

export default ContactMeBackground;

