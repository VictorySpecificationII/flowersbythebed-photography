import { useState, lazy, Suspense } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy load sections
const Home = lazy(() => import("./modules/Home"));
const Portfolio = lazy(() => import("./modules/Portfolio"));
const Projects = lazy(() => import("./modules/Projects"));
const About = lazy(() => import("./modules/About"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [Home, Portfolio, Projects, About];

  return (
    <div>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {sections.map((Section, idx) => (
        <Suspense
          key={idx}
          fallback={<div style={{ height: "100vh" }}>Loading...</div>}
        >
          <Section />
        </Suspense>
      ))}

      <Footer />
    </div>
  );
}

export default App;
