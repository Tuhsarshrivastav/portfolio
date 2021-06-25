import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import PlaceIcon from "@material-ui/icons/Place";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typewriter from "typewriter-effect";
const Sidebar = () => {
  const handleEmail = () => {
    window.open("mailto:ts3657@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 1.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      {/* Profile image  */}
      <img loading="lazy" src={profile} alt="Profile" className="sidebar__avatar" />
      {/* name */}
      <div className="sidebar__name">
        Tushar <span>Shrivastav</span>
      </div>
      {/* title  */}
      <div className="sidebar__item sidebar__title">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Web-Developer")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Mobile-Developer")
              .deleteAll()
              .start();
          }}
        />
      </div>
      {/* download resume  */}
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">Download Resume</div>
      </a>
      {/* socials icons  */}
      <figure className="my-2 sidebar__social-icons ">
        <a href="https://twitter.com/TusharS70759853">
          <TwitterIcon
            style={{ fontSize: "30px" }}
            className="mr-3 sidebar__icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/tushar-shrivastava-2b23691b2/">
          <LinkedInIcon
            style={{ fontSize: "30px" }}
            className="sidebar__icon"
          />
        </a>
      </figure>
      {/* Links */}
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github ">
          <a href="https://github.com/Tuhsarshrivastav">
            <GitHubIcon className="mr-2 sidebar__icon" /> Github
          </a>
        </div>
        <div className="sidebar__item" style={{ cursor: "pointer" }}>
          {" "}
          &nbsp;
          <PlaceIcon style={{ fontSize: "30px" }} />
          &nbsp; Jabalpur
        </div>
      </div>
      {/* emailbotton  */}
      <div className="sidebar__item sidebar__email" onClick={handleEmail}>
        Email Me
      </div>
    </motion.div>
  );
};

export default Sidebar;
