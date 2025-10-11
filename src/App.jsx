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
  const [modulesLoaded, setModulesLoaded] = useState(false);

  const sections = [Home, Portfolio, ContactMe];

  useEffect(() => {
    // Preload all lazy modules
    Promise.all([
      import("./modules/Home"),
      import("./modules/Portfolio"),
      import("./modules/ContactMe")
    ])
      .then(() => {
        setModulesLoaded(true); // all modules are loaded
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to preload modules:", err);
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

      {/* Only wrap in Suspense if modules are not preloaded */}
      {modulesLoaded
        ? sections.map((Section, idx) => <Section key={idx} />)
        : sections.map((Section, idx) => (
            <Suspense key={idx} fallback={<div style={{ height: "100vh" }}>Loading...</div>}>
              <Section />
            </Suspense>
          ))}

      <Footer />
    </div>
  );
}

export default App;
