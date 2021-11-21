import { useEffect, useState } from "react";
import "./App.css";
import hamBurger from "./assets/images/icon-hamburger.svg";
import bottomArrow from "./assets/images/icon-arrow-down.svg";
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
    </div>
  );
}

export default App;
