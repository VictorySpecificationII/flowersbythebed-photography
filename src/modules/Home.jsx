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

  // Fade-in transition rectangle when bottom of home enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && transitionRef.current) {
          transitionRef.current.classList.add("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -30% 0px", // triggers when bottom of viewport hits rectangle
        threshold: 0.1,
      }
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
      {/* Image fade carousel */}
      <ImageCarousel images={images} current={current} />

      {/* Artist overlay with buttons */}
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

      {/* Transition rectangle (glass effect) */}
      <div ref={transitionRef} className="transition-rectangle"></div>

      <style>
        {`
          /* Down arrow animation */
          @keyframes jump {
            0% { transform: translateX(-50%) translateY(0); }
            100% { transform: translateX(-50%) translateY(-15px); }
          }

          /* Glassy transition rectangle with square edges */
          .transition-rectangle {
            position: absolute;
            bottom: -120px;
            left: 50%;
            transform: translateX(-50%) translateY(60px);
            width: 60%;
            height: 200px;
            background: rgba(255, 255, 255, 0.1); /* translucent white */
            backdrop-filter: blur(12px); /* glass effect */
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 0; /* square corners */
            opacity: 0;
            transition: opacity 1.5s ease, transform 1.5s ease;
            z-index: 2;
            pointer-events: none;
          }

          /* Visible state */
          .transition-rectangle.visible {
            opacity: 1;
            transform: translateX(-50%) translateY(-10px);
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .down-arrow {
              font-size: 2rem;
              bottom: 60px;
            }
            .transition-rectangle {
              width: 80%;
              height: 150px;
            }
          }

          @media (max-width: 480px) {
            .down-arrow {
              font-size: 1.5rem;
              bottom: 40px;
            }
            .transition-rectangle {
              width: 90%;
              height: 120px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
