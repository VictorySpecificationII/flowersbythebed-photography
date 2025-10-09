import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ textAlign: "center", color: "#aaa", fontSize: "0.9rem" }}>
        Made with ❤️ in ReactJS by
        <a
          href="https://www.github.com/VictorySpecificationII"
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "0.3rem", color: "#fff" }}
        >
          <FaGithub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

