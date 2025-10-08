import React from "react";
import AboutImg from "../images/About/About.jpeg";
import "../App.css";

const ContactMe = () => {
  return (
    <section
      id="ContactMe"
      className="section"
      style={{
        backgroundImage: `url(${AboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",       // text color over image
      }}
    >
      <h1>ContactMe</h1>
      <p>Contact me!</p>
    </section>
  );
};

export default ContactMe;

