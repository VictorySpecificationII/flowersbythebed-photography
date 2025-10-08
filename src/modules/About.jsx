import React from "react";
import AboutImg from "../images/About/About.jpeg";
import "../App.css";

const About = () => {
  return (
    <section
      id="about"
      className="section"
      style={{
        backgroundImage: `url(${AboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",       // text color over image
      }}
    >
      <h1>About</h1>
      <p>A little bit about me!</p>
    </section>
  );
};

export default About;
