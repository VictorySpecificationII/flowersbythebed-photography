import { useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

import Home from "./modules/Home";
import Portfolio from "./modules/Portfolio";
import Projects from "./modules/Projects";
import About from "./modules/About";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // store **component references**, not JSX
  const sections = [Home, Portfolio, Projects, About];

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
