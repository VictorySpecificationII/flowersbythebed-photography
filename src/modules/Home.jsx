import React, { useState, useEffect } from "react";
import ImageCarousel from "./submodules/Home/ImageCarousel";
import ArtistOverlay from "./submodules/Home/ArtistOverlay";

import img1 from "../images/Home/Home.jpeg";
import img2 from "../images/Home/Home2.jpeg";
import img3 from "../images/Home/Home3.jpeg";
import img4 from "../images/Home/Home4.jpeg";
import ParallaxBg from "../images/Home/ParallaxBg.jpeg"; // your parallax background

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  // Section buttons
  const sections = [
    { label: "Portfolio", id: "portfolio" },
    { label: "Projects", id: "projects" },
    { label: "Client Photos", id: "client-photos" },
    { label: "Contact", id: "ContactMe" },
  ];

  // Cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      style={{
        height: "150vh", // allow scroll for parallax
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Parallax background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${ParallaxBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: 0,
        }}
      />

      {/* Carousel images & artist overlay */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 1,
        }}
      >
        <ImageCarousel images={images} current={current} />
        <ArtistOverlay sections={sections} />

        {/* Down arrow and carousel dots (arrow above, dots below) */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 5,
          }}
        >
          {/* Down arrow */}
          <div
            className="down-arrow"
            style={{
              fontSize: "3rem",
              color: "white",
              animation: "jump 1s infinite alternate",
              cursor: "pointer",
              marginBottom: "20px",
            }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            ↓
          </div>

          {/* Carousel dots */}
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {images.map((_, idx) => (
              <div
                key={idx}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor:
                    idx === current ? "white" : "rgba(255,255,255,0.5)",
                  transition: "background-color 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
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

