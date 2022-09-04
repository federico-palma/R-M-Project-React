import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  function toggleHamburger() {
    setIsHamMenuOpen(!isHamMenuOpen);
  }

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img
            id="logo"
            src={require("../images/RickAndMortyLogo.png")}
            alt="Rick and Morty logo"
          />
        </Link>
      </div>
      <div
        id="hamburger"
        onClick={toggleHamburger}
        className={isHamMenuOpen ? "open-burger" : null}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={isHamMenuOpen ? "navbar-links open-menu" : "navbar-links closed-menu"}>
        <Link to="/characters">
          <p id="nav-link-character">Characters</p>
        </Link>
        <Link to="/locations">
          <p id="nav-link-location">Locations</p>
        </Link>
        <Link to="/episodes">
          <p id="nav-link-episode">Episodes</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
