import { useEffect, useState } from "react";
import "./App.css";
import hamBurger from "./assets/images/icon-hamburger.svg";
import bottomArrow from "./assets/images/icon-arrow-down.svg";
import eggImg from "./assets/images/desktop/image-transform.jpg";
import standOut from "./assets/images/desktop/image-stand-out.jpg";

import ImageOnly from "./components/ImageOnly";
import TextOnly from "./components/TextOnly";

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
          head="Transform your brand"
          body=" We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
        />
        <ImageOnly img={standOut} />
        <TextOnly
          head="Stand out to the right audience"
          body="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        />
      </div>
    </div>
  );
}

export default App;
