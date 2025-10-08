import { useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Example state for mobile menu toggle (optional for now)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section id="home" className="section">
        <h1>Home</h1>
        <p>Welcome to my portfolio!</p>
      </section>

      <section id="portfolio" className="section">
        <h1>Portfolio</h1>
        <p>Some of my best work.</p>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
        <p>Side projects and experiments.</p>
      </section>

      <section id="about" className="section">
        <h1>About Me</h1>
        <p>A little bit about myself.</p>
      </section>

      <Footer />

    </div>
  );
}

export default App
