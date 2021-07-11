import js from "../assets/icons/javascript.svg";
import native from "../assets/icons/native.svg";
import node from "../assets/icons/nodejs.svg";
import firebase from "../assets/icons/firebase-icon.svg";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.svg";
import mongodb from "../assets/icons/mongodb.svg";
import redux from "../assets/icons/redux.svg";
import react from "../assets/icons/react.png";
import typescript from "../assets/icons/typescript-icon.svg";
import grapqh from "../assets/icons/graphql.svg";
import nextjs from "../assets/icons/nextjs-outline.svg";
import { motion } from "framer-motion";
function Landing() {
  return (
    <motion.div
      className="landingScreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div className="girdContainer">
        <h1 className="landingScreenHeading">JavaScript Developer</h1>
        <img className="landingImage" src={html} alt="html" />
        <img className="landingImage" src={css} alt="css" />
        <img className="landingImage" src={js} alt="javascript" />
        <img className="landingImage" src={typescript} alt="typescript" />
        <img className="landingImage" src={native} alt="react-native" />
        <img className="landingImage" src={redux} alt="redux" />
        <img className="landingImage" src={mongodb} alt="mongodb" />
        <img className="landingImage" src={react} alt="reactjs" />
        <img className="landingImage" src={node} alt="nodejs" />
        <img className="landingImage" src={firebase} alt="firebase" />
        <img className="landingImage" src={grapqh} alt="graphql" />
        <img className="landingImage" src={nextjs} alt="nextsjs" />
      </div>
    </motion.div>
  );
}

export default Landing;
