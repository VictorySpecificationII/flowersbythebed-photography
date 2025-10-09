import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ textAlign: "center", color: "#aaa", fontSize: "0.9rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.2rem" }}>
        Made with 
        <FaHeart size={12} color="red" />
        in ReactJS by 
        <a
          href="https://www.github.com/VictorySpecificationII"
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "0.3rem", color: "#fff" }}
        >
          <FaGithub size={14} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
