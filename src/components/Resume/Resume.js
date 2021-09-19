import Bar from "../Bar/Bar";
import { tools, languages } from "../../Data/resume_data";
import "./Resume.css";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      className="container resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="row ">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              B.com in Computer Application
            </h5>
            <p className="resume-card__name">Techno Academy(2019-2022)</p>
            <p className="resume-card__info">
              I am currently studying B.com in Computer Application from Gyan
              Ganga College of Excellence.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">About Me</h4>
          <p
            style={{
              color: "#494949",
              fontSize: "16px",
              fontWeight: "400",
            }}
            className="resume-card__details"
          >
            I'm tushar shrivastav a full stack developer and student living in
            jabalpur I specialise in creating fullstack webApps and mobileApps
            using javascript frontend & backend stacks
          </p>
        </div>
      </div>
      <div className="row mt-2 ">
        <div className="col-lg-6 resume-languages ">
          <h5 className="reume-language__heading">Frontend</h5>
          <div className="mt-3 language">
            {languages.map((language, index) => (
              <Bar value={language} key={index} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages ">
          <h5 className="reume-language__heading backend  ">Backend</h5>
          <div className="mt-3 tools">
            {tools.map((tool, index) => (
              <Bar value={tool} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
