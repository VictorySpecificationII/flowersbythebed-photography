import React from "react";
import "./ContactMe.css";

const ContactInfoLine = ({ icon: Icon, children, href }) => (
  <p className="contact-info-line">
    {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
    {href ? (
      <a href={href} target="_blank" rel="noreferrer">{children}</a>
    ) : (
      children
    )}
  </p>
);

export default ContactInfoLine;
