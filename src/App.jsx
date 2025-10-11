import { useState, useEffect, lazy } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Preloader from "./modules/Preloader";
import "./App.css";

// Lazy load sections
const Home = lazy(() => import("./modules/Home"));
const Portfolio = lazy(() => import("./modules/Portfolio"));
const ContactMe = lazy(() => import("./modules/ContactMe"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // preloader visibility
  const [fadeOut, setFadeOut] = useState(false); // preloader fade
  const [contentVisible, setContentVisible] = useState(false); // content fade in

  const sections = [Home, Portfolio, ContactMe];

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
          img.onerror = resolve; // resolve anyway
        })
      )
    );

    // Wait for both JS + images
    Promise.all([modulesPromise, imagesPromise]).then(() => {
      setFadeOut(true); // start preloader fade
      setTimeout(() => setContentVisible(true), 100); // fade in content slightly after fade starts
      setTimeout(() => setLoading(false), 800); // remove preloader after transition
    });
  }, []);

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader fadeOut={fadeOut} />}

      {/* Main content */}
      <div className={`main-content ${contentVisible ? 'visible' : ''}`}>
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {sections.map((Section, idx) => (
          <Section key={idx} />
        ))}

        <Footer />
      </div>
    </>
  );
}

export default App;

