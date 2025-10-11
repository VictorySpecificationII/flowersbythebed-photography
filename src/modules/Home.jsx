import React, { useState, useEffect } from "react";
import ImageCarousel from "./submodules/Home/ImageCarousel";
import DownArrow from "./submodules/Home/DownArrow";
import CarouselDots from "./submodules/Home/CarouselDots";
import ArtistOverlay from "./submodules/Home/ArtistOverlay";

import img1 from "../images/Home/Home.jpeg";
import img2 from "../images/Home/Home2.jpeg";
import img3 from "../images/Home/Home3.jpeg";
import img4 from "../images/Home/Home4.jpeg";
import ParallaxBg from "../images/Home/ParallaxBg.jpeg";

import "./submodules/Home/HomeExtras.css";

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  const sections = [
    { label: "Portfolio", id: "portfolio" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "ContactMe" },
  ];

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
        height: "150vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Parallax background */}
      <div
        className="home-parallax-bg"
        style={{
          backgroundImage: `url(${ParallaxBg})`,
        }}
      />

      {/* Carousel images & artist overlay */}
      <div
        className="home-carousel-container"
        style={{ position: "sticky", top: 0, height: "100vh", zIndex: 1 }}
      >
        <ImageCarousel images={images} current={current} />
        <ArtistOverlay sections={sections} />

        {/* Arrow + dots container */}
        <div className="home-down-arrow-container">
          <DownArrow />
          <CarouselDots count={images.length} current={current} />
        </div>
      </div>
    </section>
  );
};

export default Home;
