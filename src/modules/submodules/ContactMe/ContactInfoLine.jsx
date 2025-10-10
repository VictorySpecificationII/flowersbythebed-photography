import React from "react";

const ContactInfoLine = ({ icon: Icon, children, href }) => {
  return (
    <p style={{ fontSize: "1.1rem", display: "flex", alignItems: "center", margin: 0 }}>
      {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
      {href ? (
        <a href={href} style={{ color: "white", textDecoration: "underline" }} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        children
      )}
    </p>
  );
};

export default ContactInfoLine;
