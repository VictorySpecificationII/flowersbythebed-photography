import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Preloader from "./modules/Preloader";
import "./App.css";

// Lazy load pages
const Home = lazy(() => import("./modules/Home"));
const Portfolio = lazy(() => import("./modules/Portfolio"));
const ContactMe = lazy(() => import("./modules/ContactMe"));
const AboutMe = lazy(() => import("./modules/AboutMe")); // separate page

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [pageFade, setPageFade] = useState(false); // new state for page transition

  const imagesToPreload = [
    "/images/home-banner.jpg",
    "/images/portfolio1.jpg",
    "/images/portfolio2.jpg",
    "/images/contact-bg.jpg"
  ];

  useEffect(() => {
    const modulesPromise = Promise.all([
      import("./modules/Home"),
      import("./modules/Portfolio"),
      import("./modules/ContactMe"),
      import("./modules/AboutMe")
    ]);

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

    Promise.all([modulesPromise, imagesPromise]).then(() => {
      setFadeOut(true);
      setTimeout(() => setContentVisible(true), 100);
      setTimeout(() => setLoading(false), 800);
    });
  }, []);

  return (
    <Router>
      {loading && <Preloader fadeOut={fadeOut} />}

      <div className={`main-content ${contentVisible ? "visible" : ""}`}>
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setPageFade={setPageFade} />

        <Suspense fallback={<div>Loading...</div>}>
          <div className={`page-transition ${pageFade ? "fade-out" : "fade-in"}`}>
            <Routes>
              {/* Homepage route: all sections scrollable */}
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Portfolio />
                    <ContactMe />
                  </>
                }
              />

              {/* AboutMe route: full page */}
              <Route path="/about" element={<AboutMe />} />
            </Routes>
          </div>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

