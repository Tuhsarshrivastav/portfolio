import React from "react";
import Bar from "./Bar";
import { motion } from "framer-motion";
import { tools, languages } from "../Data/resume_data";
import { Helmet } from "react-helmet";

const resume_variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
const Resume = () => {
  return (
    <motion.div
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <Helmet>
          <title> Tushar shrivastav | Resume</title>
          <meta name="description" content="Here's my all information" />
          <meta name="keywords" content="education,city,state" />
        </Helmet>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              B.com in Computer Application
            </h5>
            <p className="resume-card__name">Techno Academy(2019-2022)</p>
            <p className="resume-card__info">
              I am currently studying B.com in Computer Application from Gyan
              Ganga College of Excellence
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Who I'm</h4>
          <p className="resume-card__details">
            A passionate <strong>Full Stack Developer</strong>
            🚀 having an experience of designing and building Web and Mobile
            applications with <strong>JavaScript</strong> /{" "}
            <strong>React.js</strong> / <strong>Nodejs</strong> /{" "}
            <strong>React-Native </strong>and some other cool libraries and
            frameworks
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Frontend Technology</h5>
          <div className="mt-3 language">
            {languages.map((language) => (
              <Bar value={language} key={language.id} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading margin ">
            Backend Technology
          </h5>
          <div className="mt-3  tools">
            {tools.map((tool) => (
              <Bar value={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
