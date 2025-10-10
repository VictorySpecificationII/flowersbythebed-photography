import React, { useState, useEffect } from "react";
import ImageCarousel from "./submodules/Home/ImageCarousel";
import ArtistOverlay from "./submodules/Home/ArtistOverlay";

import img1 from "../images/Home/Home.jpeg";
import img2 from "../images/Home/Home2.jpeg";
import img3 from "../images/Home/Home3.jpeg";
import img4 from "../images/Home/Home4.jpeg";
import ParallaxBg from "../images/Home/ParallaxBg.jpeg";

import "./submodules/Home/Home.css";

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  const sections = [
    { label: "Portfolio", id: "portfolio" },
    { label: "Projects", id: "projects" },
    { label: "Client Photos", id: "client-photos" },
    { label: "Contact", id: "ContactMe" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="home-section">
      <div
        className="home-parallax-bg"
        style={{ backgroundImage: `url(${ParallaxBg})` }}
      />

      <div className="home-carousel-container">
        <ImageCarousel images={images} current={current} />
        <ArtistOverlay sections={sections} />

        <div className="home-down-arrow-container">
          <div
            className="home-down-arrow"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            ↓
          </div>

          <div className="home-carousel-dots">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`home-carousel-dot ${
                  idx === current ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
