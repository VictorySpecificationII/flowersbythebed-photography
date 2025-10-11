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
  const [loading, setLoading] = useState(true);

  const sections = [Home, Portfolio, ContactMe];

  // List all images you want preloaded
  const imagesToPreload = [
    "/images/home-banner.jpg",
    "/images/portfolio1.jpg",
    "/images/portfolio2.jpg",
    "/images/contact-bg.jpg"
  ];

  useEffect(() => {
    // 1️⃣ Preload all JS modules
    const modulesPromise = Promise.all([
      import("./modules/Home"),
      import("./modules/Portfolio"),
      import("./modules/ContactMe")
    ]);

    // 2️⃣ Preload all images
    const imagesPromise = Promise.all(
      imagesToPreload.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // resolve anyway so a failed image doesn't block
        });
      })
    );

    // 3️⃣ Wait for both JS + images
    Promise.all([modulesPromise, imagesPromise]).then(() => {
      setLoading(false);
    });
  }, []);

  // Inline preloader
  if (loading) {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}>
        <div style={{
          border: "8px solid rgba(255, 255, 255, 0.2)",
          borderTop: "8px solid white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          animation: "spin 1s linear infinite"
        }} />
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

      {sections.map((Section, idx) => <Section key={idx} />)}

      <Footer />
    </div>
  );
}

export default App;

