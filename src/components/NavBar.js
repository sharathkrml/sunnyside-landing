import React from "react";
import "./NavBar.css"
function NavBar(props) {
  return (
    <nav className="navbar">
      <span onClick={()=>props.setNavToggle(!props.navToggle)} id="navbar-toggle" className="navbar-toggle">
        <i className="fas fa-bars"></i>
      </span>
      <a href="#" className="logo">
        Brand
      </a>
      <ul id="main-nav" className={`main-nav  ${props.navToggle ? "active" : ""} `}>
        <li>
          <a href="#" className="nav-links">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Contact
          </a>
        </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;
