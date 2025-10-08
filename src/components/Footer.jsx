import React from "react";
import { FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/worthlesspalehands/" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
