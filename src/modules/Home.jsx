import React, { useState, useEffect } from "react";
import ImageCarousel from "./submodules/Home/ImageCarousel";
import ArtistOverlay from "./submodules/Home/ArtistOverlay";

import img1 from "../images/Home/Home.jpeg";
import img2 from "../images/Home/Home2.jpeg";
import img3 from "../images/Home/Home3.jpeg";
import img4 from "../images/Home/Home4.jpeg";

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ImageCarousel images={images} current={current} />
      <ArtistOverlay />

      {/* Down arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "120px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "3rem",
          color: "white",
          animation: "jump 1s infinite alternate",
          zIndex: 3,
          cursor: "pointer",
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        ↓
      </div>

      <style>
        {`
          @keyframes jump {
            0% { transform: translateX(-50%) translateY(0); }
            100% { transform: translateX(-50%) translateY(-15px); }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
