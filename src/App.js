import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";
import hamBurger from "./assets/images/icon-hamburger.svg";
import bottomArrow from "./assets/images/icon-arrow-down.svg";
import eggImg from "./assets/images/desktop/image-transform.jpg";
import standOut from "./assets/images/desktop/image-stand-out.jpg";
import graphicDes from "./assets/images/desktop/image-graphic-design.jpg";
import photoGraphy from "./assets/images/desktop/image-photography.jpg";
// client
import emily from "./assets/images/image-emily.jpg";
import thomas from "./assets/images/image-thomas.jpg";
import jennie from "./assets/images/image-jennie.jpg";
// image grid
import milkbottles from "./assets/images/desktop/image-gallery-milkbottles.jpg";
import orange from "./assets/images/desktop/image-gallery-orange.jpg";
import cone from "./assets/images/desktop/image-gallery-cone.jpg";
import sugarcubes from "./assets/images/desktop/image-gallery-sugarcubes.jpg";
// social
import facebook from "./assets/images/icon-facebook.svg";
import instagram from "./assets/images/icon-instagram.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
// components
import ImageOnly from "./components/ImageOnly";
import TextOnly from "./components/TextOnly";
import ImageText from "./components/ImageText";
import ClientCard from "./components/ClientCard";

function App() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    console.log(nav);
  }, [nav]);
  return (
    <div className="App">
      <header>
        <h1 className="logo">sunnyside</h1>
        <img
          onClick={() => setNav(!nav)}
          className="hamburger"
          src={hamBurger}
          alt="ham"
        />
        <nav className={nav ? "active" : ""}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contract</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div className="content-body">
          <div className="content-head">
            WE ARE <br />
            CREATIVES
          </div>
          <div className="arrow-image">
            <img src={bottomArrow} alt="bottomArrow" />
          </div>
        </div>
      </div>
      <div className="body-grid">
        <ImageOnly img={eggImg} />
        <TextOnly
          elename="transform"
          head="Transform your brand"
          body=" We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
        />
        <ImageOnly img={standOut} />
        <TextOnly
          elename="standout"
          head="Stand out to the right audience"
          body="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        />
        <ImageText
          img={graphicDes}
          head="Graphic Design"
          class="graphic-design"
          body="Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients’ attention."
        />
        <ImageText
          img={photoGraphy}
          head="Photography"
          class="photography"
          body=" Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
      <div className="testimonials-head">Client testimonials</div>
      <div className="testimonials">
        <ClientCard
          img={emily}
          response="We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit."
          name="Emily R."
          occupation="Marketing Director"
        />
        <ClientCard
          img={thomas}
          response=" Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. "
          name="Thomas S. "
          occupation="Chief Operating Officer "
        />
        <ClientCard
          img={jennie}
          response="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! "
          name="Jennie F. "
          occupation="Business Owner"
        />
      </div>
      <div className="image-grid">
        <img src={milkbottles} alt="milkbottles" />
        <img src={orange} alt="orange" />
        <img src={cone} alt="cone" />
        <img src={sugarcubes} alt="sugarcubes" />
      </div>
      <footer>
        <div className="footer-logo">sunnyside</div>
        <div className="footer-links">
          <a href="#">About </a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className="footer-social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
        </div>
      </footer>
    </div>
  );
}

export default App;
