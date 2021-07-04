import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    let currentURL = window.location.href;
    if (currentURL.endsWith("/")) setActive("Skills");
    else if (currentURL.endsWith("/projects")) setActive("Projects");
  }, [active]);
  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,

        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
};

export default Navbar;
