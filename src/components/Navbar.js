import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    let currentURL = window.location.href;
    if (currentURL.endsWith("/")) setActive("Skills");
    else if (currentURL.endsWith("/projects")) setActive("Projects");
  }, [active]);

  return (
    <div className="navbar">
      <div className="navbar__active">{active}</div>

      <div className="navbar__items">
        {active !== "Skills" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("Skills")}>
              Skills
            </div>
          </Link>
        )}
        {active !== "Projects" ? (
          <Link to="/projects">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
