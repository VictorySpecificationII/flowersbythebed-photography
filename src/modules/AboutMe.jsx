import "./submodules/AboutMe/AboutMe.css";
import photographerImg from "../images/Home/Home3.jpeg";
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
		I capture moments both digitally and on film, developing my own negatives and prints. From portraits and lifestyle to events and landscapes, I love experimenting with light, color, and composition to tell stories through my lens.
          </p>
          <p>
            Initially, I found my inspiration came from traveling around the world seeing different kinds of people, places, and things. As you can tell from my photos, I love colors.
          </p>
          <p>
            -- Open for shoots and collaborations! Feel free to email me for rates and more info at <a href="mailto:andri@flowersbythebed.photography">andri@flowersbythebed.photography</a>
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

      {/* Make Section */}
      <section className="aboutme-section reverse">
        <div className="aboutme-image">
          <img src={creatorImg} alt="Creator" />
        </div>
        <div className="aboutme-text">
          <h2>Maker</h2>
          <p>I create handmade knitwear, blending traditional techniques with modern designs. Every piece I craft is a labor of love, meant to be both beautiful and functional.</p>
        </div>
      </section>

      {/* Artist Section */}
      <section className="aboutme-section">
        <div className="aboutme-image">
          <img src={artistImg} alt="Artist" />
        </div>
        <div className="aboutme-text">
          <h2>Artist</h2>
          <p>I explore both analog and digital art forms, including cyanotype printing — a photographic process producing striking blue-toned images. My work captures light, texture, and mood, merging experimentation with craft.</p>
        </div>
      </section>

    </div>
  );
}

