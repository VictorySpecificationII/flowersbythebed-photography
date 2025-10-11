import "./submodules/AboutMe/AboutMe.css";
import photographerImg from "../images/Home/Home3.jpeg"; // replace with your image paths
import creatorImg from "../images/Home/Home.jpeg";
import artistImg from "../images/Home/Home2.jpeg";

export default function AboutMe() {
  return (
    <div className="aboutme-container">

{/* Photographer Section */}
<section className="aboutme-section">
  <div className="aboutme-image">
    <img src={photographerImg} alt="Photographer" />
  </div>
  <div className="aboutme-text">
    <h2>Photographer</h2>
    <p>
      What kind of photography do I do? Well, I do all types. Anywhere from travel, landscapes, lifestyle to weddings, portraits, and events. Pretty much whatever you need me to do, I can do for you! I've even dabbled in food and product photography.
    </p>
    <p>
      Initially, I found my inspiration came from traveling around the world seeing different kinds of people, places, and things. As you can tell from my photos, I love colors.
    </p>
    <p>
      -- Open for shoots and collaborations! Feel free to email me for rates and more info at <a href="mailto:danielnuwin@gmail.com">danielnuwin@gmail.com</a>
    </p>

    <h3>My Camera Gear</h3>
    <ul>
      <li>Canon 5D Mark III</li>
      <li>Sigma 35mm f/1.4</li>
      <li>Tamron 24-70mm f/2.8</li>
      <li>Canon 70-200mm f/2.8</li>
      <li>Canon 50mm f/1.8</li>
      <li>Canon Speedlite 430EX II</li>
    </ul>
  </div>
</section>

      {/* Creator Section */}
      <section className="aboutme-section reverse">
        <div className="aboutme-image">
          <img src={creatorImg} alt="Creator" />
        </div>
        <div className="aboutme-text">
          <h2>Creator</h2>
          <p>I bring ideas to life, designing experiences and content that inspire and engage.</p>
        </div>
      </section>

      {/* Artist Section */}
      <section className="aboutme-section">
        <div className="aboutme-image">
          <img src={artistImg} alt="Artist" />
        </div>
        <div className="aboutme-text">
          <h2>Artist</h2>
          <p>From canvas to digital, I explore creativity and expression in every medium I touch.</p>
        </div>
      </section>

    </div>
  );
}
