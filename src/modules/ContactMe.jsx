import React, { useState } from "react";
import ContactCard from "./submodules/ContactMe/ContactCard";
import ContactMeBackground from "./submodules/ContactMe/ContactMeBackground";
import "../App.css";

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pageFade, setPageFade] = useState(false); // <- add this

  return (
    <section id="ContactMe" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <ContactMeBackground />
      <ContactCard isHovered={isHovered} setIsHovered={setIsHovered} setPageFade={setPageFade} />

      {/* Fade overlay */}
      {pageFade && <div className="page-fade-overlay" />}

      <style>{`
        .page-fade-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          opacity: 0;
          animation: fadeIn 0.4s forwards;
          z-index: 1000;
        }

        @keyframes fadeIn {
          to { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
