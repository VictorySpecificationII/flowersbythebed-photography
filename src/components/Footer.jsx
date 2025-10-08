import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Niax Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
