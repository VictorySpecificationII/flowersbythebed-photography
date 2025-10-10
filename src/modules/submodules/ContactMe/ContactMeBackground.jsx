import React from "react";
import ContactMeImg from "../../../images/Contact/ContactMeBackground.jpeg";

const ContactMeBackground = () => {
  return (
    <>
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "50%",
        backgroundImage: `url(${ContactMeImg})`, backgroundSize: "cover",
        backgroundPosition: "center", backgroundAttachment: "fixed", zIndex: 1
      }}></div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: "50%",
        background: "white", zIndex: 2
      }}></div>
    </>
  );
};

export default ContactMeBackground;
