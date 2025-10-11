import { useState, useEffect, lazy } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy load sections
const Home = lazy(() => import("./modules/Home"));
const Portfolio = lazy(() => import("./modules/Portfolio"));
const ContactMe = lazy(() => import("./modules/ContactMe"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);         // controls preloader visibility
  const [fadeOut, setFadeOut] = useState(false);        // controls fade-out animation

  const sections = [Home, Portfolio, ContactMe];

  // List all images to preload
  const imagesToPreload = [
    "/images/home-banner.jpg",
    "/images/portfolio1.jpg",
    "/images/portfolio2.jpg",
    "/images/contact-bg.jpg"
  ];

  useEffect(() => {
    // Preload JS modules
    const modulesPromise = Promise.all([
      import("./modules/Home"),
      import("./modules/Portfolio"),
      import("./modules/ContactMe")
    ]);

    // Preload images
    const imagesPromise = Promise.all(
      imagesToPreload.map((src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        })
      )
    );

    // Wait for both JS + images
    Promise.all([modulesPromise, imagesPromise]).then(() => {
      // Trigger fade-out
      setFadeOut(true);
      // Remove preloader from DOM after fade-out duration (e.g., 0.8s)
      setTimeout(() => setLoading(false), 800);
    });
  }, []);

  // Inline preloader with fade-out
  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          opacity: fadeOut ? 0 : 1,             // fade out
          transition: "opacity 0.8s ease"       // smooth fade
        }}
      >
        <div
          style={{
            border: "8px solid rgba(255, 255, 255, 0.2)",
            borderTop: "8px solid white",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            animation: "spin 1s linear infinite"
          }}
        />
        <style>
          {`@keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`}
        </style>
      </div>
    );
  }

  return (
    <div>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {sections.map((Section, idx) => (
        <Section key={idx} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
