import React, { useState } from "react";
import ContactCard from "./submodules/ContactMe/ContactCard";
import ContactMeBackground from "./submodules/ContactMe/ContactMeBackground";
import "../App.css";

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="ContactMe" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <ContactMeBackground />
      <ContactCard isHovered={isHovered} setIsHovered={setIsHovered} />

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          #ContactMe div[style*="flex-direction: row"] {
            flex-direction: column;
            width: 80vw;
            height: 50vh;
            padding: 1.5rem;
          }
          #ContactMe div[style*="paddingLeft: 2rem"] {
            padding-left: 0;
            margin-top: 1rem;
          }
        }
        @media (max-width: 768px) {
          #ContactMe div[style*="flex-direction: row"] { width: 90vw; height: auto; }
          #ContactMe h2 { font-size: 1.5rem; }
          #ContactMe h3 { font-size: 1.2rem; }
          #ContactMe p { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
