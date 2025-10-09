import React, { useState, useEffect, useRef } from "react";
import ImageCarousel from "./submodules/Home/ImageCarousel";
import ArtistOverlay from "./submodules/Home/ArtistOverlay";

import img1 from "../images/Home/Home.jpeg";
import img2 from "../images/Home/Home2.jpeg";
import img3 from "../images/Home/Home3.jpeg";
import img4 from "../images/Home/Home4.jpeg";

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const transitionRef = useRef(null);

  // Section buttons
  const sections = [
    { label: "Portfolio", id: "portfolio" },
    { label: "Projects", id: "projects" },
    { label: "Client Photos", id: "client-photos" },
    { label: "Contact", id: "contact" },
  ];

  // Cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Fade-in transition rectangle
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && transitionRef.current) {
          transitionRef.current.classList.add("visible");
        }
      },
      { root: null, rootMargin: "0px 0px -30% 0px", threshold: 0.1 }
    );
    if (transitionRef.current) observer.observe(transitionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Carousel images */}
      <ImageCarousel images={images} current={current} />

      {/* Artist overlay */}
      <ArtistOverlay sections={sections} />

      {/* Down arrow */}
      <div
        className="down-arrow"
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

      {/* Carousel dots (above rectangle) */}
      <div
        style={{
          position: "absolute",
          bottom: "220px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 4,
        }}
      >
        {images.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: idx === current ? "white" : "rgba(255,255,255,0.5)",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>


      {/* Transition rectangle with texts */}
      <div ref={transitionRef} className="transition-rectangle">
          <div className="rectangle-content">
            <h1>Featured Portfolio</h1>
            <h2>2017 - Present</h2>
            <p>Eclectic Everything</p>
          </div>
      </div>

      <style>
        {`
          @keyframes jump {
            0% { transform: translateX(-50%) translateY(0); }
            100% { transform: translateX(-50%) translateY(-15px); }
          }

          .transition-rectangle {
            position: absolute;
            bottom: -150px;
            left: 50%;
            transform: translateX(-50%) translateY(60px);
            width: 60%;
            height: 220px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 0;
            opacity: 0;
            transition: opacity 1.5s ease, transform 1.5s ease;
            z-index: 2;
            pointer-events: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
            padding: 1rem;
            box-sizing: border-box;
            color: black;
          }

          .transition-rectangle.visible {
            opacity: 1;
            transform: translateX(-50%) translateY(-10px);
          }

          .transition-rectangle h1 {
            font-size: 2rem;
            color: black;
            margin: 0;
          }

          .transition-rectangle h2 {
            font-size: 1.2rem;
            color: #1e90ff;
            margin: 0;
          }

          .transition-rectangle p {
            font-size: 1rem;
            color: gray;
            margin: 0;
          }

          @media (max-width: 768px) {
            .down-arrow { font-size: 2rem; bottom: 60px; }
            .transition-rectangle { width: 80%; height: 180px; }
            .transition-rectangle h1 { font-size: 1.5rem; }
            .transition-rectangle h2 { font-size: 1rem; }
            .transition-rectangle p { font-size: 0.9rem; }
          }

          @media (max-width: 480px) {
            .down-arrow { font-size: 1.5rem; bottom: 40px; }
            .transition-rectangle { width: 90%; height: 140px; }
            .transition-rectangle h1 { font-size: 1.2rem; }
            .transition-rectangle h2 { font-size: 0.9rem; }
            .transition-rectangle p { font-size: 0.8rem; }
          }
        `}
      </style>



    </section>
  );
};

export default Home;
